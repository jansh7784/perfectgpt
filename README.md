
# 🧠 ChatGen:- A chatgpt like chat generator

A  frontend-only chat like chatgpt project clone of built using **React**, **Tailwind CSS**, and **html2canvas**. This app lets users create AI-like chat conversations, edit messages, toggle themes, and download conversations as high-quality images — all without a backend.

## ✨ Features

- 💬 **Chat Editor**: Create custom conversations with alternating senders (User/ChatGPT)
- 🖼️ **Live Preview**: Real-time chat bubble rendering with perfect ChatGPT styling
- 🖼️ **Download Image**: Export conversation as a clean PNG using `html2canvas`
- 🌙 **Dark/Light Mode**: Seamless theme switching with persistence and system detection
- 🧭 **Multi-page Navigation**: Includes Homepage, Use Cases, Blog, Contact, ToS, and Privacy Policy
- 🖱️ **Interactive UI**:
  - Shift + Enter = new line
  - Enter = send message
  - Auto sender toggle
  - Message counter and clear function
- 📱 **Responsive Design**: Fully mobile/tablet/desktop adaptive
- 🧵 **Smooth Scrollbars**: Custom scroll styling with `tailwind-scrollbar`

## 🛠 Tech Stack

| Tool/Library         | Purpose                            |
|----------------------|------------------------------------|
| **React**            | UI development                     |
| **Tailwind CSS**     | Utility-first styling framework    |
| **html2canvas**      | Screenshot generation              |
| **React Router**     | Client-side routing                |
| **React Context API**| Theme management                   |
| **tailwind-scrollbar** | Custom scroll behavior            |
| **tailwindcss-animate** | Smooth animations                |

## 📁 Directory Structure (Frontend Focused)

```
/frontend
├── public/
├── src/
│   ├── App.js                  # Main routing and layout
│   ├── index.css               # Tailwind + global styles
│   ├── contexts/ThemeContext.js
│   ├── components/
│   │   ├── FakeChatGPT.js      # Core chat builder UI
│   │   ├── ChatEditor.js       # Message input panel
│   │   ├── ChatPreview.js      # Real-time chat view
│   │   ├── Header.js, Footer.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── UseCases.js, Blog.js, Contact.js, etc.
│   └── utils/
│       └── mockData.js
```

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/jansh7784/perfectgpt.git
cd perfectgpt/frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Start the App

```bash
npm run dev
# or
yarn dev
```

> App runs at `http://localhost:5173`

## 🧪 Key Components Explained

- **`FakeChatGPT.js`** – Manages the editor and live preview
- **`ChatEditor.js`** – Handles user message input and avatars
- **`ChatPreview.js`** – Displays bubble UI and controls download
- **`ThemeContext.js`** – Global dark/light mode management
- **`tailwind.config.js`** – Custom theme variables, animations, scrollbars

## 🧩 Pending Enhancements

- ✅ Improve PNG resolution from `html2canvas`
- ✅ Make dark/light theme persistent in `localStorage`
- ✅ Scrollbar UX audit
- 🟡 Add drag-and-drop reordering (future)
- 🟡 Markdown support for messages (future)

## 📸 Screenshots

> _Add some here! (fake conversation, dark/light toggle, download preview, mobile view)_

## 📄 License

MIT License. Use freely with attribution if helpful!

## 🙌 Credits

This project was built by [Ansh Jain](https://linked.in/ansh--jain). Built for educational and portfolio purposes.

## 🧑‍💻 Author

**Ansh Jain**  
- [LinkedIn](https://www.linkedin.com/in/ansh--jain/)  
- [GitHub](https://github.com/jansh7784)  
- [Portfolio](https://officialpodflix.me/portfolio-A-Z)  

## 💬 Contribute

Want to add features or improve UI/UX? Feel free to fork & raise a PR!
