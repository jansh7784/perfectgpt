import React, { useState } from "react";

const ChatPreview = ({ conversations, downloadConversation }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  const ChatGPTIcon = () => (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-green-500"
      >
        <path
          d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );

  const UserIcon = () => (
    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
      <span className="text-white text-sm font-medium">You</span>
    </div>
  );

  const ChatMessage = ({ message, index }) => {
    const isUser = message.sender === "user";
    const bgColor = isLightMode 
      ? (isUser ? "bg-gray-50" : "bg-white") 
      : (isUser ? "bg-gray-700" : "bg-gray-800");
    
    const textColor = isLightMode 
      ? (isUser ? "text-gray-900" : "text-gray-900") 
      : (isUser ? "text-gray-100" : "text-gray-100");

    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
        <div className={`flex max-w-3xl ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
          <div className={`flex-shrink-0 ${isUser ? 'ml-3' : 'mr-3'}`}>
            {isUser ? <UserIcon /> : <ChatGPTIcon />}
          </div>
          <div className={`flex-1 ${isUser ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block max-w-full ${bgColor} rounded-lg px-4 py-3 ${textColor}`}>
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {message.message}
              </div>
            </div>
            {!isUser && (
              <div className="flex items-center space-x-2 mt-2">
                <button className="w-7 h-7 rounded hover:bg-gray-600 flex items-center justify-center group">
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded hover:bg-gray-600 flex items-center justify-center group">
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded hover:bg-gray-600 flex items-center justify-center group">
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded hover:bg-gray-600 flex items-center justify-center group">
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const handleDownload = async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const element = document.getElementById('chat-preview');
      if (element) {
        // Show loading state
        const downloadBtn = document.querySelector('.download-btn');
        if (downloadBtn) {
          downloadBtn.textContent = 'Generating Screenshot...';
          downloadBtn.disabled = true;
        }

        // Hide scroll bars temporarily
        element.style.overflow = 'hidden';
        
        const canvas = await html2canvas(element, {
          backgroundColor: isLightMode ? '#ffffff' : '#1f2937',
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          height: element.scrollHeight,
          width: element.scrollWidth,
          scrollX: 0,
          scrollY: 0,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight
        });
        
        // Restore scroll bars
        element.style.overflow = 'auto';
        
        const link = document.createElement('a');
        link.download = `chatgpt-conversation-${new Date().toISOString().split('T')[0]}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset button state
        if (downloadBtn) {
          downloadBtn.textContent = 'Download Screenshot';
          downloadBtn.disabled = false;
        }
      }
    } catch (error) {
      console.error('Error generating screenshot:', error);
      alert('Error generating screenshot. Please try again.');
      // Reset button state
      const downloadBtn = document.querySelector('.download-btn');
      if (downloadBtn) {
        downloadBtn.textContent = 'Download Screenshot';
        downloadBtn.disabled = false;
      }
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">ChatGPT Preview</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Light Mode</span>
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className={`w-11 h-6 rounded-full p-1 transition-colors ${
                isLightMode ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                isLightMode ? 'translate-x-5' : 'translate-x-0'
              }`}></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* ChatGPT Interface */}
      <div className="flex-1 flex flex-col">
        <div 
          id="chat-preview"
          className={`flex-1 rounded-lg overflow-hidden border ${
            isLightMode 
              ? 'bg-white border-gray-300' 
              : 'bg-gray-800 border-gray-700'
          }`}
        >
          {/* Header */}
          <div className={`border-b px-4 py-3 ${
            isLightMode 
              ? 'bg-gray-50 border-gray-200' 
              : 'bg-gray-700 border-gray-600'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ChatGPTIcon />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Messages */}
          <div className={`flex-1 overflow-y-auto p-4 min-h-96 ${
            isLightMode ? 'bg-white' : 'bg-gray-800'
          }`}>
            {conversations.length === 0 ? (
              <div className="flex items-center justify-center h-full min-h-64">
                <div className="text-center">
                  <ChatGPTIcon />
                  <p className={`text-xl font-medium mt-4 ${
                    isLightMode ? 'text-gray-900' : 'text-white'
                  }`}>
                    How can I help you today?
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {conversations.map((msg, index) => (
                  <ChatMessage key={msg.id} message={msg} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-4 flex space-x-3">
          <button
            onClick={handleDownload}
            disabled={conversations.length === 0}
            className="download-btn flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Screenshot</span>
          </button>
          
          <button
            onClick={() => {
              if (conversations.length > 0) {
                const previewElement = document.getElementById('chat-preview');
                if (previewElement) {
                  previewElement.scrollTop = previewElement.scrollHeight;
                }
              }
            }}
            disabled={conversations.length === 0}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>Scroll to Bottom</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;