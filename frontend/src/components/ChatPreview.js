import React from "react";

const ChatPreview = ({ conversations, downloadConversation }) => {
  const ChatGPTIcon = () => (
    <div className="w-6 h-6 rounded-sm bg-black dark:bg-white flex items-center justify-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="text-white dark:text-black"
      >
        <path
          d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );

  const ChatMessage = ({ message, isLast }) => {
    const isUser = message.sender === "user";
    
    return (
      <div className={`group mb-6 ${isUser ? "" : "bg-gray-50 dark:bg-gray-700/50"}`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex gap-4">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {isUser ? (
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-medium">
                  U
                </div>
              ) : (
                <ChatGPTIcon />
              )}
            </div>
            
            {/* Message Content */}
            <div className="flex-1 min-w-0">
              <div className="text-gray-900 dark:text-gray-100">
                <div className="whitespace-pre-wrap break-words text-sm leading-relaxed">
                  {message.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          📱 Preview
        </h2>
        <button
          onClick={downloadConversation}
          disabled={conversations.length === 0}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors font-medium text-sm"
        >
          📸 Download Image
        </button>
      </div>
      
      {/* ChatGPT-style Interface */}
      <div 
        id="chat-preview"
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-colors duration-200"
      >
        {/* ChatGPT Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ChatGPTIcon />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ChatGPT</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Messages Container */}
        <div className="bg-white dark:bg-gray-800 min-h-[400px] max-h-[600px] overflow-y-auto transition-colors duration-200">
          {conversations.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 py-16">
              <div className="text-center">
                <ChatGPTIcon />
                <p className="text-2xl font-semibold mb-2 mt-4 text-gray-900 dark:text-white">How can I help you today?</p>
              </div>
            </div>
          ) : (
            <div>
              {conversations.map((msg, index) => (
                <ChatMessage 
                  key={msg.id} 
                  message={msg} 
                  isLast={index === conversations.length - 1}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* ChatGPT Input Bar (Static) */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-4 transition-colors duration-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 transition-colors duration-200">
              <input
                type="text"
                placeholder="Message ChatGPT"
                className="flex-1 text-sm text-gray-400 dark:text-gray-500 bg-transparent outline-none"
                readOnly
              />
              <button className="ml-3 p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg transition-colors duration-200">
        <div className="flex justify-between items-center">
          <span>Messages: {conversations.length}</span>
          <span>🔥 Realistic ChatGPT interface</span>
        </div>
        <p className="mt-1">Click "Download Image" to save your fake conversation as a PNG file</p>
      </div>
    </div>
  );
};

export default ChatPreview;