import React from "react";

const About = () => {
  return (
    <div className="relative min-h-screen text-white font-sans">
      {/* ✅ Radial background gradient to fix navbar white issue */}
      <div className="fixed inset-0 z-[-10] bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-32 px-6">
        <h1 className="text-6xl font-extrabold drop-shadow-lg mb-4">
          About <span className="text-purple-400">United UI</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          United UI is a one-person open-source initiative providing beautiful,
          plug-and-play React + Tailwind components built for speed, simplicity, and scale.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://img.icons8.com/3d-fluency/200/rocket.png"
            alt="Mission"
            className="mx-auto drop-shadow-2xl"
          />
          <div>
            <h2 className="text-4xl font-bold text-indigo-300 mb-4">The Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              The goal is to empower developers with ready-made, clean, accessible components
              that speed up development without sacrificing design quality.
              Whether you're building dashboards, portfolios, or SaaS apps — United UI helps you move faster.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 ">
        <h2 className="text-5xl font-bold text-indigo-200 text-center mb-16">Development Timeline</h2>
        <div className="max-w-4xl mx-auto space-y-12 border-l border-white/20 pl-8">
          <div>
            <h3 className="text-xl font-semibold text-white">📅 April 2025 – Conceptualization</h3>
            <p className="text-gray-400 mt-2">
              The idea for United UI was born after realizing the need for a lightweight, reusable component library
              that looked great and felt snappy to work with. Brainstormed structure and started wireframing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">🛠️ May 2025 – Development Begins</h3>
            <p className="text-gray-400 mt-2">
              Started coding core components, experimenting with Tailwind utilities,
              and setting up the project architecture. Created hero sections, buttons, navbars, and layout templates.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">🚀 June 2025 – First Version Complete</h3>
            <p className="text-gray-400 mt-2">
              Finished polishing components, added demo pages, and deployed the first live version.
              Continued refining animations, shadows, and accessibility features.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Card */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-5xl font-bold text-indigo-200 mb-12">Built by One</h2>
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
          <img
            src="https://img.icons8.com/fluency/96/user-male-circle.png"
            alt="Developer"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-2xl font-semibold text-white">Yash Mishra</h3>
          <p className="text-gray-300 mt-2">
            Solo developer, designer, and everything in between. Passionate about building aesthetic, reusable
            UI tools that help developers ship faster.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-5xl font-extrabold text-white mb-4">Ready to Use United UI?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Check out the component library and start building stunning interfaces in minutes.
        </p>
        <a
          href="/library"
          className="inline-block px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold shadow-lg"
        >
          Browse Components →
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-white py-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
        &copy; {new Date().getFullYear()} United UI. Built solo with 💜 using React & Tailwind.
      </footer>
    </div>
  );
};

export default About;
