import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/stuff";

const Footer = () => {
  return (
    <div className="w-full py-8 flex justify-center">
      <footer className="w-full max-w-2xl flex flex-col items-center gap-4 px-4 text-gray-700">
        <h1 className="font-bold text-3xl text-white">Tushar Sharma</h1>
        <nav className="w-full max-w-md flex flex-row gap-6 lg:gap-8 justify-center">
          <a href="#about" className="text-sm lg:text-base hover:text-white">
            About
          </a>
          <a href="#skills" className="text-sm lg:text-base hover:text-white">
            Skills
          </a>
          <a href="#projects" className="text-sm lg:text-base hover:text-white">
            Projects
          </a>
          <a
            href="#education"
            className="text-sm lg:text-base hover:text-white"
          >
            Education
          </a>
          <a href="#contact" className="text-sm lg:text-base hover:text-white">
            Contact
          </a>
        </nav>
        <div className="flex gap-4">
          <a
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 
          hover:text-white"
          >
            <GitHubIcon />
          </a>
          <a
            href={Bio.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-white"
          >
            <TwitterIcon />
          </a>
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-white"
          >
            <LinkedInIcon />
          </a>
          <a
            href={Bio.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-white"
          >
            <InstagramIcon />
          </a>
        </div>
        <p className="text-xs text-gray-500">
          &copy; 2024 Tushar Sharma. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
