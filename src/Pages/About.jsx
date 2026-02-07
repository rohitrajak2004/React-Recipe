import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen p-5 bg-white text-black sm:px-8 md:px-12 lg:px-20">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Tastebite</h1>
        <div className="w-16 h-0.5 bg-[#ff642f] mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Welcome to Tastebite, a personal project born from a passion for cooking and a desire to learn modern web development. This platform is designed to bring food lovers together through the joy of sharing delicious recipes.
        </p>
      </section>

      {/* Learning Journey Section */}
      <section className="mb-16">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">My Learning Journey</h2>
          <div className="max-w-3xl">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Hey there! 👋 I'm the creator of Tastebite, and this project represents my journey into mastering React and frontend development. What started as a simple idea to practice React components has evolved into this recipe-sharing platform.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Through building Tastebite, I've deepened my understanding of React hooks, component architecture, state management, and responsive design. Each feature implemented has been a learning milestone, from routing with React Router to styling with Tailwind CSS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              While this is currently a frontend-only project (no backend yet!), it serves as a solid foundation for future enhancements and demonstrates my growing proficiency in modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">What Tastebite Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-[#ff642f] text-2xl mb-3">🍳</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Browse Recipes</h3>
            <p className="text-gray-600">Discover a variety of delicious recipes from Spoonacular API with complete nutritional information.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-[#ff642f] text-2xl mb-3">📝</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Share Your Creations</h3>
            <p className="text-gray-600">Submit your own recipes to share with the community and build your culinary portfolio.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-[#ff642f] text-2xl mb-3">📱</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsive Design</h3>
            <p className="text-gray-600">Enjoy Tastebite on any device, from smartphones to desktop computers with beautiful UI.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Technologies Used</h2>
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white rounded border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-xl mb-1">⚛️</div>
              <h3 className="font-semibold text-gray-800 text-sm">React</h3>
              <p className="text-xs text-gray-600">Component-based UI</p>
            </div>
            <div className="p-3 bg-white rounded border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-purple-600 text-xl mb-1">⚡</div>
              <h3 className="font-semibold text-gray-800 text-sm">Vite</h3>
              <p className="text-xs text-gray-600">Fast bundler</p>
            </div>
            <div className="p-3 bg-white rounded border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-teal-600 text-xl mb-1">🎨</div>
              <h3 className="font-semibold text-gray-800 text-sm">Tailwind CSS</h3>
              <p className="text-xs text-gray-600">Modern styling</p>
            </div>
            <div className="p-3 bg-white rounded border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-red-600 text-xl mb-1">🔄</div>
              <h3 className="font-semibold text-gray-800 text-sm">React Router</h3>
              <p className="text-xs text-gray-600">Navigation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Note Section */}
      <section className="mb-12">
        <div className="bg-orange-50 rounded-lg p-6 md:p-8 shadow-sm">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">A Note From the Creator</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Thank you for exploring Tastebite! This project represents countless hours of learning, debugging, and growth as a developer. Every line of code tells a story of overcoming challenges and celebrating small victories.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As someone passionate about both cooking and coding, I wanted to create a space where these interests could intersect. Whether you're looking for your next meal inspiration or eager to share your culinary creations, I hope Tastebite brings value to your kitchen adventures.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This project is continuously evolving as I learn new skills and technologies. Stay tuned for exciting updates and new features coming soon!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;