import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatEditor from "../components/ChatEditor";
import ChatPreview from "../components/ChatPreview";

const HomePage = () => {
  const [conversations, setConversations] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentSender, setCurrentSender] = useState("user");
  const [isEditExpanded, setIsEditExpanded] = useState(true);
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(true);

  const addMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        sender: currentSender,
        message: currentMessage,
        timestamp: new Date().toISOString()
      };
      setConversations([...conversations, newMessage]);
      setCurrentMessage("");
      setCurrentSender(currentSender === "user" ? "assistant" : "user");
    }
  };

  const clearConversation = () => {
    setConversations([]);
  };

  const downloadConversationImage = async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const element = document.getElementById('chat-preview');
      if (element) {
        // Show loading state
        const downloadBtn = document.querySelector('button:has-text("Download ChatGPT Screenshot")');
        if (downloadBtn) {
          downloadBtn.textContent = 'Generating Screenshot...';
          downloadBtn.disabled = true;
        }

        const canvas = await html2canvas(element, {
          backgroundColor: '#374151',
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          height: element.scrollHeight,
          width: element.scrollWidth
        });
        
        const link = document.createElement('a');
        link.download = `fake-chatgpt-conversation-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset button state
        if (downloadBtn) {
          downloadBtn.textContent = 'Download ChatGPT Screenshot';
          downloadBtn.disabled = false;
        }
      }
    } catch (error) {
      console.error('Error generating screenshot:', error);
      alert('Error generating screenshot. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Fake ChatGPT Conversation Generator
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Generate realistic fake ChatGPT conversation screenshots instantly with our free online tool. Create authentic-looking fake chatgpt screenshots in seconds - no registration required, completely free to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('editor').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Generate Fake ChatGPT Conversation
            </button>
            <button
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Use Cases
            </button>
          </div>
        </div>
      </div>

      {/* Main Editor Section - Dark Theme Like FakeChatGPT */}
      <div id="editor" className="bg-gray-900 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ChatGPT Screenshot Creator
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Edit and create your fake ChatGPT conversations
            </p>
          </div>
          
          {/* Responsive Container - Stack on Mobile */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-8" style={{ minHeight: '580px' }}>
            {/* Edit Section */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 flex flex-col order-2 lg:order-1">
              {/* Edit Header with Dropdown */}
              <div 
                className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-gray-700 transition-colors"
                onClick={() => setIsEditExpanded(!isEditExpanded)}
              >
                <h2 className="text-lg md:text-xl font-semibold text-white">Edit</h2>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${isEditExpanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Edit Content - Collapsible */}
              <div className={`transition-all duration-300 overflow-hidden ${
                isEditExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <div className="h-full overflow-y-auto max-h-[500px] custom-scrollbar">
                    <ChatEditor
                      currentMessage={currentMessage}
                      setCurrentMessage={setCurrentMessage}
                      currentSender={currentSender}
                      setCurrentSender={setCurrentSender}
                      addMessage={addMessage}
                      clearConversation={clearConversation}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Preview Section */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 flex flex-col order-1 lg:order-2">
              {/* Preview Header with Dropdown */}
              <div 
                className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-gray-700 transition-colors"
                onClick={() => setIsPreviewExpanded(!isPreviewExpanded)}
              >
                <h2 className="text-lg md:text-xl font-semibold text-white">Preview</h2>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${isPreviewExpanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Preview Content - Collapsible */}
              <div className={`transition-all duration-300 overflow-hidden ${
                isPreviewExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <div className="h-full overflow-y-auto max-h-[500px] custom-scrollbar">
                    <ChatPreview
                      conversations={conversations}
                      downloadConversation={downloadConversationImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Use Our Fake ChatGPT Conversation Generator?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Instant Fake ChatGPT Screenshots
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Generate high-quality fake chatgpt screenshots in seconds. Perfect for creating realistic AI conversation examples with pixel-perfect accuracy.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Unlimited Conversation Length
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create full-length fake chatgpt conversations with unlimited messages. Unlike competitors limited to 1 exchange, generate entire conversation threads.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Educational & Professional Use
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create fake chatgpt conversations for teaching, presentations, and academic research.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Perfect Conversations Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Perfect Fake ChatGPT Conversations Every Time
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our fake ChatGPT conversation generator creates pixel-perfect conversation images that look exactly like real ChatGPT interfaces. Whether you need a single fake chatgpt screenshot or multiple AI conversation examples, our tool delivers professional results instantly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Authentic ChatGPT appearance and formatting
                </h3>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  High-resolution PNG downloads
                </h3>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Mobile and desktop conversation styles
                </h3>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Unlimited conversation length - not just single exchanges
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Multiple Use Cases for Fake ChatGPT Chats
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Create fake chatgpt conversations for various purposes - from educational materials to social media content. Our chatgpt screenshot generator is perfect for educators, content creators, and professionals who need realistic AI conversation examples.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Educational presentations and tutorials
                </h3>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Business demos and client presentations
                </h3>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Social media content and blog posts
                </h3>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Full conversation examples with multiple back-and-forth exchanges
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Fake ChatGPT Conversation Generator FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                How to create a fake ChatGPT conversation?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simply add your conversation messages using our editor above, customize the appearance, and click "Download" to generate your fake ChatGPT conversation. The tool creates high-quality PNG images that look exactly like real ChatGPT conversations.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I create long fake ChatGPT conversations?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Unlike other tools that only allow 1 user message and 1 ChatGPT response, our generator supports unlimited conversation length. Create full conversation threads with multiple back-and-forth exchanges between users and ChatGPT.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Are fake ChatGPT conversations realistic?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Our fake ChatGPT conversation generator replicates the exact appearance, fonts, colors, and layout of real ChatGPT conversations. The generated fake chatgpt chats are indistinguishable from authentic ChatGPT interfaces.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I use fake ChatGPT conversations for commercial purposes?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                You can use fake ChatGPT conversations generated by our tool for educational, presentation, and demonstration purposes. Always ensure you disclose that the conversations are simulated when sharing or using them publicly.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                How much does it cost?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our generator is completely free to use. No registration required, no hidden fees - just create your fake ChatGPT conversations instantly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-600 dark:to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Fake ChatGPT Conversation?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Start generating professional fake ChatGPT conversations right now. No registration required, completely free to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('editor').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Generate Fake ChatGPT Conversation
            </button>
            <button
              onClick={() => window.location.href = '/use-cases'}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Use Cases
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;