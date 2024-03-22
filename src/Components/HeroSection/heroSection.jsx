import HeroBgAnimation from "../HeroBgAnimation/HeroBgAnimation";
import ProfileImage from "../../assets/Images/ProfileImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/stuff";

const HeroSection = () => {
  return (
    <div id="about" className="bg-black">
      <div className="relative flex justify-center items-center py-20 sm:py-16 md:py-32 px-6 lg:mx-20">
        <div className="absolute inset-0 overflow-hidden">
          <HeroBgAnimation />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="w-full sm:w-auto order-2 sm:order-1 mb-12 sm:mb-0 text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hi, I am <br /> {Bio.name}
              </h1>
              <div className="flex items-center justify-center sm:justify-start mb-4">
                <p className="text-xl md:text-2xl lg:text-4xl font-bold text-white mr-2">
                  I am a
                </p>
                <span className="text-xl md:text-2xl lg:text-4xl font-bold text-purple-600">
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <p className="flex justify-between text-lg lg:text-xl sm:mx-8 md:mx-0 lg:mx-0   lg:mr-16 lg:mt-8 text-justify font-medium text-gray-100  mb-8 sm:mb-0">
                {Bio.description}
              </p>
              <a
                href={Bio.resume}
                target="display"
                className="relative top-12 py-4 px-10 rounded-full text-xl text-white font-bold  sm:mt-0 bg-gradient-to-br from-pink-600 to-purple-900 shadow-xl"
              >
                Check Resume
              </a>
            </div>
            <div className="w-full sm:w-auto order-1 sm:order-2 mb-12 sm:mb-0">
              <img
                src={ProfileImage}
                alt="hero-image"
                className="rounded-full border-4 border-purple-600 mx-auto sm:mx-0 md:mx-16 lg:mx-8 w-56 md:w-80 lg:w-96 sm:max-w-none sm:max-h-none sm:max-w-280 sm:max-h-280"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
