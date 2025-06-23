import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "munir83577@gmail.com",
      link: "mailto:munir83577@gmail.com",
    },
    {
      label: "No",
      value: "+82 812-3456-7890",
      link: "tel:+8281234567890",
    },
    {
      label: "Linkedin",
      value: "linkedin.com/in/muhammadshirojulmunir",
      link: "https://linkedin.com/in/muhammadshirojulmunir",
    },
    {
      label: "Github",
      value: "github.com/username",
      link: "https://github.com/username",
    },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden flex items-center justify-center">
      {/* Back Button */}
      <Link to="/" className="fixed top-4 right-4 md:top-8 md:right-8 z-50 p-2">
        <div className="relative w-5 h-5 md:w-6 md:h-8">
          <div className="absolute w-1.5 md:w-2 h-5 md:h-6 bg-white transform rotate-45 origin-bottom-left"></div>
          <div className="absolute w-1.5 md:w-2 h-5 md:h-6 bg-white transform -rotate-45 origin-top-left"></div>
        </div>
      </Link>

      <div className="relative z-10 w-full px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-12">About Me</h1>
          <div className="w-full max-w-3xl space-y-8 mx-auto mt-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between sm:justify-between gap-4 w-full"
              >
                <span className="text-xl sm:text-2xl font-medium w-40 text-center">
                  {item.label}
                </span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-2xl hover:text-gray-300 transition-colors text-center"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
