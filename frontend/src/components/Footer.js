import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">
                © 2025 Fake ChatGPT Generator. Create realistic ChatGPT conversations instantly.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-center text-gray-500 text-xs">
              Generate fake ChatGPT conversations for educational, entertainment, or creative purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;