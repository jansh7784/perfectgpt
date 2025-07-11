import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997L9.4165 13.594V11.497z"/>
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
      // User message - right side, oval/pill-shaped bubble like ChatGPT.com
      return (
        <div className="flex justify-end mb-6 px-4">
          <div className="max-w-xs lg:max-w-md xl:max-w-lg">
            <div className={`rounded-3xl px-6 py-3 ${
              isLightMode 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-700 text-white'
            }`}>
              <div className="text-sm leading-relaxed whitespace-pre-wrap">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
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
                        <pre className="bg-gray-800 text-gray-200 p-2 rounded text-xs overflow-x-auto my-2"><code>{children}</code></pre>
                    ),
                    strong: ({children}) => <strong className="font-semibold">{children}</strong>,
                    em: ({children}) => <em className="italic">{children}</em>
                  }}
                >
                  {message.message}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // ChatGPT message - left side with avatar and action buttons, ultra-tight spacing like ChatGPT.com
      return (
        <div className="flex items-start space-x-1 mb-4 px-4 group">
          <ChatGPTIcon />
          <div className="flex-1 max-w-none">
            <div className={`rounded-2xl px-3 py-2 ${
              isLightMode 
                ? 'bg-gray-100 text-gray-900' 
                : 'bg-gray-800 text-white'
            }`}>
              <div className="text-sm leading-relaxed">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
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
                        <pre className={`p-2 rounded text-xs overflow-x-auto my-2 ${
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
            </div>
            {/* Action buttons - only show on hover, ChatGPT.com style */}
            <div className="flex items-center space-x-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => copyToClipboard(message.message, messageId)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  isLightMode 
                    ? 'hover:bg-gray-200' 
                    : 'hover:bg-gray-700'
                }`}
                title={copiedMessageId === messageId ? "Copied!" : "Copy"}
              >
                {copiedMessageId === messageId ? (
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
              <button 
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  isLightMode 
                    ? 'hover:bg-gray-200' 
                    : 'hover:bg-gray-700'
                }`}
                title="Good response"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.60L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </button>
              <button 
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  isLightMode 
                    ? 'hover:bg-gray-200' 
                    : 'hover:bg-gray-700'
                }`}
                title="Bad response"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2M7 4H5a2 2 0 00-2 2v6a2 2 0 002 2h2.5" />
                </svg>
              </button>
              <button 
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  isLightMode 
                    ? 'hover:bg-gray-200' 
                    : 'hover:bg-gray-700'
                }`}
                title="Regenerate"
              >
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
      const messagesContainer = document.getElementById('chat-messages');
      
      if (element && messagesContainer) {
        // Show loading state
        const downloadBtn = document.querySelector('.download-btn');
        if (downloadBtn) {
          downloadBtn.textContent = 'Generating...';
          downloadBtn.disabled = true;
        }

        // Force scroll to top to capture all messages
        messagesContainer.scrollTop = 0;
        await new Promise(resolve => setTimeout(resolve, 500));

        // Temporarily adjust styles for better screenshot
        const originalStyles = {
          element: {
            overflow: element.style.overflow,
            height: element.style.height,
            minHeight: element.style.minHeight,
            maxHeight: element.style.maxHeight
          },
          messages: {
            overflow: messagesContainer.style.overflow,
            height: messagesContainer.style.height,
            maxHeight: messagesContainer.style.maxHeight
          }
        };
        
        // Set styles to show all content
        element.style.overflow = 'visible';
        element.style.height = 'auto';
        element.style.minHeight = 'auto';
        element.style.maxHeight = 'none';
        
        messagesContainer.style.overflow = 'visible';
        messagesContainer.style.height = 'auto';
        messagesContainer.style.maxHeight = 'none';

        // Wait for layout to settle
        await new Promise(resolve => setTimeout(resolve, 500));

        // Get the full height of content
        const fullHeight = element.scrollHeight;
        const fullWidth = element.scrollWidth;
        
        // High-quality screenshot configuration
        const canvas = await html2canvas(element, {
          backgroundColor: isLightMode ? '#ffffff' : '#1f2937',
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          foreignObjectRendering: true,
          imageTimeout: 15000,
          height: fullHeight,
          width: fullWidth,
          scrollX: 0,
          scrollY: 0,
          windowWidth: fullWidth,
          windowHeight: fullHeight,
          onclone: (clonedDoc) => {
            // Ensure all messages are visible in the clone
            const clonedMessages = clonedDoc.getElementById('chat-messages');
            if (clonedMessages) {
              clonedMessages.style.overflow = 'visible';
              clonedMessages.style.height = 'auto';
              clonedMessages.style.maxHeight = 'none';
            }
          }
        });
        
        // Restore original styles
        Object.keys(originalStyles.element).forEach(key => {
          element.style[key] = originalStyles.element[key];
        });
        Object.keys(originalStyles.messages).forEach(key => {
          messagesContainer.style[key] = originalStyles.messages[key];
        });
        
        // Create high-quality PNG download
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
      } else {
        throw new Error('Chat container not found');
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
          {/* Header - ChatGPT Style */}
          <div className={`border-b px-4 py-3 flex-shrink-0 ${
            isLightMode 
              ? 'bg-gray-50 border-gray-200' 
              : 'bg-gray-700 border-gray-600'
          }`}>
            <div className="flex items-center justify-between">
              {/* Left side - Sidebar icon */}
              <div className="flex items-center">
                <button className={`p-1 rounded hover:bg-gray-200 ${
                  isLightMode ? 'text-gray-600 hover:bg-gray-200' : 'text-gray-400 hover:bg-gray-600'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
              {/* Center - ChatGPT title */}
              <div className="flex-1 text-center">
                <span className={`font-semibold ${
                  isLightMode ? 'text-gray-900' : 'text-white'
                }`}>
                  ChatGPT
                </span>
              </div>
              
              {/* Right side - Edit icon */}
              <div className="flex items-center">
                <button className={`p-1 rounded hover:bg-gray-200 ${
                  isLightMode ? 'text-gray-600 hover:bg-gray-200' : 'text-gray-400 hover:bg-gray-600'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Messages - Scrollable Area with ChatGPT.com exact spacing */}
          <div 
            id="chat-messages"
            className={`flex-1 overflow-y-auto py-6 custom-scrollbar ${
              isLightMode ? 'bg-white' : 'bg-gray-800'
            }`}
            style={{ height: '400px', maxHeight: '400px' }}
          >
            {conversations.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="mx-auto mb-4">
                    <ChatGPTIcon />
                  </div>
                  <p className={`text-xl font-medium ${
                    isLightMode ? 'text-gray-900' : 'text-white'
                  }`}>
                    How can I help you today?
                  </p>
                </div>
              </div>
            ) : (
              conversations.map((msg, index) => (
                <div key={msg.id || index} className="animate-fadeIn">
                  <ChatMessage message={msg} index={index} />
                </div>
              ))
            )}
          </div>

          {/* Input Section - Exact ChatGPT.com UI */}
          {showInputSection && (
            <div className={`border-t px-4 py-3 ${
              isLightMode 
                ? 'bg-gray-50 border-gray-200' 
                : 'bg-gray-700 border-gray-600'
            }`}>
              <div className="flex items-center space-x-2 mb-2">
                {/* Plus button */}
                <button className={`p-2 rounded-full ${
                  isLightMode ? 'hover:bg-gray-200' : 'hover:bg-gray-600'
                }`}>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Ask anything"
                    className={`w-full px-4 py-3 pr-20 rounded-2xl border text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 ${
                      isLightMode 
                        ? 'bg-gray-100 border-gray-300 text-gray-900'
                        : 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                    }`}
                  />
                  
                  {/* Right side buttons */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    {/* Microphone button */}
                    <button className={`p-1 rounded hover:bg-gray-200 ${
                      isLightMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </button>
                    
                    {/* Send button */}
                    <button className={`p-1.5 rounded-full ${
                      isLightMode ? 'bg-gray-300 hover:bg-gray-400' : 'bg-gray-600 hover:bg-gray-500'
                    } text-white`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Tools button */}
                <button className={`flex items-center space-x-1 px-3 py-2 rounded-lg ${
                  isLightMode ? 'hover:bg-gray-200' : 'hover:bg-gray-600'
                }`}>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className={`text-sm ${
                    isLightMode ? 'text-gray-600' : 'text-gray-300'
                  }`}>Tools</span>
                </button>
              </div>
              
              {/* Disclaimer */}
              <div className="text-center">
                <p className={`text-xs ${
                  isLightMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  ChatGPT can make mistakes. Check important info.
                </p>
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
