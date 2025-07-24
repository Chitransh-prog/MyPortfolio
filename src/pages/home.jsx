import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="home"
      data-aos="fade-up"
      className="bg-gray-900 min-h-screen flex items-center justify-center px-4"
    >
      <div className="flex flex-col items-center space-y-6 text-center max-w-3xl w-full">
        
        <img className="h-20 md:h-24" src="/logo.png" alt="Logo" />

        {/* Typing effect + waving hand */}
        <div className="text-white text-3xl md:text-4xl font-bold whitespace-nowrap overflow-hidden border-r-4 border-white pr-3 animate-typing">
          Hey! <br/> I'm Chitransh Prasad <br/>
          <span className="inline-block ml-2 animate-waving-hand">👋</span>
        </div>

        <p className="text-white text-base md:text-lg max-w-xl">
          Turning ideas into code — building tools, solving problems, and loving the journey.
        </p>

        <a href="/myResume.pdf" download>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg flex items-center space-x-2 transition duration-300 shadow-md hover:shadow-lg">
            <svg
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Resume</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
