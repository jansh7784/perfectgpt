import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: July 8, 2025</p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Commitment to Privacy</h2>
              <p>We value your privacy and are committed to protecting it. This Privacy Policy explains how your information is handled when you use the ChatGPT Screenshot Generator (the "Service").</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. Minimal Data Collection</h2>
              <p>We do not knowingly collect any personally identifiable information. Screenshot generation and content creation occurs locally in your browser. The only data we collect is aggregated, anonymised usage statistics (for example, page views) through a privacy-focused analytics platform only after you have granted explicit cookie consent. We never store your conversation content or any sensitive personal data on our servers.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. Cookies and Tracking</h2>
              <p>We use cookies and similar tracking technologies to serve advertisements. Specifically:</p>
              
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>Analytics Cookies:</strong> We use third-party analytics services to understand how visitors interact with our website.</li>
                <li><strong>Advertising Cookies:</strong> We use Google Ads and other third-party advertising services that may place cookies on your device to serve personalized advertisements.</li>
              </ul>
              
              <p className="mt-4">You can control cookies through your browser settings, but disabling certain cookies may affect the functionality of the Service.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. Google Ads and Third-Party Advertising</h2>
              <p>We use Google Ads and other third-party advertising services to display advertisements on our Service. These services may:</p>
              
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Use cookies and similar technologies to collect information about your visits to this and other websites</li>
                <li>Use this information to provide advertisements about goods and services that may be of interest to you</li>
                <li>Combine information collected through various sources to enhance ad targeting</li>
              </ul>
              
              <p className="mt-4">You can opt out of personalized advertising by visiting Google's Ad Settings or the Digital Advertising Alliance's opt-out page.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. Third-Party Services</h2>
              <p>We do not share personal information with third parties. We may share aggregated, anonymised usage statistics with trusted service providers (e.g. our analytics platform) solely for the purpose of improving the Service. If you follow links to external websites, their respective privacy policies will apply.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. Data Security</h2>
              <p>We implement industry-standard security measures to protect any anonymised analytics data that may be processed. Because we do not store personal information or your conversation content, the risk of sensitive data exposure is minimised.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. Legal Disclaimer</h2>
              <p>The owners and operators of this Service expressly disclaim any liability for the use or misuse of the Service or any content generated therefrom. By using the Service, you acknowledge and agree that you are solely responsible for any content you create and share. The Service is provided "as is" and without any warranty, express or implied.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8. Changes to This Policy</h2>
              <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page. Continued use of the Service after changes constitutes your acceptance of the new policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">9. Contact</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at fakechatgptsite@gmail.com.</p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-blue-800 dark:text-blue-200 text-sm font-medium">
                ⚠️ Important Legal Notice
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-xs mt-2">
                This Service does not collect or store any user data. This Service does not collect or store personal user data. All content is generated locally in your browser. The owners assume no responsibility for user actions or the consequences thereof. Use the Service responsibly and always disclose when content is simulated.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;