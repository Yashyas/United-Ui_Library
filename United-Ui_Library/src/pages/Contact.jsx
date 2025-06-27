import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ym130602@gmail.com?subject=Message from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(`Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="relative min-h-screen text-white font-sans">
      {/* Gradient background to match homepage & fix navbar issue */}
      <div className="fixed inset-0 z-[-10] bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-6xl font-extrabold drop-shadow-lg mb-4">
          Contact <span className="text-purple-400">United UI</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Whether you have a question, feedback, or just want to say hi, I’d love to hear from you!
        </p>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Email",
              icon: "https://img.icons8.com/color/96/new-post.png",
              text: "Drop me a message anytime",
              link: "mailto:ym130602@gmail.com",
              label: "ym130602@gmail.com",
            },
            {
              title: "GitHub",
              icon: "https://img.icons8.com/ios-filled/100/ffffff/github.png",
              text: "Check out the repo or star it!",
              link: "https://github.com/Yashyas/United-Ui_Library",
              label: "github.com/Yashyas",
            },
            {
              title: "LinkedIn",
              icon: "https://img.icons8.com/color/96/linkedin-circled--v1.png",
              text: "Let’s connect professionally!",
              link: "https://www.linkedin.com/in/yash-mishra-078050225",
              label: "linkedin-Yash-mishra",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition"
            >
              <img src={card.icon} alt={card.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.text}</p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-indigo-300 hover:underline"
              >
                {card.label}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form with mailto submission */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
          <h2 className="text-4xl font-bold text-indigo-200 mb-6 text-center">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold shadow-lg"
            >
              Send via Email
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-white py-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
        &copy; {new Date().getFullYear()} United UI. Crafted with 💜 by Yash Mishra.
      </footer>
    </div>
  );
};

export default Contact;
