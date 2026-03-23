import React from "react";

const EmptyCard = ({ imgSrc = "/notes1.png", message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center">
      <img
        src={imgSrc}
        alt="No notes"
        className="w-64 sm:w-72 opacity-95 drop-shadow-md rounded-xl"
      />

      <p className="w-4/5 sm:w-1/2 text-sm sm:text-base font-medium leading-7 mt-6 text-[#1E293B]">
        <span className="block text-[#7416a3] font-semibold text-lg mb-2">
           No notes to display right now
        </span>
        <span className="text-[#b40939]">
          {message ||
            "Start by adding your first note - your ideas deserve a place to grow!"}
        </span>
      </p>

      <p className="mt-3 text-xs text-[#7f648b] ">
        Click the <span className="text-[#7d16a3] font-large leading-7 mt-6 ">'+'</span>{" "}
        button below to create a new note.
      </p>
    </div>
  );
};

export default EmptyCard;