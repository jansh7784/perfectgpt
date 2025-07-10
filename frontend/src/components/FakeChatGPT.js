import React, { useState } from "react";
import Header from "./Header";
import ChatEditor from "./ChatEditor";
import ChatPreview from "./ChatPreview";
import Footer from "./Footer";
import { mockConversations } from "../utils/mockData";

const FakeChatGPT = () => {
  const [conversations, setConversations] = useState(mockConversations);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentSender, setCurrentSender] = useState("user");

  const addMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        sender: currentSender,
        message: currentMessage,
        timestamp: new Date().toISOString()
      };
      setConversations([...conversations, newMessage]);
      setCurrentMessage("");
      // Auto-switch sender for next message
      setCurrentSender(currentSender === "user" ? "assistant" : "user");
    }
  };

  const clearConversation = () => {
    setConversations([]);
  };

  const downloadConversation = () => {
    // Mock download functionality
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(conversations, null, 2)], {
      type: "application/json"
    });
    element.href = URL.createObjectURL(file);
    element.download = "fake-chatgpt-conversation.json";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChatEditor
            currentMessage={currentMessage}
            setCurrentMessage={setCurrentMessage}
            currentSender={currentSender}
            setCurrentSender={setCurrentSender}
            addMessage={addMessage}
            clearConversation={clearConversation}
          />
          <ChatPreview
            conversations={conversations}
            downloadConversation={downloadConversation}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FakeChatGPT;