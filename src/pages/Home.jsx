import React from "react";
import BlobImage from "../assets/blob_homepage.svg";
import HeaderHome from "../components/HeaderHome";

const Home = () => {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden flex items-center justify-center">
      {/* Blob Background */}
      <img
        src={BlobImage}
        alt="Background Blob"
        className="absolute top-0 right-0 w-full sm:w-2/3 md:w-1/2 opacity-70 md:opacity-100 z-0"
      />

      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl gap-6 sm:gap-8 md:gap-12">
          <div className="w-3/4 sm:w-2/3 md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="w-full max-w-md group">
              <img
                className="w-full h-auto rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition-all duration-300 group-hover:shadow-[0_0_30px_2px_rgba(255,255,255,0.5)]"
                src="/src/assets/foto.svg"
                alt="Profile"
              />
            </div>
          </div>

          <HeaderHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
