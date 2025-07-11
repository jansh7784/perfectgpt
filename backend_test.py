#!/usr/bin/env python3
"""
Backend API Testing Suite for Fake ChatGPT Conversation Generator
Tests all backend endpoints and MongoDB functionality
"""

import requests
import json
import sys
from datetime import datetime
import time

# Get backend URL from environment
BACKEND_URL = "https://c087d1d3-c82c-4359-bdb9-de7b0967e4c3.preview.emergentagent.com/api"

def test_api_root():
    """Test GET /api/ endpoint"""
    print("🧪 Testing GET /api/ endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/")
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("   ✅ GET /api/ endpoint working correctly")
                return True
            else:
                print(f"   ❌ Unexpected response message: {data.get('message')}")
                return False
        else:
            print(f"   ❌ Failed with status code: {response.status_code}")
            return False
    except Exception as e:
        print(f"   ❌ Error testing GET /api/: {str(e)}")
        return False

def test_post_status():
    """Test POST /api/status endpoint"""
    print("\n🧪 Testing POST /api/status endpoint...")
    try:
        test_data = {
            "client_name": "ChatGPT_Test_Client"
        }
        
        response = requests.post(
            f"{BACKEND_URL}/status",
            json=test_data,
            headers={"Content-Type": "application/json"}
        )
        
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if (data.get("client_name") == "ChatGPT_Test_Client" and 
                "id" in data and "timestamp" in data):
                print("   ✅ POST /api/status endpoint working correctly")
                return True, data.get("id")
            else:
                print("   ❌ Response missing required fields")
                return False, None
        else:
            print(f"   ❌ Failed with status code: {response.status_code}")
            return False, None
    except Exception as e:
        print(f"   ❌ Error testing POST /api/status: {str(e)}")
        return False, None

def test_get_status():
    """Test GET /api/status endpoint"""
    print("\n🧪 Testing GET /api/status endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/status")
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Retrieved {len(data)} status records")
            
            if len(data) > 0:
                # Check if our test record exists
                test_record = None
                for record in data:
                    if record.get("client_name") == "ChatGPT_Test_Client":
                        test_record = record
                        break
                
                if test_record:
                    print(f"   Found test record: {test_record}")
                    print("   ✅ GET /api/status endpoint working correctly")
                    return True
                else:
                    print("   ⚠️  GET endpoint works but test record not found")
                    return True  # Still working, just no test data
            else:
                print("   ⚠️  GET endpoint works but no records found")
                return True  # Still working, just empty
        else:
            print(f"   ❌ Failed with status code: {response.status_code}")
            return False
    except Exception as e:
        print(f"   ❌ Error testing GET /api/status: {str(e)}")
        return False

def test_mongodb_persistence():
    """Test MongoDB data persistence by creating and retrieving data"""
    print("\n🧪 Testing MongoDB data persistence...")
    
    # Create a unique test record
    timestamp = datetime.now().isoformat()
    test_client_name = f"MongoDB_Test_{timestamp}"
    
    try:
        # Create record
        create_data = {"client_name": test_client_name}
        create_response = requests.post(
            f"{BACKEND_URL}/status",
            json=create_data,
            headers={"Content-Type": "application/json"}
        )
        
        if create_response.status_code != 200:
            print(f"   ❌ Failed to create test record: {create_response.status_code}")
            return False
        
        created_record = create_response.json()
        record_id = created_record.get("id")
        print(f"   Created test record with ID: {record_id}")
        
        # Wait a moment for persistence
        time.sleep(1)
        
        # Retrieve and verify
        get_response = requests.get(f"{BACKEND_URL}/status")
        if get_response.status_code != 200:
            print(f"   ❌ Failed to retrieve records: {get_response.status_code}")
            return False
        
        all_records = get_response.json()
        found_record = None
        for record in all_records:
            if record.get("id") == record_id:
                found_record = record
                break
        
        if found_record:
            print(f"   ✅ MongoDB persistence working - record found: {found_record}")
            return True
        else:
            print("   ❌ MongoDB persistence failed - created record not found")
            return False
            
    except Exception as e:
        print(f"   ❌ Error testing MongoDB persistence: {str(e)}")
        return False

def test_service_health():
    """Test overall service health"""
    print("\n🧪 Testing service health...")
    try:
        # Test basic connectivity
        response = requests.get(f"{BACKEND_URL}/", timeout=10)
        if response.status_code == 200:
            print("   ✅ Backend service is responsive")
            return True
        else:
            print(f"   ❌ Backend service health check failed: {response.status_code}")
            return False
    except requests.exceptions.Timeout:
        print("   ❌ Backend service timeout - may be overloaded")
        return False
    except requests.exceptions.ConnectionError:
        print("   ❌ Backend service connection error - service may be down")
        return False
    except Exception as e:
        print(f"   ❌ Backend service health check error: {str(e)}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("=" * 60)
    print("🚀 BACKEND API TESTING SUITE")
    print("=" * 60)
    print(f"Testing Backend URL: {BACKEND_URL}")
    print("=" * 60)
    
    results = {}
    
    # Test 1: API Root endpoint
    results['api_root'] = test_api_root()
    
    # Test 2: POST status endpoint
    results['post_status'], created_id = test_post_status()
    
    # Test 3: GET status endpoint
    results['get_status'] = test_get_status()
    
    # Test 4: MongoDB persistence
    results['mongodb_persistence'] = test_mongodb_persistence()
    
    # Test 5: Service health
    results['service_health'] = test_service_health()
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 ALL BACKEND TESTS PASSED!")
        return True
    else:
        print("⚠️  SOME BACKEND TESTS FAILED!")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)