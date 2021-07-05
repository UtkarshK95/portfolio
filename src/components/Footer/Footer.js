import React from "react";
import Logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <div>
      <div class="w-full bg-cyan-700 text-white">
        <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
          <div class="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
            <div class="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
              <img width="197" height="70" src={Logo} alt="" />
            </div>
            <div class="w-full sm:w-1/5 flex flex-col space-y-4">
              <a class="opacity-60" href="/home">
                Home
              </a>
              <a class="opacity-60" href="/about">
                About
              </a>
              <a class="opacity-60" href="/projects">
                Projects
              </a>
              <a class="opacity-60" href="/contact">
                Contact
              </a>
            </div>
            {/* Link for icons needs to be inserted */}
            <div class="w-full sm:w-1/5 flex flex-col space-y-4">
              <a class="opacity-60" href="/#">
                <span>
                  <ion-icon name="mail" class="hover:text-red-600"></ion-icon>
                </span>{" "}
                Outlook
              </a>
              <a class="opacity-60" href="/#">
                <span>
                  <ion-icon
                    name="logo-twitter"
                    class="hover:text-blue-500"
                  ></ion-icon>
                </span>{" "}
                Twitter
              </a>
              <a class="opacity-60" href="/#">
                <span>
                  <ion-icon
                    name="logo-linkedin"
                    class="hover:text-blue-700"
                  ></ion-icon>
                </span>{" "}
                LinkedIn
              </a>
              <a class="opacity-60" href="/#">
                <span>
                  <ion-icon
                    name="logo-github"
                    class="hover:text-blue-500"
                  ></ion-icon>
                </span>{" "}
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
