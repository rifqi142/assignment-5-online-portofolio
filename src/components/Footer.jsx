import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="pb-10 w-full">
        <div class="footer-content flex flex-col-reverse sm:flex-row justify-between items-center gap-5">
          <div class="text-white">
            <p class="text-sm text-center sm:text-left">
              Developed using
              <a href="" class="text-blue-600">
                &nbsp;React JS & Vite and Tailwind CSS.
              </a>
            </p>
            <p class="text-sm mt-3 text-center sm:text-left">
              Code licensed under <bold>MIT License</bold>
            </p>
            <p class="text-sm mt-3 text-center sm:text-left">
              Made with <bold>❤️</bold> by Muhammad Rifqi Setiawan © 2024.
              <span class="text-[#97a7b7]">&nbsp;version 1.0</span>
            </p>
          </div>

          <div class="mt-7 sm:mt-0 gap-5 grid grid-cols-4 lg:grid-cols-2 justify-center items-center">
            <Link
              to="mailto:muhrifqis100@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="group"
            >
              <div class="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center transition duration-300 ease-in-out group-hover:bg-gray-600">
                <img
                  src="assets/icon-email.svg"
                  alt="email"
                  class="cursor-pointer transition duration-300 ease-in-out group-hover:brightness-125"
                />
              </div>
            </Link>

            <Link
              to="https://instagram.com/rifqi.setiawan18"
              target="_blank"
              rel="noopener noreferrer"
              class="group"
            >
              <div class="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center transition duration-300 ease-in-out group-hover:bg-pink-500">
                <img
                  src="assets/icon-instagram.svg"
                  alt="instagram"
                  class="cursor-pointer transition duration-300 ease-in-out group-hover:brightness-125"
                />
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/muhrifqis/"
              target="_blank"
              rel="noopener noreferrer"
              class="group"
            >
              <div class="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center transition duration-300 ease-in-out group-hover:bg-blue-700">
                <img
                  src="assets/icon-linkedin.svg"
                  alt="linkedin"
                  class="cursor-pointer transition duration-300 ease-in-out group-hover:brightness-125"
                />
              </div>
            </Link>

            <Link
              href="https://github.com/rifqi142"
              target="_blank"
              rel="noopener noreferrer"
              class="group"
            >
              <div class="w-7 h-6 bg-gray-800 rounded-full flex items-center justify-center transition duration-300 ease-in-out group-hover:bg-gray-700">
                <img
                  src="assets/icon-github-white.svg"
                  alt="github"
                  class="cursor-pointer transition duration-300 ease-in-out group-hover:brightness-125"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
