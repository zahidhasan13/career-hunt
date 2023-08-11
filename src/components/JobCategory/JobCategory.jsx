import React from "react";
import Category from "../Category/Category";

const JobCategory = ({ loadedJobCategory }) => {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-medium text-[#191919]">
            Job Category List
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="lg:flex lg:justify-between">
            {
                loadedJobCategory.map(category => <Category 
                    key={category.id} 
                    category={category}
                    ></Category>)
            }
        </div>
      </div>
    </section>
  );
};

export default JobCategory;
