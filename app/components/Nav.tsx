import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/public/images/logo.png";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import User from "./User";

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="h-[10vh] overflow-hidden shadow-md">
      <div className="w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
          <Link href={"/"}>
            <Image
              src={logoImage}
              alt="logo"
              width={250}
              height={250}
              className="w-[100%] h-[100%]"
            />
          </Link>
        </div>

        {session ? (
          <div className="flex items-center space-x-4">
            <User session={session} />
            <button className="px-4 py-3 text-[14px] sm:text-[16px] bg-orange-600 font-semibold text-white rounded-lg hover:bg-orange-800 transition-all duration-300">
              Post a Job
            </button>
          </div>
        ) : (
          <Link href={"/signup"}>
            <button className="px-4 py-3 text-[14px] sm:text-[16px]  bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
