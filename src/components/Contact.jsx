import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
      </div>
      <div className="max-w-[800px] mx-auto mt-6 bg-[#161616] rounded-xl p-10">
        <form action="https://getform.io/f/nadolrmb" method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
            <div>
              <input type="text" name="name" placeholder="Your Name" className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
            </div>
            <div>
              <input type="email" name="email" placeholder="Your Email" className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
            </div>
            <div className="sm:col-span-2">
              <textarea name="message" placeholder="Your Message" className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" rows="4"></textarea>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md">
                Send
              </button>
            </div>
          </div>
        </form>
        <div className="mt-10 text-center">
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/sukhvirgill-/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/Sukhvirr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="mailto:sukhi69@hotmail.com" className="text-gray-400 hover:text-white transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
