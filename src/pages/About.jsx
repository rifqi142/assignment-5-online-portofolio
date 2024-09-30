import React from "react";

const About = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      className="pb-10 xl:pb-32 mt-5"
    >
      <div class="about-me" id="about">
        <h3 class="text-2xl xl:text-4xl leading-tight font-bold text-white transition-all duration-300">
          About Me
        </h3>
        <hr class="mt-3 h-line w-28 xl:w-44" />
      </div>
      <div class="flex flex-col xl:flex-row mt-3">
        <div class="flex flex-1 items-center">
          <h1 class="text-xl md:text-3xl xl:text-5xl font-bold text-gradient">
            Short story about me and the beginning of my journey
          </h1>
        </div>
        <div class="flex-1 text-white text-lg xl:text-xl text-justify mt-7 xl:mt-0">
          <p>
            My name is Muhammad Rifqi Setiawan, but I am usually called Rifqi. I
            come from Indonesia and I am a fresh graduate majoring in
            Informatics Engineering from Budi Luhur University (UBL).
          </p>
          <p class="mt-3">
            Focusing on technologies for web development, I have experience in
            building web applications using modern technologies such as Next JS,
            Node JS, MySQL, and PostgreSQL.
          </p>
          <p class="mt-3">
            My goal is to become a Fullstack Developer and work on projects that
            challenge me to grow as a developer. I am always eager to learn new
            things and improve my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
