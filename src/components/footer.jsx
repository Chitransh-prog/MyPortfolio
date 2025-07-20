import React from "react";

function Footer(){
    return(
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> Designed With 💙 by Chitransh Prasad
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li className="hover:underline me-4 md:me-6">
                    Connect With Me:
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/chitransh-prasad/" className="hover:underline me-4 md:me-6">Linkedin</a>
                </li>
                <li>
                    <a href="https://github.com/Chitransh-prog" className="hover:underline me-4 md:me-6">GitHub</a>
                </li>
                <li>
                    <a href="mailto:chitranshp35@gmail.com" className="hover:underline me-4 md:me-6">Mail</a>
                </li>
            </ul>
        </footer>
);
}

export default Footer;