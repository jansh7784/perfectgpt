import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Tooltip } from 'react-tooltip';

const ChatPreview = ({ conversations, downloadConversation }) => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [showInputSection, setShowInputSection] = useState(true);
  const [copiedMessageId, setCopiedMessageId] = useState(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [conversations]);

  const ChatGPTIcon = () => (
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997L9.4165 13.594V11.497z"/>
      </svg>
    </div>
  );

  const UserIcon = () => (
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    </div>
  );

  const copyToClipboard = async (text, messageId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const ChatMessage = ({ message, index }) => {
    const isUser = message.sender === "user";
    const messageId = message.id || index;
    
    if (isUser) {
      return (
        <div className="flex justify-end mb-6 group">
          <div className="flex items-start space-x-3 max-w-[70%]">
            <div className="flex-1">
              <div className={`rounded-2xl px-4 py-3 shadow-sm ${
                isLightMode 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-700 text-white'
              }`}>
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  className="text-sm leading-relaxed prose prose-sm max-w-none prose-invert"
                  components={{
                    p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
                    a: ({children, href}) => (
                      <a href={href} className="text-blue-200 hover:text-blue-100 underline" target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    ),
                    code: ({children, inline}) => (
                      inline ? 
                        <code className="bg-gray-800 text-gray-200 px-1 py-0.5 rounded text-xs">{children}</code> :
                        <pre className="bg-gray-800 text-gray-200 p-2 rounded text-xs overflow-x-auto"><code>{children}</code></pre>
                    ),
                    strong: ({children}) => <strong className="font-semibold">{children}</strong>,
                    em: ({children}) => <em className="italic">{children}</em>
                  }}
                >
                  {message.message}
                </ReactMarkdown>
              </div>
            </div>
            <UserIcon />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-start space-x-3 mb-6 group">
          <ChatGPTIcon />
          <div className="flex-1 max-w-none">
            <div className={`rounded-2xl px-4 py-3 shadow-sm transition-all duration-200 ${
              isLightMode 
                ? 'bg-gray-50 text-gray-900 border border-gray-200' 
                : 'bg-gray-800 text-white border border-gray-700'
            }`}>
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                className={`text-sm leading-relaxed prose prose-sm max-w-none ${
                  isLightMode ? 'prose-gray' : 'prose-invert'
                }`}
                components={{
                  p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
                  a: ({children, href}) => (
                    <a href={href} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                  code: ({children, inline}) => (
                    inline ? 
                      <code className={`px-1 py-0.5 rounded text-xs ${
                        isLightMode 
                          ? 'bg-gray-200 text-gray-800' 
                          : 'bg-gray-700 text-gray-200'
                      }`}>{children}</code> :
                      <pre className={`p-2 rounded text-xs overflow-x-auto ${
                        isLightMode 
                          ? 'bg-gray-200 text-gray-800' 
                          : 'bg-gray-700 text-gray-200'
                      }`}><code>{children}</code></pre>
                  ),
                  strong: ({children}) => <strong className="font-semibold">{children}</strong>,
                  em: ({children}) => <em className="italic">{children}</em>,
                  ul: ({children}) => <ul className="list-disc pl-4 mb-2">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal pl-4 mb-2">{children}</ol>,
                  li: ({children}) => <li className="mb-1">{children}</li>
                }}
              >
                {message.message}
              </ReactMarkdown>
            </div>
            {/* Action buttons */}
            <div className="flex items-center space-x-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button 
                onClick={() => copyToClipboard(message.message, messageId)}
                className={`w-8 h-8 rounded-lg hover:bg-gray-600 flex items-center justify-center transition-colors ${
                  isLightMode ? 'hover:bg-gray-200' : 'hover:bg-gray-600'
                }`}
                data-tooltip-id="copy-tooltip"
                data-tooltip-content={copiedMessageId === messageId ? "Copied!" : "Copy"}
              >
                {copiedMessageId === messageId ? (
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className={`w-4 h-4 ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
              <button 
                className={`w-8 h-8 rounded-lg hover:bg-gray-600 flex items-center justify-center transition-colors ${
                  isLightMode ? 'hover:bg-gray-200' : 'hover:bg-gray-600'
                }`}
                data-tooltip-id="thumbs-up-tooltip"
                data-tooltip-content="Good response"
              >
                <svg className={`w-4 h-4 ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </button>
              <button 
                className={`w-8 h-8 rounded-lg hover:bg-gray-600 flex items-center justify-center transition-colors ${
                  isLightMode ? 'hover:bg-gray-200' : 'hover:bg-gray-600'
                }`}
                data-tooltip-id="thumbs-down-tooltip"
                data-tooltip-content="Bad response"
              >
                <svg className={`w-4 h-4 ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2M7 4H5a2 2 0 00-2 2v6a2 2 0 002 2h2.5" />
                </svg>
              </button>
              <button 
                className={`w-8 h-8 rounded-lg hover:bg-gray-600 flex items-center justify-center transition-colors ${
                  isLightMode ? 'hover:bg-gray-200' : 'hover:bg-gray-600'
                }`}
                data-tooltip-id="retry-tooltip"
                data-tooltip-content="Regenerate response"
              >
                <svg className={`w-4 h-4 ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Input Section - Sticky at Bottom */}
          {showInputSection && (
            <div className={`border-t px-4 py-3 mt-auto flex-shrink-0 ${
              isLightMode 
                ? 'bg-gray-50 border-gray-200' 
                : 'bg-gray-700 border-gray-600'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="flex-1 flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Ask anything..."
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        isLightMode 
                          ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          : 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                      }`}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      <button 
                        className={`p-1 rounded-md hover:bg-gray-200 transition-colors ${
                          isLightMode ? 'text-gray-500 hover:bg-gray-200' : 'text-gray-400 hover:bg-gray-600'
                        }`}
                        data-tooltip-id="attach-tooltip"
                        data-tooltip-content="Attach files"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      </button>
                      <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
                        data-tooltip-id="send-tooltip"
                        data-tooltip-content="Send message"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs text-center text-gray-500">
                ChatGPT can make mistakes. Check important info.
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

      {/* Tooltips */}
      <Tooltip id="copy-tooltip" place="top" />
      <Tooltip id="thumbs-up-tooltip" place="top" />
      <Tooltip id="thumbs-down-tooltip" place="top" />
      <Tooltip id="retry-tooltip" place="top" />
      <Tooltip id="attach-tooltip" place="top" />
      <Tooltip id="send-tooltip" place="top" />
    </div>
  );
};

export default ChatPreview;