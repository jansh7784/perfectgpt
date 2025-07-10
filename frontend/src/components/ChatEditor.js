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
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Create Your Fake ChatGPT Conversation
        </h2>
        
        <div className="space-y-4">
          {/* Sender Selection */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Who is sending this message?
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="sender"
                  value="user"
                  checked={currentSender === "user"}
                  onChange={(e) => setCurrentSender(e.target.value)}
                  className="mr-3 w-4 h-4"
                />
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-2">
                    U
                  </div>
                  <span className="text-sm font-medium text-gray-700">User</span>
                </div>
              </label>
              <label className="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="sender"
                  value="assistant"
                  checked={currentSender === "assistant"}
                  onChange={(e) => setCurrentSender(e.target.value)}
                  className="mr-3 w-4 h-4"
                />
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-2">
                    AI
                  </div>
                  <span className="text-sm font-medium text-gray-700">ChatGPT</span>
                </div>
              </label>
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {currentSender === "user" ? "Your message" : "ChatGPT's response"}
            </label>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={`Type ${currentSender === "user" ? "your message" : "ChatGPT's response"} here...`}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                  rows="6"
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  Press Enter to send, Shift+Enter for new line
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={clearConversation}
                  className="px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg font-medium transition-colors"
                >
                  🗑️ Clear All Messages
                </button>
                <button
                  type="submit"
                  disabled={!currentMessage.trim()}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  ➤ Add Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatEditor;