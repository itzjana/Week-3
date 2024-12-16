import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.gif";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.gif";
import p5 from "./assets/p5.gif";
import "animate.css";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    about: false,
    features: false,
    testimonials: false,
    contact: false,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const sections = [
      { id: "hero", setVisible: (visible) => updateVisibility("hero", visible) },
      { id: "about", setVisible: (visible) => updateVisibility("about", visible) },
      { id: "features", setVisible: (visible) => updateVisibility("features", visible) },
      { id: "testimonials", setVisible: (visible) => updateVisibility("testimonials", visible) },
      { id: "contact-us", setVisible: (visible) => updateVisibility("contact", visible) },
    ];

    const observerOptions = { threshold: 0.2};

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = sections.find((s) => s.id === entry.target.id);
        if (section) {
          section.setVisible(entry.isIntersecting);
        }
      });
    }, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const updateVisibility = (section, isVisible) => {
    setVisibleSections((prev) => ({
      ...prev,
      [section]: isVisible,
    }));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="w-full  bg-gradient-to-r from-blue-400 to-white">
    
<header className="fixed top-0 left-0 w-full flex justify-between items-center text-black py-4 px-8 md:px-32 bg-white drop-shadow-md z-50">
  <a href="#">
    <img src={logo} alt="Logo" className="w-40 hover:scale-105 transition-all" />
  </a>
  <ul className="hidden xl:flex items-center gap-5 font-semibold text-base">
    <li>
      <a href="#" className="p-3 hover:bg-sky-400 hover:text-white rounded-md">
        Home
      </a>
    </li>
    <li>
      <a href="#features" className="p-3 hover:bg-sky-400 hover:text-white rounded-md">
        Services
      </a>
    </li>
    <li>
      <a href="#about" className="p-3 hover:bg-sky-400 hover:text-white rounded-md">
        About Us
      </a>
    </li>
    <li>
      <a href="#contact-us" className="p-3 hover:bg-sky-400 hover:text-white rounded-md">
        Contact
      </a>
    </li>
  </ul>
  <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer" onClick={handleMenuToggle}></i>
  <div
    className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center font-semibold text-lg ${
      isMenuOpen ? "opacity-100" : "opacity-0"
    }`}
    style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
  >
    <li className="list-none w-full text-center p-1 hover:bg-sky-400 hover:text-white">
      <a href="#">Home</a>
    </li>
    <li className="list-none w-full text-center p-1 hover:bg-sky-400 hover:text-white">
      <a href="#features">Services</a>
    </li>
    <li className="list-none w-full text-center p-1 hover:bg-sky-400 hover:text-white">
      <a href="#about">About Us</a>
    </li>
    <li className="list-none w-full text-center p-1 hover:bg-sky-400 hover:text-white">
      <a href="#contact-us">Contact</a>
    </li>
  </div>
</header>


     
      <section
        id="hero"
        className={`w-full py-16 pt-60 flex items-center justify-center px-6 md:px-20 fade-in ${
          visibleSections.hero ? "animate__fadeIn" : "opacity-0"
        }`}
      >
       <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-4xl font-bold text-white animate__animated animate__fadeIn">Planner</h1>
            <h2 className="text-4xl md:text-3xl font-bold text-blue-500 animate__animated animate__fadeIn animate__delay-1s">Organize Your Day, Your Way</h2>
            <p className="mt-4 text-xl md:text-2xl text-gray-700 animate__animated animate__fadeIn animate__delay-2s">
              Stay on top of your tasks with Creative. Simple, intuitive, and powerful.
            </p>
            <a
              href="file:///C:/Users/janak/OneDrive/Documents/Internship/Week-2/index.html"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 inline-block px-8 py-4 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600"
            >
            Get started for free
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={p1}
              alt="Preview of the Creative App showcasing task management features"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      
      <section
        id="about"
        className={`w-full px-6 md:px-20 py-16 fade-in bg-gradient-to-r from-blue-400 to-white ${
          visibleSections.about ? "animate__fadeIn" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center animate__animated animate__fadeIn animate__delay-1s">
    <h2 className="text-4xl font-bold mb-8">About Planner</h2>
    <p className="text-xl md:text-2xl font-semibold text-gray-500 mb-6">
      Creative is here to help you take control of your tasks, one list at a time. Our intuitive app simplifies your to-do list management, making it easier than ever to stay organized, meet deadlines, and boost productivity.
    </p>
    <p className="text-lg text-gray-700">
      Whether you're a busy professional, a student juggling assignments, or someone looking to streamline their daily routines, Creative provides a flexible, customizable solution that adapts to your needs. 
      Say goodbye to stress and clutter – and hello to clarity and focus.
    </p>
  </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className={`w-full px-6 md:px-20 py-16 fade-in bg-gradient-to-r from-blue-400 to-white ${
          visibleSections.features ? "animate__fadeIn" : "opacity-0"
        }`}
      >
         <h2 className="text-4xl font-bold text-center mb-16 text-black animate__animated animate__fadeIn">
    Services
  </h2>
  <div className="relative space-y-12 md:grid md:grid-cols-2 gap-12 md:gap-24 lg:grid-cols-3 xl:grid-cols-4">
    {/* Rope connection */}
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <div className="w-full h-full border-t-2 border-dashed border-white absolute top-1/2 transform -translate-y-1/2" />
    </div>

    {/* Cards */}
    <div className="p-8 bg-slate-200 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-sky-300 z-10 animate__animated animate__fadeIn">
      <img src={p2} alt="Feature 1" className="w-full h-20 mx-auto mb-8" />
      <h3 className="text-2xl font-semibold mb-4">Task Management</h3>
      <p className="text-lg text-gray-600">
        Keep track of your tasks and mark them complete with ease.
      </p>
    </div>
    {/* Add additional card content */}
    <div className="p-8 bg-slate-200 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-sky-300 z-10 animate__animated animate__fadeIn">
      <img src={p3} alt="Feature 2" className="w-full h-20 mx-auto mb-8" />
      <h3 className="text-2xl font-semibold mb-4">Custom Lists</h3>
      <p className="text-lg text-gray-600">
        Create and customize lists for different projects or goals.
      </p>
    </div>
    <div className="p-8 bg-slate-200 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-sky-300 z-10 animate__animated animate__fadeIn">
      <img src={p4} alt="Feature 3" className="w-full h-20 mx-auto mb-8" />
      <h3 className="text-2xl font-semibold mb-4">Reminders & Notifications</h3>
      <p className="text-lg text-gray-600">
        Never miss a deadline with our notification system.
      </p>
    </div>
    {/* New card */}
    <div className="p-8 bg-slate-200 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-sky-300 z-10 animate__animated animate__fadeIn">
      <img src={p5} alt="Feature 4" className="w-full h-20 mx-auto mb-8" />
      <h3 className="text-2xl font-semibold mb-4">Advanced Sorting</h3>
      <p className="text-lg text-gray-600">
        Sort your tasks by priority, date, or custom categories.
      </p>
    </div>
  </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className={`w-full px-6 md:px-60 py-16 fade-in bg-gradient-to-r from-blue-400 to-white ${
          visibleSections.testimonials ? "animate__fadeIn" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-black">Testimonials</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
  {/* Testimonial 1 */}
  <div className="py-6 px-4 sm:px-6">
    <blockquote>
      <span className="text-sm text-gray-700">
        I'm absolutely floored by the level of care and attention to detail Eliana has put into this project and for one can guarantee that we will be a return customer.
      </span>
      <footer className="mt-3 flex items-center gap-x-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Josh Grazioso Avatar"
        />
        <div className="text-xs text-gray-500 dark:text-neutral-500">Josh Grazioso</div>
      </footer>
    </blockquote>
  </div>

  {/* Testimonial 2 */}
  <div className="py-6 px-4 sm:px-6">
    <blockquote>
      <span className="text-sm text-gray-700">
        To say that hiring Eliana has been life-changing is an understatement. My business has tripled and I got my life back.
      </span>
      <footer className="mt-3 flex items-center gap-x-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Nicole Grazioso Avatar"
        />
        <div className="text-xs text-gray-500 dark:text-neutral-500">Nicole Grazioso</div>
      </footer>
    </blockquote>
  </div>
</div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-us"
        className={`w-full px-6 md:px-20 py-16 fade-in bg-gradient-to-r from-blue-400 to-white ${
          visibleSections.contact ? "animate__fadeIn" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold mb-10 text-center">Contact Us</h2>
  <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-400 to-white p-8 rounded-lg shadow-lg">
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          className="w-full p-3 rounded-lg bg-slate-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          className="w-full p-3 rounded-lg bg-slate-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
        <textarea
          id="message"
          rows="5"
          className="w-full p-3 rounded-lg bg-slate-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
      </section>

      <footer className="text-white py-4 bg-gradient-to-r from-blue-500 to-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-4xl font-bold">Planner</h3>
        <p className="text-gray-700 mt-2">Making your experience better every day.</p>
      </div>
      {/* Right Navigation Bar */}
      <div className="flex gap-6 mb-6 md:mb-0 md:ml-auto">
        <a href="#" className="text-gray-700 hover:text-white">Home</a>
        <a href="#features" className="text-gray-700 hover:text-white">Services</a>
        <a href="#about" className="text-gray-700 hover:text-white">About Us</a>
        <a href="#contact-us" className="text-gray-700 hover:text-white">Contact</a>
      </div>
      {/* Social Media Icons */}
      <div className="flex gap-4">
        <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
    <p className="text-center text-gray-700 mt-4">&copy; 2024 Planner. All rights reserved.</p>
  </div>
</footer>


    </div>
  );
}

export default App;
