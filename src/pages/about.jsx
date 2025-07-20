import React from "react";
import Aos from "aos";

function About() {
  return (
    <section data-aos="fade-up" className="bg-gray-900 text-white py-12 px-6" id="about">
      <h2 className="text-4xl font-bold mb-6 text-blue-400 text-center">About Me</h2>
      <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-xl shadow-md mb-6">
        
        <p className="text-lg text-white">
          Hi, I'm <span className="font-semibold">Chitransh Prasad</span>, a <span className="font-medium">BCA student</span> and self-taught full-stack developer from New Delhi, India. I enjoy building web apps that are both useful and visually appealing.
        </p>

        <p className="mt-4 text-white">
          One of my favorite projects is <span className="font-semibold">SnapTube</span> — a YouTube utility app built with React and FastAPI, featuring a summarizer, thumbnail editor, audio extractor, and Firebase Authentication.
        </p>

        <p className="mt-4 text-white">
          I work with <span className="font-medium">Python, JavaScript, C, and Java</span> and use tools like <span className="font-medium">React.js, Flask, FastAPI, and Tailwind CSS</span> to build my projects. I'm also exploring <span className="font-medium">AI/ML, web scraping, and automation</span> to expand my skills.
        </p>

        <p className="mt-4 text-white">
          Outside of coding, I love designing UI in Figma, contributing to open-source, and sharing ideas on my blog. I'm aiming for a career in a product-based tech company where I can grow and innovate.
        </p>

        <p className="mt-4 italic text-white">
          Let’s build something great together.
        </p>
      </div>
    </section>
  );
}

export default About;
