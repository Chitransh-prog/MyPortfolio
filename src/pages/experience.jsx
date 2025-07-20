import React from "react";
import Aos from "aos";

function Experience() {
  return (
    <section data-aos="fade-up" className="bg-gray-900 text-white py-12 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">Experience</h2>

        {/* TechVichaar */}
        <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-xl shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-teal-300">Content Writer & Researcher</h3>
          <p className="text-sm text-gray-400">TechVichaar • New Delhi, India</p>
          <p className="text-sm text-gray-500 mb-3">Jan 2025 – Mar 2025</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Researched and wrote insightful content on tech topics.</li>
            <li>Collaborated with editors to publish polished blog articles.</li>
          </ul>
        </div>

        {/* Samvaad */}
        <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-xl shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-teal-300">Content Curator</h3>
          <p className="text-sm text-gray-400">Samvaad • New Delhi, India</p>
          <p className="text-sm text-gray-500 mb-3">Sep 2024 – Jan 2025</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Wrote detailed reports for various college events and activities.</li>
            <li>Created promotional content to enhance event visibility and engagement.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
