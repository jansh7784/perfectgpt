import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Create Realistic Fake ChatGPT Conversations",
      excerpt: "Learn the best practices for generating authentic-looking ChatGPT conversation screenshots that are perfect for educational and presentation purposes.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Tutorial",
      image: "📝"
    },
    {
      title: "Ethics of Using Fake AI Conversations in Education",
      excerpt: "Exploring the ethical considerations and best practices when using simulated AI conversations for educational purposes.",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Ethics",
      image: "🤔"
    },
    {
      title: "10 Creative Use Cases for Fake ChatGPT Screenshots",
      excerpt: "Discover innovative ways professionals use fake ChatGPT conversations in their work, from UX design to content marketing.",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Use Cases",
      image: "💡"
    },
    {
      title: "The Psychology Behind AI Conversation Design",
      excerpt: "Understanding what makes AI conversations feel natural and how to apply these principles when creating fake ChatGPT dialogues.",
      date: "December 28, 2024",
      readTime: "8 min read",
      category: "Psychology",
      image: "🧠"
    },
    {
      title: "Legal Considerations for Fake AI Content",
      excerpt: "Important legal guidelines and disclosure requirements when creating and sharing simulated AI conversations.",
      date: "December 20, 2024",
      readTime: "9 min read",
      category: "Legal",
      image: "⚖️"
    },
    {
      title: "Building Better Chat Interfaces: Lessons from ChatGPT",
      excerpt: "Design principles and user experience insights learned from analyzing real ChatGPT conversations.",
      date: "December 15, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "🎨"
    }
  ];

  const categories = ["All", "Tutorial", "Ethics", "Use Cases", "Psychology", "Legal", "Design"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-700 dark:to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fake ChatGPT Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Insights, tutorials, and best practices for creating and using fake ChatGPT conversations
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{post.image}</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <button className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the latest insights, tutorials, and best practices for creating fake ChatGPT conversations delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Essential guides and tools for creating authentic fake ChatGPT conversations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Complete Guide
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Everything you need to know about creating fake ChatGPT conversations
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                Download Guide
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Design Templates
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Ready-to-use conversation templates for common scenarios
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                Get Templates
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Best Practices
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Ethics, guidelines, and professional standards for fake AI content
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;