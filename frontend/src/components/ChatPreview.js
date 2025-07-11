import React, { useState, useEffect } from "react";

const ChatPreview = ({ conversations, downloadConversation }) => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [showInputSection, setShowInputSection] = useState(false);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [conversations]);

  const ChatGPTIcon = () => (
    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-sm">
      G
    </div>
  );

  const ChatMessage = ({ message, index }) => {
    const isUser = message.sender === "user";
    
    if (isUser) {
      return (
        <div className="flex justify-end mb-4">
          <div className="max-w-xs lg:max-w-md xl:max-w-lg">
            <div className={`rounded-lg px-4 py-2 ${
              isLightMode ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'
            }`}>
              <div className="text-sm whitespace-pre-wrap">{message.message}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-start space-x-3 mb-4">
          <ChatGPTIcon />
          <div className="flex-1 max-w-none">
            <div className={`rounded-lg px-4 py-2 ${
              isLightMode ? 'bg-gray-100 text-gray-900' : 'bg-gray-800 text-white'
            }`}>
              <div className="text-sm whitespace-pre-wrap">{message.message}</div>
            </div>
            {/* Action buttons */}
            <div className="flex items-center space-x-2 mt-2">
              <button className="w-7 h-7 rounded hover:bg-gray-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="w-7 h-7 rounded hover:bg-gray-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </button>
              <button className="w-7 h-7 rounded hover:bg-gray-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button className="w-7 h-7 rounded hover:bg-gray-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  const handleDownload = async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const element = document.getElementById('chat-preview-container');
      if (element) {
        // Show loading state
        const downloadBtn = document.querySelector('.download-btn');
        if (downloadBtn) {
          downloadBtn.textContent = 'Generating...';
          downloadBtn.disabled = true;
        }

        // Temporarily remove scroll bars and borders for cleaner screenshot
        const originalStyles = {
          overflow: element.style.overflow,
          border: element.style.border,
          borderRadius: element.style.borderRadius
        };
        
        element.style.overflow = 'visible';
        element.style.border = 'none';
        element.style.borderRadius = '0';

        // Get the actual height of the content
        const messagesContainer = document.getElementById('chat-messages');
        const actualHeight = messagesContainer ? messagesContainer.scrollHeight : element.scrollHeight;
        
        const canvas = await html2canvas(element, {
          backgroundColor: isLightMode ? '#ffffff' : '#1f2937',
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          height: actualHeight + 60, // Add padding
          width: element.scrollWidth,
          scrollX: 0,
          scrollY: 0,
          windowWidth: element.scrollWidth,
          windowHeight: actualHeight + 60
        });
        
        // Restore original styles
        element.style.overflow = originalStyles.overflow;
        element.style.border = originalStyles.border;
        element.style.borderRadius = originalStyles.borderRadius;
        
        // Create download link
        const link = document.createElement('a');
        link.download = `chatgpt-conversation-${new Date().toISOString().split('T')[0]}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
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
      // Reset button state
      const downloadBtn = document.querySelector('.download-btn');
      if (downloadBtn) {
        downloadBtn.textContent = 'Download ChatGPT Screenshot';
        downloadBtn.disabled = false;
      }
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Preview</h2>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 text-sm text-gray-300 cursor-pointer">
            <input 
              type="checkbox" 
              checked={showInputSection}
              onChange={(e) => setShowInputSection(e.target.checked)}
              className="rounded" 
            />
            <span>Show input section</span>
          </label>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                isLightMode ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                isLightMode ? 'translate-x-6' : 'translate-x-0'
              }`}></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* ChatGPT Interface - Fixed Height Container */}
      <div className="flex-1 flex flex-col min-h-0">
        <div 
          id="chat-preview-container"
          className={`flex-1 rounded-lg border overflow-hidden flex flex-col ${
            isLightMode 
              ? 'bg-white border-gray-300' 
              : 'bg-gray-800 border-gray-700'
          }`}
        >
          {/* Header */}
          <div className={`border-b px-4 py-3 flex-shrink-0 ${
            isLightMode 
              ? 'bg-gray-50 border-gray-200' 
              : 'bg-gray-700 border-gray-600'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className={`font-semibold ${
                  isLightMode ? 'text-gray-900' : 'text-white'
                }`}>
                  ChatGPT
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button className={`p-1 rounded hover:bg-gray-200 ${
                  isLightMode ? 'text-gray-600 hover:bg-gray-200' : 'text-gray-400 hover:bg-gray-600'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Messages - Scrollable Area */}
          <div 
            id="chat-messages"
            className={`flex-1 overflow-y-auto p-4 ${
              isLightMode ? 'bg-white' : 'bg-gray-800'
            }`}
            style={{ height: '400px', maxHeight: '400px' }}
          >
            {conversations.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <ChatGPTIcon />
                  <p className={`text-xl font-medium mt-4 ${
                    isLightMode ? 'text-gray-900' : 'text-white'
                  }`}>
                    What's the best product on earth ?
                  </p>
                </div>
              </div>
            ) : (
              conversations.map((msg, index) => (
                <ChatMessage key={msg.id || index} message={msg} index={index} />
              ))
            )}
          </div>

          {/* Input Section */}
          {showInputSection && (
            <div className={`border-t px-4 py-3 ${
              isLightMode 
                ? 'bg-gray-50 border-gray-200' 
                : 'bg-gray-700 border-gray-600'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="flex-1 flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Send a message..."
                    className={`flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isLightMode 
                        ? 'bg-white border-gray-300 text-gray-900'
                        : 'bg-gray-800 border-gray-600 text-white'
                    }`}
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Download Button */}
        <div className="mt-4">
          <button
            onClick={handleDownload}
            disabled={conversations.length === 0}
            className="download-btn w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download ChatGPT Screenshot</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;