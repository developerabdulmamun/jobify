import React from "react";
import Heading from "./Heading";
import JobCategoryCard from "./JobCategoryCard";

const JOB_CATEGORIES = [
  {
    image: "/images/icon1.png",
    category: "Finance",
    open_positions: 120,
  },
  {
    image: "/images/icon2.png",
    category: "Marketing",
    open_positions: 85,
  },
  {
    image: "/images/icon3.png",
    category: "Design",
    open_positions: 95,
  },
  {
    image: "/images/icon4.png",
    category: "Development",
    open_positions: 60,
  },
  {
    image: "/images/icon5.png",
    category: "Human Resource",
    open_positions: 40,
  },
  {
    image: "/images/icon6.png",
    category: "Automotive Jobs",
    open_positions: 110,
  },
  {
    image: "/images/icon7.png",
    category: "Customer Services",
    open_positions: 75,
  },
  {
    image: "/images/icon8.png",
    category: "Health and Care",
    open_positions: 55,
  },
  {
    image: "/images/icon9.png",
    category: "Project Management",
    open_positions: 30,
  },
];

const JobCategory = () => {
  return (
    <section className="pt-20 pb-12">
      <Heading
        mainHeading="Popular Job Categories"
        subHeading="2020 jobs live - 293 added today."
      />

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem]">
        {JOB_CATEGORIES.map((category, index) => (
          <JobCategoryCard
            key={index}
            image={category.image}
            category={category.category}
            openPosition={category.open_positions}
          />
        ))}
      </div>
    </section>
  );
};

export default JobCategory;
