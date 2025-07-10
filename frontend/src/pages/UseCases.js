import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UseCases = () => {
  const useCases = [
    {
      title: "Educational Presentations",
      description: "Create fake ChatGPT conversations for teaching AI concepts, demonstrating chat interfaces, or showing examples in educational materials.",
      icon: "🎓",
      features: [
        "Perfect for classroom demonstrations",
        "Show AI conversation examples",
        "Create teaching materials",
        "Academic research presentations"
      ]
    },
    {
      title: "Business Demos",
      description: "Use fake ChatGPT screenshots in business presentations, client demos, or product mockups to showcase AI integration concepts.",
      icon: "💼",
      features: [
        "Client presentation materials",
        "Product demo screenshots",
        "Marketing materials",
        "Business proposal examples"
      ]
    },
    {
      title: "Social Media Content",
      description: "Create engaging social media posts, blog content, or content marketing materials using realistic ChatGPT conversation examples.",
      icon: "📱",
      features: [
        "Instagram and Twitter posts",
        "Blog post illustrations",
        "Content marketing examples",
        "Social media storytelling"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Generate realistic chat interfaces for design mockups, prototypes, or user experience demonstrations.",
      icon: "🎨",
      features: [
        "Design system examples",
        "User interface mockups",
        "Prototype conversations",
        "UX research materials"
      ]
    },
    {
      title: "Content Creation",
      description: "Create realistic AI conversation examples for tutorials, how-to guides, or educational content about AI and chatbots.",
      icon: "✍️",
      features: [
        "Tutorial screenshots",
        "How-to guide examples",
        "AI education content",
        "Technical documentation"
      ]
    },
    {
      title: "Research & Testing",
      description: "Generate conversation examples for academic research, user testing, or studying human-AI interaction patterns.",
      icon: "🔬",
      features: [
        "Academic research data",
        "User testing scenarios",
        "Interaction pattern studies",
        "Behavioral research examples"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Use Cases for Fake ChatGPT Conversations
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Discover how professionals, educators, and creators use our fake ChatGPT conversation generator
          </p>
        </div>
      </div>

      {/* Use Cases Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Best Practices for Using Fake ChatGPT Conversations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Follow these guidelines to use fake ChatGPT conversations effectively and ethically
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                Do's
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  Always disclose that conversations are simulated when sharing publicly
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  Use for educational, creative, and demonstration purposes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  Create realistic and helpful examples for your audience
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  Ensure content is appropriate and professional
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  Use for academic research and user experience design
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-red-500 mr-2">❌</span>
                Don'ts
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  Don't use to deceive or mislead people
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  Don't create fake evidence for legal proceedings
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  Don't generate harmful, offensive, or inappropriate content
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  Don't impersonate real people or organizations
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  Don't use for malicious social engineering or phishing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Examples Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Real-World Examples
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See how different professionals use fake ChatGPT conversations in their work
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                🎓 University Professor
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "I use fake ChatGPT conversations in my AI ethics course to show students examples of different AI interaction patterns and discuss the implications of AI-generated content."
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                <strong>Use Case:</strong> Educational demonstrations and classroom discussions
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                💼 Product Manager
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "Our team creates fake ChatGPT conversations to demonstrate potential AI features in client presentations. It helps stakeholders visualize how AI could work in our product."
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                <strong>Use Case:</strong> Business presentations and feature mockups
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                🎨 UX Designer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "I create realistic chat conversations for user testing scenarios. It helps us understand how users might interact with AI features before we build them."
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                <strong>Use Case:</strong> User experience research and design prototyping
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                📝 Content Creator
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "I use fake ChatGPT conversations in my blog posts and social media to illustrate points about AI capabilities and limitations. Always with proper disclosure, of course!"
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                <strong>Use Case:</strong> Content marketing and educational blogging
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-600 dark:to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Own Fake ChatGPT Conversations?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Start generating professional fake ChatGPT conversations for your use case right now
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/'}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Create Fake ChatGPT Conversation
            </button>
            <button
              onClick={() => window.location.href = '/blog'}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Read Our Blog
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UseCases;