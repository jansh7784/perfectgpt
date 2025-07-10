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
    addMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      addMessage();
    }
  };

  return (
    <div className="h-full">
      <h2 className="text-xl font-semibold text-white mb-6">Edit</h2>
      
      <div className="space-y-6">
        {/* Sender Selection */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <select
              value={currentSender}
              onChange={(e) => setCurrentSender(e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="user">User</option>
              <option value="assistant">ChatGPT</option>
            </select>
            <button className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          
          <textarea
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={currentSender === "user" ? "Enter user message..." : "Enter ChatGPT response..."}
            className="w-full h-32 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500 resize-none scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
            rows="5"
          />
        </div>

        {/* Add Another Message Section */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <select
              value={currentSender === "user" ? "assistant" : "user"}
              onChange={(e) => setCurrentSender(e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="user">User</option>
              <option value="assistant">ChatGPT</option>
            </select>
            <button 
              onClick={clearConversation}
              className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500"
            >
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          
          <textarea
            placeholder="Enter next message..."
            className="w-full h-32 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500 resize-none scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
            rows="5"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={addMessage}
            disabled={!currentMessage.trim()}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            Add Message
          </button>
          <button
            onClick={clearConversation}
            className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatEditor;