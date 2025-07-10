import React, { useState } from "react";
import Header from "./Header";
import ChatEditor from "./ChatEditor";
import ChatPreview from "./ChatPreview";
import Footer from "./Footer";
import { mockConversations } from "../utils/mockData";

const FakeChatGPT = () => {
  const [conversations, setConversations] = useState([]);
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

  const downloadConversationImage = async () => {
    const html2canvas = (await import('html2canvas')).default;
    const element = document.getElementById('chat-preview');
    if (element) {
      const canvas = await html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      const link = document.createElement('a');
      link.download = 'fake-chatgpt-conversation.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Fake ChatGPT Conversation Generator
          </h1>
          <p className="text-gray-600">
            Create realistic fake ChatGPT conversation screenshots instantly
          </p>
        </div>
        
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
            downloadConversation={downloadConversationImage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FakeChatGPT;