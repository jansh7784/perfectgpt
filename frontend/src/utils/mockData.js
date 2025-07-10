// Mock data for the fake ChatGPT conversation generator

export const mockConversations = [
  {
    id: 1,
    sender: "user",
    message: "Hello! Can you help me with a coding problem?",
    timestamp: "2025-01-27T10:00:00Z"
  },
  {
    id: 2,
    sender: "assistant",
    message: "Of course! I'd be happy to help you with your coding problem. What programming language are you working with, and what specific issue are you facing?",
    timestamp: "2025-01-27T10:00:30Z"
  },
  {
    id: 3,
    sender: "user",
    message: "I'm working with JavaScript and I'm having trouble with async/await syntax.",
    timestamp: "2025-01-27T10:01:00Z"
  },
  {
    id: 4,
    sender: "assistant",
    message: "Great! Async/await is a powerful feature in JavaScript. Here's a simple example:\n\n```javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n}\n```\n\nThe key points are:\n- Use `async` before function declaration\n- Use `await` before promises\n- Wrap in try/catch for error handling\n\nWhat specific part are you struggling with?",
    timestamp: "2025-01-27T10:01:30Z"
  }
];

export const sampleMessages = [
  "Hello! How can I help you today?",
  "Can you explain quantum computing?",
  "What's the weather like today?",
  "Help me write a poem about coding",
  "Explain the difference between React and Vue",
  "What are the benefits of meditation?",
  "How do I make a perfect cup of coffee?",
  "Can you help me learn Spanish?",
  "What's the latest in AI technology?",
  "Explain blockchain in simple terms"
];

export const chatGPTResponses = [
  "I'd be happy to help you with that! Let me break it down for you.",
  "That's a great question! Here's what I can tell you...",
  "I understand you're looking for information about this topic. Here's my response:",
  "Absolutely! I can help you understand this concept better.",
  "That's an interesting question. Let me explain this step by step.",
  "I'm here to help! Here's what you need to know:",
  "Great question! This is actually a fascinating topic.",
  "I can definitely help you with this. Here's my explanation:",
  "That's a common question, and I'm happy to clarify:",
  "Excellent question! Let me provide you with a detailed answer."
];