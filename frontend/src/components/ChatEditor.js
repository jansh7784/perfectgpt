import React, { useState } from "react";

const ChatEditor = ({
  currentMessage,
  setCurrentMessage,
  currentSender,
  setCurrentSender,
  addMessage,
  clearConversation
}) => {
  const [messageCount, setMessageCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      addMessage();
      setMessageCount(prev => prev + 1);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (currentMessage.trim()) {
        addMessage();
        setMessageCount(prev => prev + 1);
      }
    }
  };

  const handleClear = () => {
    clearConversation();
    setMessageCount(0);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Chat Editor</h2>
        <div className="text-sm text-gray-400">
          Messages: {messageCount}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col space-y-4">
        {/* Current Message Input */}
        <div className="bg-gray-700 rounded-lg p-4 flex-1">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${currentSender === 'user' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                <span className="text-white text-sm font-medium">
                  {currentSender === 'user' ? 'User' : 'ChatGPT'}
                </span>
              </div>
              <button
                onClick={() => setCurrentSender(currentSender === 'user' ? 'assistant' : 'user')}
                className="text-xs text-gray-400 hover:text-white bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded transition-colors"
              >
                Switch to {currentSender === 'user' ? 'ChatGPT' : 'User'}
              </button>
            </div>
          </div>
          
          <textarea
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={currentSender === "user" ? "Type your message as User..." : "Type ChatGPT's response..."}
            className="w-full h-32 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none placeholder-gray-400"
            rows="6"
          />
          
          <div className="flex items-center justify-between mt-3">
            <div className="text-xs text-gray-400">
              {currentMessage.length} characters • Press Enter to send, Shift+Enter for new line
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleSubmit}
                disabled={!currentMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
              >
                Add Message
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-3">
          <button
            onClick={handleClear}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Clear All</span>
          </button>
          
          <button
            onClick={() => {
              setCurrentMessage("Hello! How can I help you today?");
              setCurrentSender("assistant");
            }}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Sample ChatGPT</span>
          </button>
        </div>

        {/* Quick Templates */}
        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-white text-sm font-medium mb-3">Quick Templates</h3>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => {
                setCurrentMessage("What is artificial intelligence?");
                setCurrentSender("user");
              }}
              className="text-left text-xs text-gray-300 hover:text-white hover:bg-gray-600 p-2 rounded transition-colors"
            >
              Sample User: "What is artificial intelligence?"
            </button>
            <button
              onClick={() => {
                setCurrentMessage("Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans...");
                setCurrentSender("assistant");
              }}
              className="text-left text-xs text-gray-300 hover:text-white hover:bg-gray-600 p-2 rounded transition-colors"
            >
              Sample ChatGPT: AI explanation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatEditor;