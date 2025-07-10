import React from "react";

const ChatPreview = ({ conversations, downloadConversation }) => {
  const ChatMessage = ({ message }) => {
    const isUser = message.sender === "user";
    
    return (
      <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
        <div className={`flex ${isUser ? "flex-row-reverse" : "flex-row"} max-w-xs lg:max-w-md`}>
          {/* Avatar */}
          <div className={`flex-shrink-0 ${isUser ? "ml-2" : "mr-2"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
              isUser ? "bg-blue-500" : "bg-green-500"
            }`}>
              {isUser ? "U" : "AI"}
            </div>
          </div>
          
          {/* Message Bubble */}
          <div className={`px-4 py-2 rounded-lg ${
            isUser 
              ? "bg-blue-500 text-white" 
              : "bg-gray-100 text-gray-900 border"
          }`}>
            <p className="text-sm whitespace-pre-wrap">{message.message}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Conversation Preview
        </h2>
        <button
          onClick={downloadConversation}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium text-sm"
        >
          Download
        </button>
      </div>
      
      <div className="border rounded-lg p-4 bg-gray-50 min-h-[400px] max-h-[600px] overflow-y-auto">
        {conversations.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>No messages yet. Start adding messages to see the conversation!</p>
          </div>
        ) : (
          <div className="space-y-2">
            {conversations.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        <p>Messages: {conversations.length}</p>
        <p>Preview shows how your fake ChatGPT conversation will appear</p>
      </div>
    </div>
  );
};

export default ChatPreview;