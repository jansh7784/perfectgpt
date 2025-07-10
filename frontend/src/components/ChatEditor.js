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

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Message Editor
        </h2>
        <div className="space-y-4">
          {/* Sender Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sender
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sender"
                  value="user"
                  checked={currentSender === "user"}
                  onChange={(e) => setCurrentSender(e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">User</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sender"
                  value="assistant"
                  checked={currentSender === "assistant"}
                  onChange={(e) => setCurrentSender(e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">ChatGPT</span>
              </label>
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <form onSubmit={handleSubmit}>
              <textarea
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder={`Type your ${currentSender === "user" ? "user" : "ChatGPT"} message here...`}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows="4"
              />
              <div className="flex justify-between items-center mt-4">
                <button
                  type="button"
                  onClick={clearConversation}
                  className="px-4 py-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  Clear All
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Add Message
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