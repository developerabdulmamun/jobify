import ApplyButton from "@/app/components/ApplyButton";
import JobCard from "@/app/components/JobCard";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const JobDetails = async ({ params }: { params: { id: string } }) => {
  const singleJob = JobData.find((job) => job.id.toString() === params.id);
  const session = await getServerSession(authOptions);

  return (
    <div className="mt-20 mb-12">
      <div className="block md:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7]">
          <JobCard job={singleJob!} />
        </div>

        {session ? (
          <ApplyButton />
        ) : (
          <Link href={"/signup"}>
            <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white">
              Sign Up To Apply
            </button>
          </Link>
        )}
      </div>

      <div className="mt-16 w-[80%] mx-auto">
        <h2 className="text-[20px] font-semibold">Job Description</h2>
        <p className="mt-4 text-black text-opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          libero obcaecati. Molestias sequi amet ex placeat incidunt quam
          recusandae cumque cum blanditiis delectus, hic, perspiciatis fuga
          aspernatur sint, nesciunt tenetur.
        </p>
        <h2 className="text-[20px] mt-8 font-semibold">Key Responsibilities</h2>
        <p className="mt-4 text-black text-opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          libero obcaecati. Molestias sequi amet ex placeat incidunt quam
          recusandae cumque cum blanditiis delectus, hic, perspiciatis fuga
          aspernatur sint, nesciunt tenetur. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Minima quas animi qui similique
          deleniti, veritatis vero nemo impedit odit maiores.
        </p>
        <h2 className="text-[20px] mt-8 font-semibold">Skills</h2>
        <ul className="mt-4">
          <li className="mt-4 text-black text-opacity-70">React JS</li>
          <li className="mt-4 text-black text-opacity-70">Next JS</li>
          <li className="mt-4 text-black text-opacity-70">Tailwind CSS</li>
          <li className="mt-4 text-black text-opacity-70">TypeScript</li>
          <li className="mt-4 text-black text-opacity-70">Next Auth</li>
        </ul>

        <h2 className="text-[20px] mt-8 font-semibold">Related Job</h2>
        <div className="mt-4">
          {JobData.slice(0, 4).map((job) => (
            <Link
              href={`/job/jobdetails/${job.id}`}
              className="space-y-6"
              key={job.id}
            >
              <JobCard job={job} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
