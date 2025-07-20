import React from "react";
import Aos from "aos";

function Contact() {
  return (
    <section data-aos="fade-up" className="bg-gray-900 text-white py-12 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Get in Touch</h2>
        <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-xl shadow-md mb-6">
        <p className="text-center text-gray-300 mb-10">
          Whether you want to collaborate, ask a question, or just say hi — my inbox is always open!
        </p>

        <div className="flex flex-col items-center justify-center">
          
          <div className="space-y-4 text-gray-300">
            <p>
              <span className="font-semibold text-teal-300">Email:</span>{" "}
              <a
                href="mailto:chitranshp35@gmail.com"
                className="text-blue-400 hover:underline"
              >
                chitranshp35@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-teal-300">Linkedin:</span>{" "}
              <a
                href="https://www.linkedin.com/in/chitransh-prasad/"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Connect with Me!
              </a>
            </p>
            <p>
              <span className="font-semibold text-teal-300">GitHub:</span>{" "}
              <a
                href="https://github.com/Chitransh-prog"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Chitransh-prog
              </a>
            </p>
            <p>
              <span className="font-semibold text-teal-300">Blog:</span>{" "}
              <a
                href="https://www.techgenie.blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                techgenie.blog
              </a>
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;