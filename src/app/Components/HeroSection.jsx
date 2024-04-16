import React from "react";

const HeroSection = () => {
  return (
    <div id="Home">
      <section className=" h-screen  bg-cover bg-center  text-white " style={{backgroundImage: 'url("/img/bg.jpg")'}}>
        <div className="container mx-auto px-4 pt-32  text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Unlock Your Career in Japan
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Explore Exciting Work Opportunities in Japan
          </p>
          <a
            href="#job-openings"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
          >
            Browse Job Openings
          </a>
        </div>
       
      </section>
    </div>
  );
};

export default HeroSection;
