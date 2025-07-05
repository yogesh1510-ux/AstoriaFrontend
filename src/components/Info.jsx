import React from "react";

const Info = ({ title, description }) => {
  return (
    <div className="px-4 md:px-8 max-w-6xl mx-auto mb-10 mb-20">
      <div className="hidden md:flex h-96 items-center justify-center">
        <div className="w-1/3 flex justify-end pr-6">
          <h1 className="text-5xl font-bold text-[#bb8c2e] text-left whitespace-pre-line">
            {title}
          </h1>
        </div>
        <div className="w-2/3 relative">
          <div className="absolute top-6 left-6 h-0.5 w-32 bg-[#bb8c2e] transform -translate-x-28" />
          <p className="text-gray-300 text-lg mt-6 pl-6 absolute top-9">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:hidden">
        <h1 className="text-3xl font-bold text-[#bb8c2e] whitespace-pre-line leading-snug mb-4">
          {title}
        </h1>
        <div className="relative mb-2">
          <div className="h-0.5 w-24 bg-[#bb8c2e] mb-4" />
          <p className="text-gray-300 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
