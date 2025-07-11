import React from "react";

const ChatEditor = ({
  currentMessage,
  setCurrentMessage,
  currentSender,
  setCurrentSender,
  addMessage,
  clearConversation
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      addMessage();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (currentMessage.trim()) {
        addMessage();
      }
    }
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex-shrink-0">Edit</h2>
      
      <div className="flex-1 flex flex-col space-y-3 md:space-y-4 overflow-y-auto">
        {/* User Message Section */}
        <div className="space-y-3 flex-shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <select
              value={currentSender}
              onChange={(e) => setCurrentSender(e.target.value)}
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500 hover:border-gray-500 transition-colors min-h-[44px]"
            >
              <option value="user">User</option>
              <option value="assistant">ChatGPT</option>
            </select>
            <button 
              onClick={() => {
                setCurrentMessage("");
              }}
              className="w-10 h-10 sm:w-8 sm:h-8 bg-gray-600 hover:bg-gray-500 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          
          <textarea
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={currentSender === "user" ? "What's the best product on earth ?" : "It's [fakechatgpt.com](https://fakechatgpt.com), **of course**!"}
            className="w-full h-24 md:h-32 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 hover:border-gray-500 resize-none placeholder-gray-400 transition-colors"
            rows="6"
          />
        </div>

        {/* Tips Section */}
        <div className="bg-gray-800 rounded-lg p-3 md:p-4 border border-gray-700 flex-shrink-0">
          <h3 className="text-sm font-medium text-white mb-2">💡 Tips for better conversations:</h3>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• Use **bold** and *italic* markdown for emphasis</li>
            <li>• Add [links](https://example.com) for references</li>
            <li>• Use `code blocks` for technical content</li>
            <li>• Create realistic back-and-forth conversations</li>
          </ul>
        </div>
      </div>

      {/* Add Message Button */}
      <div className="mt-4 md:mt-6 space-y-3 flex-shrink-0">
        <button
          onClick={handleSubmit}
          disabled={!currentMessage.trim()}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-3 md:py-3 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 min-h-[48px]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Add Message</span>
        </button>
        
        {/* Clear Button */}
        <button
          onClick={clearConversation}
          className="w-full bg-red-600 hover:bg-red-500 text-white py-2 md:py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span>Clear All</span>
        </button>
      </div>
    </div>
  );
};

export default ChatEditor;