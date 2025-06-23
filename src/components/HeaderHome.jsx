import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4 sm:space-y-6">
      <div className="space-y-1 sm:space-y-2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Hi</h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
          I'm Mumun,
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-300">
          Backend Developer
        </h3>
      </div>

      <nav className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
        <Link
          to="/about"
          className="text-base sm:text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-base sm:text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors"
        >
          Projects
        </Link>
        <Link
          to="/skills"
          className="text-base sm:text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors"
        >
          Skills
        </Link>
        <Link
          to="/contact"
          className="text-base sm:text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default HeaderHome;
