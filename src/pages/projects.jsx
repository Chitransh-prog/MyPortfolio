import React, { useState } from "react";
import Aos from "aos";

const carouselImages = [
  { src: "/BGMI.png", title: "BGMI Poster" },
  { src: "/Himalaya_Facewash.png", title: "Himalaya Facewash Design" },
  { src: "/Summer_Festival.png", title: "Summer Festival Poster" },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      data-aos="fade-up"
      className="bg-gray-900 text-white py-12 px-6"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* SnapTube */}
          <ProjectCard
            title="SnapTube"
            description="A YouTube utility app built with React and FastAPI featuring video summarization, thumbnail downloader/editor, and audio extractor. Includes Firebase Authentication and dark mode UI."
            github="https://github.com/Chitransh-prog"
          />

          {/* Nova AI Assistant */}
          <ProjectCard
            title="Nova AI Assistant"
            description="A personal AI assistant capable of performing voice-based tasks, built using Python, LLM APIs, and automation tools. Integrates simple NLP logic with a beautiful interface."
            github="https://github.com/Chitransh-prog/NOVA-Voice_Assistant"
          />

          {/* Meme Generator */}
          <ProjectCard
            title="Meme Generator"
            description="A fun meme generator built using HTML, CSS, and JavaScript. Allows users to create custom memes with text overlay and download/share functionality."
            github="https://github.com/Chitransh-prog/Meme_Generator"
            live="https://meme-generator-degv.vercel.app/"
          />

          {/* TechGenie Blog */}
          <ProjectCard
            title="TechGenie Blog"
            description="A personal tech blogging platform where I share tutorials, tips, and project writeups. Clean design and responsive layout using modern frontend technologies."
            live="https://www.techgenie.blog"
          />
        </div>

        {/* Designs Section */}
        <h2 className="text-4xl font-bold text-blue-400 mt-16 mb-10 text-center">
          Designs & UI/UX
        </h2>

        <div className="relative w-full max-w-4xl mx-auto">
          {/* Carousel Image */}
          <div className="relative h-96 w-full group overflow-hidden rounded-xl shadow-md transition duration-300">
            <img
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].title}
              className="w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end items-center p-4">
              <h3 className="text-white text-lg font-semibold mb-3">
                {carouselImages[currentIndex].title}
              </h3>
              <a
                href={carouselImages[currentIndex].src}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              >
                View Full Design
              </a>
            </div>
          </div>

          {/* Carousel Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              className="text-sm text-blue-400 hover:text-blue-600"
            >
              ◀ Previous
            </button>
            <button
              onClick={handleNext}
              className="text-sm text-blue-400 hover:text-blue-600"
            >
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function ProjectCard({ title, description, github, live }) {
  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
    >
      <h3 className="text-2xl font-semibold text-teal-300">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <div className="mt-4 space-x-4">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Visit Site
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default Projects;
