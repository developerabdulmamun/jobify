import JobCard from "@/app/components/JobCard";
import JobData from "@/data";
import Link from "next/link";
import React from "react";

const AllJobs = () => {
  return (
    <div className="mt-12 w-[80%] mx-auto mb-12">
      <div className="mb-[2rem]">
        <h2 className="font-semibold">Show Result ({JobData.length})</h2>
      </div>
      <div className="space-y-8">
        {JobData.map((job) => (
          <Link key={job.id} href={`/job/jobdetails/${job.id}`}>
            <JobCard job={job} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
