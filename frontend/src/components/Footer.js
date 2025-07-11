import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white text-lg font-bold mr-3 shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997L9.4165 13.594V11.497z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Fake ChatGPT Generator
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Professional AI Conversation Creator
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 max-w-md">
                Create authentic-looking fake ChatGPT conversation screenshots instantly. Perfect for educational content, presentations, tutorials, and creative projects. Generate unlimited realistic AI conversations with professional quality.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  🔒 100% Free & Private
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  ⚡ Instant Generation
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  📱 Mobile Friendly
                </span>
              </div>
            </div>
            
            {/* Tools & Features */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                Features
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#editor" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:bg-green-600"></span>
                    ChatGPT Conversation Editor
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:bg-green-600"></span>
                    High-Quality Screenshots
                  </a>
                </li>
                <li>
                  <Link to="/use-cases" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:bg-green-600"></span>
                    Use Cases & Examples
                  </Link>
                </li>
                <li>
                  <a href="#editor" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:bg-green-600"></span>
                    Unlimited Messages
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:bg-green-600"></span>
                    Dark/Light Mode
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-600"></span>
                    Blog & Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/templates" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-600"></span>
                    Conversation Templates
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-600"></span>
                    FAQ & Help
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-600"></span>
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-600"></span>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer - Single Line with All Elements */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {currentYear} Fake ChatGPT Generator. All rights reserved.
              </p>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Made with ❤️ for Educators & Creators
              </p>
            </div>
            
            {/* Legal Links - Single Line */}
            <div className="flex items-center space-x-1 text-sm">
              <Link
                to="/terms"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Terms of Service
              </Link>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <Link
                to="/privacy"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <Link
                to="/cookie-policy"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Cookie Policy
              </Link>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <Link
                to="/sitemap"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Sitemap
              </Link>
            </div>
            
            {/* Social & Quick Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                title="Back to top"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <a
                href="mailto:support@fakechatgpt.com"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-xs"
                title="Contact us"
              >
                📧 Support
              </a>
            </div>
          </div>
        </div>
        
        {/* SEO & Legal Disclaimer */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-blue-900 dark:text-blue-200 mb-1">
                  Educational Tool - Important Disclaimer
                </h4>
                <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                  This fake ChatGPT conversation generator creates simulated AI conversations for educational, presentation, and creative purposes only. 
                  All generated content is artificial and should be disclosed as simulated when shared publicly. Perfect for teachers, content creators, 
                  marketers, and developers who need realistic ChatGPT conversation examples without using actual AI services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Schema.org Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Fake ChatGPT Conversation Generator",
          "description": "Create realistic fake ChatGPT conversation screenshots instantly. Professional tool for educators, content creators, and marketers.",
          "url": window.location.origin,
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "author": {
            "@type": "Organization",
            "name": "Fake ChatGPT Generator"
          },
          "keywords": ["fake chatgpt", "chatgpt conversation generator", "ai conversation creator", "chatgpt screenshot", "educational tools"]
        })}
      </script>
    </footer>
  );
};

export default Footer;