import React from "react";
import Socials from "../Socials";

const Footer = () => {
  return (
    <footer className="mt-24 border-t pt-6 px-4 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex flex-col items-center gap-4 text-center">
        <p>Thank you for visiting. Let's connect and build something impactful.</p>
        <Socials />
        <p className="text-xs">&copy; {new Date().getFullYear()} Vy Cao</p>
      </div>
    </footer>
  );
};

export default Footer;
