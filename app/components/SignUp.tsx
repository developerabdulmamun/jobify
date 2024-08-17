import Image from "next/image";
import React from "react";
import ImageUrl from "@/public/images/chair.jpg";

const SignUp = () => {
  return (
    <div className="overflow-hidden h-[84vh] flex flex-col items-center justify-center">
      {/* Image */}
      <Image src={ImageUrl} alt="image" width={400} height={200} />

      {/* SignUp button */}
      <button className="px-12 py-3 mt-[2rem] bg-purple-700 hover:bg-purple-900 transition-all duration-300 rounded-lg text-white">
        Sign Up Now
      </button>
    </div>
  );
};

export default SignUp;
