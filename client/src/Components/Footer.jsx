import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 ">
      <footer className="h-full p-4 Z-10 relative bg-slate-800 text-white container mx-auto text-center">
        <div class="footer-content">
          <div class="footer-section about">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p>Empowering connections through technology, we are SKYCOL </p>
            <p>
              {" "}
              a dedicated team crafting innovative solutions to redefine your
              social experience.
            </p>
          </div>

          <div class="footer-section contact">
            <h2 className="text-xl font-semibold mt-2">Contact Us</h2>
            <p>
              Email:{" "}
              <a
                href="mailto:kartikvermaji03@gmail.com"
                className="hover:text-slate-400"
              >
                kartikvermaji03@gmail.com
              </a>
            </p>
            <p>
              Linkedin:
              <a
                href="https://www.linkedin.com/in/kartik-verma-037238259"
                className="hover:text-slate-400"
              >
                https://www.linkedin.com/in/kartik-verma-037238259
              </a>{" "}
            </p>
          </div>

          <div class="footer-section follow-us mt-3">
            <p>Stay connected us on social media:</p>
            <h2>Follow Us</h2>
            <div className="space-x-2">
              <a
                href="https://www.linkedin.com/in/jatin-097511212"
                className="hover:text-slate-400"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/Jatin69XD"
                className="hover:text-slate-400"
              >
                {" "}
                Github
              </a>
              <a
                href="mailto:jatin662413@gmail.com" 
                className="hover:text-slate-400"
              >
                Gmail
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2024 SKYCOL | All Rights Reserved</p>
          <p>Author: </p>jatin
        </div>
      </footer>
    </div>
  );
};

export default Footer;
