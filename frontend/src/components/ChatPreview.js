import React from "react";

const ChatPreview = ({ conversations, downloadConversation }) => {
  const ChatMessage = ({ message, isLast }) => {
    const isUser = message.sender === "user";
    
    return (
      <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-6`}>
        <div className={`flex ${isUser ? "flex-row-reverse" : "flex-row"} max-w-4xl w-full`}>
          {/* Avatar */}
          <div className={`flex-shrink-0 ${isUser ? "ml-3" : "mr-3"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
              isUser ? "bg-blue-500" : "bg-green-500"
            }`}>
              {isUser ? "U" : "AI"}
            </div>
          </div>
          
          {/* Message Content */}
          <div className={`flex-1 ${isUser ? "text-right" : "text-left"}`}>
            <div className={`inline-block max-w-full px-4 py-3 rounded-2xl ${
              isUser 
                ? "bg-blue-500 text-white" 
                : "bg-gray-100 text-gray-900 border border-gray-200"
            }`}>
              <p className="text-sm whitespace-pre-wrap break-words">{message.message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          📱 Preview
        </h2>
        <button
          onClick={downloadConversation}
          disabled={conversations.length === 0}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium text-sm"
        >
          📸 Download Image
        </button>
      </div>
      
      {/* ChatGPT-style Interface */}
      <div 
        id="chat-preview"
        className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden"
      >
        {/* ChatGPT Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
              AI
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">ChatGPT</h3>
              <p className="text-xs text-gray-500">AI Assistant</p>
            </div>
          </div>
        </div>
        
        {/* Messages Container */}
        <div className="p-4 bg-white min-h-[400px] max-h-[600px] overflow-y-auto">
          {conversations.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    AI
                  </div>
                </div>
                <p className="text-lg font-medium mb-2">No conversation yet</p>
                <p className="text-sm">Start creating your fake ChatGPT conversation!</p>
              </div>
            </div>
          ) : (
            <div className="space-y-0">
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
        <div className="bg-gray-50 border-t border-gray-200 px-4 py-3">
          <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Message ChatGPT..."
              className="flex-1 text-sm text-gray-400 bg-transparent outline-none"
              readOnly
            />
            <button className="ml-2 p-1 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
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