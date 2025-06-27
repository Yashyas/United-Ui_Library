import React from "react";
import { Link } from "react-router-dom";

const components = [
  {
    name: "Accessories",
    description: "Utility elements like badges, chips, tags, and tooltips.",
    slug: "accessories",
    image: "https://img.icons8.com/color/96/badge.png",
  },
  {
    name: "Buttons",
    description: "Customizable buttons with various states, icons, and styles.",
    slug: "buttons",
    image: "https://img.icons8.com/?size=100&id=45462&format=png&color=228BE6",
  },
  {
    name: "Cards",
    description: "Responsive cards for content, profiles, or product display.",
    slug: "cards",
    image: "https://img.icons8.com/color/96/stack-of-photos.png",
  },
  {
    name: "Forms",
    description: "Input fields, checkboxes, radio buttons, switches, and more.",
    slug: "forms",
    image: "https://img.icons8.com/color/96/form.png",
  },
  {
    name: "Grids",
    description: "Pre-built layout templates using Tailwind grid & flex utilities.",
    slug: "grids",
    image: "https://img.icons8.com/color/96/grid.png",
  },
  {
    name: "Modals",
    description: "Pre-styled modals with overlay, animation, and callbacks.",
    slug: "modals",
    image: "https://img.icons8.com/?size=100&id=jNShxGIRdLFa&format=png&color=228BE6",
  },
  {
    name: "Navbar",
    description: "Responsive navigation bars with dropdown and mobile menu.",
    slug: "navbar",
    image: "https://img.icons8.com/color/96/menu.png",
  },
];

const HomePage = () => {
  return (
    <div className="relative text-white min-h-screen font-sans">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Hero */}
      <section className="relative h-screen pt-20 flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 backdrop-blur-xl bg-white/10 rounded-3xl p-12 text-center max-w-4xl shadow-2xl border border-white/20">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
            Yash's Component UI Library
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            A plug-and-play React + Tailwind CSS kit crafted for elegance, speed, and beauty.
          </p>
          <a
            href="#guide"
            className="mt-8 inline-block bg-white/20 text-white font-medium px-8 py-4 rounded-xl border border-white/40 hover:bg-white/30 transition-all backdrop-blur-md"
          >
            Explore Guide ↓
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8 text-center">
        <h2 className="text-5xl font-bold text-indigo-200 mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["🚀", "🎨", "🌐"].map((icon, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold text-white">
                {i === 0 ? "Fast Setup" : i === 1 ? "Tailwind Powered" : "Responsive"}
              </h3>
              <p className="text-gray-300 mt-2">
                {i === 0
                  ? "Drop in & go. No bloat, no fuss."
                  : i === 1
                  ? "Fully customizable utility-first styles."
                  : "Looks great on all screen sizes."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Guide */}
      <section id="guide" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-indigo-200 mb-4">Plug & Play Usage</h2>
            <p className="text-gray-300 mb-4">
              Just copy and paste the components. Works out of the box with full Tailwind support.
            </p>
            <div className="bg-black/30 rounded-lg p-6 font-mono text-sm text-white border border-white/20">
              <pre>
{`// 1. Import
import { Button } from "./components/Button";

// 2. Use it
<Button variant="primary">Click Me</Button>`}
              </pre>
            </div>
          </div>
          <img
            src="https://img.icons8.com/3d-fluency/200/code.png"
            alt="code"
            className="w-full max-w-xs mx-auto drop-shadow-xl"
          />
        </div>
      </section>

      {/* Component Cards */}
      <section className="py-24 px-6 bg-gradient-to-t from-gray-950 to-black">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-indigo-200">Component Collection</h2>
          <p className="text-gray-400 mt-4">Interactive, glassy, and crafted to scale your UI fast.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {components.map((comp) => (
            <div
              key={comp.slug}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-md hover:shadow-2xl transition group"
            >
              <img
                src={comp.image}
                alt={comp.name}
                className="w-16 h-16 mb-4 mx-auto transition-transform group-hover:scale-110"
              />
              <h3 className="text-2xl font-semibold text-white">{comp.name}</h3>
              <p className="text-gray-300 mt-2">{comp.description}</p>
              <Link
                to="/library"
                className="mt-4 inline-block text-indigo-300 hover:underline"
              >
                View Demo →
              </Link>
              
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-100 mb-6">What Developers Say</h2>
          <blockquote className="text-gray-300 italic text-lg">
            “This component kit saved me weeks of frontend dev. It’s clean, gorgeous, and ridiculously easy to work with!”
          </blockquote>
          <div className="mt-4 text-indigo-200 font-medium">— Yash Mishra, FullStack React Developer</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-5xl font-extrabold text-white mb-4">Build Beautiful UIs Faster</h2>
        <p className="text-lg text-gray-300 mb-8">
          Start using Yash's UI Library today and transform your workflow.
        </p>
        <Link
          to="/library"
          className="inline-block px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold shadow-lg"
        >
          Get Started →
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-white py-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
        &copy; {new Date().getFullYear()} United UI. Built with 💜 by Yash Mishra.
      </footer>
    </div>
  );
};

export default HomePage;
