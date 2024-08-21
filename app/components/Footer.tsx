import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pt-[5rem] pb-[3rem] bg-[#111111]">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        <div>
          <h2 className="text-[24px] text-white mb-[1rem] font-bold uppercase">
            Jobify
          </h2>
          <p className="text-[14px] text-white text-opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            ipsam laborum qui maiores distinctio mollitia voluptate modi
            blanditiis sit voluptatum!
          </p>
          {/* social icons */}
          <div className="mt-[1.5rem] flex items-center space-x-3">
            <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col">
              <FaFacebookF className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col">
              <FaTwitter className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
              <FaYoutube className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            About Us
          </h3>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            Job
          </Link>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            Privacy
          </Link>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            Policy
          </Link>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            Application
          </Link>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            Candidates
          </Link>
        </div>

        <div>
          <h3 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Quick Link
          </h3>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            All Jobs
          </Link>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            Job Details
          </Link>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            How to Apply
          </Link>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            Resume
          </Link>
        </div>

        <div>
          <h3 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Get in Touch
          </h3>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            +880 1904363234
          </Link>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            example@gmail.com
          </Link>
          <Link
            href={"#"}
            className="text-[15px] w-fit text-white hover:text-yellow-300 text-opacity-30 mb-[0.7rem] block"
          >
            Dhaka, Bangladesh
          </Link>
        </div>
      </div>

      <h4 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50">
        {" "}
        &copy; Copyright - 2024
      </h4>
    </footer>
  );
};

export default Footer;
