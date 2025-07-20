import Aos from "aos";
import React from "react";

function Skills() {
  return (
    <section data-aos="fade-up" className="bg-gray-900 text-white py-12 px-6" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-blue-400 mb-8">My Skills</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-white font-medium text-left">
          
          {/* Core Tech Stack */}
          <div data-aos="zoom-in" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">💻 Core Tech Stack</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>PHP</li>
              <li>React.js</li>
              <li>Flask</li>
              <li>FastAPI</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Tools & Platforms */}
          <div data-aos="zoom-in" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">🛠️ Tools & Platforms</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Firebase</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Git & GitHub</li>
              <li>Bootstrap</li>
              <li>Linux</li>
            </ul>
          </div>

          {/* Programming & CS */}
          <div data-aos="zoom-in" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">📚 Programming & Computer Science</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>C Programming Language</li>
              <li>Data Structures & Algorithms (DSA)</li>
              <li>REST APIs</li>
              <li>Problem Solving</li>
              <li>Scripting</li>
              <li>Operating Systems</li>
              <li>SDLC</li>
              <li>Software Testing</li>
            </ul>
          </div>

          {/* UI/UX & Design */}
          <div data-aos="zoom-in" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">🎨 UI/UX & Design</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>UI/UX Design</li>
              <li>Figma</li>
            </ul>
          </div>

          {/* Data & AI Tools */}
          <div data-aos="zoom-in" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">📊 Data & AI Tools</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Jupyter Notebook</li>
              <li>Google Colab</li>
              <li>NumPy</li>
              <li>Pandas</li>
              <li>OpenCV</li>
              <li>Pytesseract</li>
              <li>Tesseract</li>
              <li>Pytube</li>
              <li>AI Agents / Automation (Beginner)</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div data-aos="zoom-in" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">🤝 Soft Skills</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Leadership</li>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Collaboration</li>
              <li>Time Management</li>
              <li>Critical Thinking</li>
              <li>Problem Solving</li>
              <li>Analytical Thinking</li>
              <li>Creativity</li>
              <li>Decision-Making</li>
              <li>Adaptability</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;