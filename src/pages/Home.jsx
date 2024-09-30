import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      class="mt-5 xl:mt-32 pb-10 xl:pb-48"
      id="home"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div class="text-white flex flex-col-reverse lg:flex-row gap-5">
        <div class="basis-10/12">
          <div>
            <h3 class="text-lg xl:text-4xl leading-tight font-bold">
              Hello,{" "}
              <span className="font-bold text-gradient">
                I'm Muhammad Rifqi Setiawan
              </span>
            </h3>
            <p class="text-lg xl:text-2xl font-bold mt-3">
              Interest in{" "}
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  500,
                  "Web Developer",
                  500,
                  "Programmer",
                  500,
                ]}
                repeat={Infinity}
                className="text-gradient"
              />
            </p>
            <p class="text-base xl:text-xl mt-5 text-justify">
              an Fullstack Developer, I'm passionate about technology and
              programming. I have experience in building web applications using
              modern technologies. I'm always eager to learn new things and
              improve my skills. I'm a hard worker, a fast learner, and a team
              player. I'm looking for opportunities to work on challenging
              projects and grow as a developer.
            </p>
          </div>
          <div class="mt-5 lg:mt-10 flex flex-row gap-5">
            <div class="bg-[#3162ae] text-white py-2 px-2 rounded-md flex items-center gap-2 text-base xl:text-lg w-max hover:bg-[#2a5298]">
              <img
                src="assets/icon-whatsapp.svg"
                alt="WhatsApp icon"
                class="w-6 h-6 xl:w-8 xl:h-8"
              />
              <Link
                to="https://wa.me/6281213881792"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1"
              >
                Contact Me!
              </Link>
            </div>
            <div class="bg-white text-[#3162ae] py-2 px-2 rounded-md flex items-center gap-2 text-base xl:text-lg w-max hover:bg-[#d6e7ff]">
              <img
                src="assets/icon-download.svg"
                alt="Download icon"
                class="w-5 h-5 xl:h-6 xl:w-6"
              />
              <Link
                to="/assets/summary_rifqi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div class="flex basis-1/4 justify-center items-center text-center">
          <span class="relative flex justify-center items-center w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-72 xl:h-72">
            <img
              src="assets/profile-emoji.png"
              class="w-full h-full object-contain rounded-full"
              alt="Profile Emoji"
            />
            <span class="absolute inset-0 border-4 border-gray-800 rounded-full"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
