import React from "react";

const Project = () => {
  return (
    <div class="mt-5 pb-12 w-full transition-all duration-300" id="project">
      <div class="project">
        <h3
          class="text-4xl leading-tight font-bold text-white"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Project that i
          <br />
          <span class="text-gradient">has been done</span>
        </h3>
        <hr class="mt-3 h-line w-60" />

        <div
          class="mt-5 flex flex-col lg:flex-row gap-4 lg:gap-10"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div class="flex flex-1">
            <img
              src="assets/project-masjid.png"
              alt="project-masjid"
              class="w-full border-2 border-white"
            />
          </div>
          <div class="flex flex-1">
            <div class="flex flex-col text-white justify-center">
              <h4 class="text-lg lg:text-xl subtitle-color">Web Development</h4>
              <h2 class="text-2xl lg:text-3xl mt-3 font-bold">
                Masjid Nuruddin Landingpage
              </h2>

              <p class="mt-3 text-justify text-base lg:text-lg subtitle-color">
                Masjid Nuruddin is a landing page for a mosque in Indonesia.
                This project was built using React JS, Tailwind CSS, and
                deployed on Vercel. This website can read the Quran, listen the
                Quran, and see the schedule of the mosque.
              </p>
            </div>
          </div>
        </div>

        <div
          class="mt-5 lg:mt-14 flex flex-col lg:flex-row gap-4 lg:gap-10"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div class="flex flex-1">
            <img
              src="assets/project-store.png"
              alt="project-store"
              class="w-full border-2 border-white"
            />
          </div>
          <div class="flex flex-1">
            <div class="flex flex-col text-white justify-center">
              <h4 class="text-lg lg:text-xl subtitle-color">Web Development</h4>
              <h2 class="text-2xl lg:text-3xl mt-3 font-bold">Store App</h2>

              <p class="mt-3 text-justify text-base lg:text-lg subtitle-color">
                Store App is a web application for managing products in a store.
                This project was built using Next JS, Tailwind CSS, Zustand,
                Prisma and deployed on Vercel. This website can add, edit,
                delete, and search for products.
              </p>
            </div>
          </div>
        </div>

        <div
          class="mt-5 lg:mt-14 flex flex-col lg:flex-row gap-4 lg:gap-10"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div class="flex flex-1">
            <img
              src="assets/project-anime.png"
              alt="project-anime"
              class="w-full border-2 border-white"
            />
          </div>
          <div class="flex flex-1">
            <div class="flex flex-col text-white justify-center">
              <h4 class="text-lg lg:text-xl subtitle-color">Web Development</h4>
              <h2 class="text-2xl lg:text-3xl mt-3 font-bold">
                Rifqi AnimeList
              </h2>

              <p class="mt-3 text-justify text-base lg:text-lg subtitle-color">
                Rifqi AnimeList is a web application for searching anime, see
                the details of the anime, add comment and rating. This project
                was built using Next JS, Tailwind CSS, and deployed on Vercel.
                This website can search for anime, see the details of the anime,
                add comment and rating.
              </p>
            </div>
          </div>
        </div>

        <div
          class="mt-5 lg:mt-14 flex flex-col lg:flex-row gap-4 lg:gap-10"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div class="flex flex-1">
            <img
              src="assets/project-mygram.png"
              alt="project-anime"
              class="w-full border-2 border-white"
            />
          </div>
          <div class="flex flex-1">
            <div class="flex flex-col text-white justify-center">
              <h4 class="text-lg lg:text-xl">Backend Development</h4>
              <h2 class="text-2xl lg:text-3xl mt-3 font-bold">
                Project MyGram API
              </h2>

              <p class="mt-3 text-justify text-base lg:text-lg">
                Project MyGram API is a backend project for a social media
                application. This project was built using Golang, Gin, Gorm,
                PostgreSQL, and Postman. This project can add, edit, delete, and
                search for users and posts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
