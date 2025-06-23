import React from "react";
import BlobAbout from "../assets/blob_about.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden flex items-center justify-center">
       {/* Back Button */}
           <Link to="/" className="fixed top-4 right-4 md:top-8 md:right-8 z-50 p-2">
             <div className="relative w-5 h-5 md:w-6 md:h-8">
               <div className="absolute w-1.5 md:w-2 h-5 md:h-6 bg-white transform rotate-45 origin-bottom-left"></div>
               <div className="absolute w-1.5 md:w-2 h-5 md:h-6 bg-white transform -rotate-45 origin-top-left"></div>
             </div>
           </Link>

      {/* Blob Background */}
      <img
        src={BlobAbout}
        alt="Background Blob"
        className="absolute top-0 left-0 w-2/3 md:w-1/2 z-0"
      />

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl font-bold mb-12">About Me</h1>

          <div className="text-lg md:text-xl leading-relaxed space-y-6 max-w-4xl">
            <p>
              Hi There! I'm Muhammad Shirojul Munir, A Passionate And Driven
              Information Technology Student At Universitas Brawijaya, Currently
              Pursuing My D3 Degree In Information Technology.
            </p>

            <p>
              Originally From Kediri, I Have Always Had A Keen Interest In
              Technology And Its Potential To Shape The Future. I'm Especially
              Passionate About Backend Development And Internet Of Things (IoT),
              Where I Get To Explore The Endless Possibilities Of How Technology
              Can Integrate Into Our Daily Lives And Make The World Smarter And
              More Efficient.
            </p>

            <p>
              I Am Constantly Learning, Improving, And Adapting To New
              Challenges, As I Believe That Both Hard Skills And Soft Skills Are
              Essential For Success In The Tech Industry.
            </p>

            <p>
              I'm Always Ready To Collaborate, Learn, And Grow As I Continue My
              Journey In The Tech World. Let's Connect And Make Something
              Amazing Together! ✨✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
