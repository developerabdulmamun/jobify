import { Job } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiMoney } from "react-icons/bi";
import { FaMapLocation, FaRegBookmark } from "react-icons/fa6";

interface Props {
  job: Job;
}

const JobCard = ({ job }: Props) => {
  const { id, title, image, salary, location, jobtype } = job;

  return (
    <div className="p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
      <div className="flex items-center space-x-6">
        {/* image */}
        <Image src={image} alt={title} width={50} height={50} />

        {/* content */}
        <div>
          <h2 className="text-[17px] font-semibold mb-[0.4rem]">{title}</h2>
          <div className="flex items-center space-x-4 md:space-x-10">
            {/* location */}
            <div className="flex items-center space-x-2">
              <FaMapLocation className="w-[0.8rem] h-[0.8rem] text-pink-700" />
              <p className="text-[14px] text-black font-semibold text-opacity-60">
                {location}
              </p>
            </div>

            {/* Salary */}
            <div className="flex items-center space-x-2">
              <BiMoney className="w-[0.8rem] h-[0.8rem] text-pink-700" />
              <p className="text-[14px] text-black font-semibold text-opacity-60">
                {salary}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 mt-[1rem]">
            <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-green-400">
              {jobtype}
            </div>
            <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-red-400">
              Private
            </div>
            <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-blue-400">
              Urgent
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[1rem] right-[1rem]">
        <FaRegBookmark className="w-[1rem] h-[1rem]" />
      </div>
    </div>
  );
};

export default JobCard;
