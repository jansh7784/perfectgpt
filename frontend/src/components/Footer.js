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
      <span className="text-gray-300 dark:text-gray-600">|</span>
      <a
        href="https://www.linkedin.com/in/ansh--jain" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-500 hover:underline"
      >
        by Ansh Jain
      </a>
    </div>
  </div>
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
    </footer>
      
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
