import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import bg from "../assets/bg.png";

const GptSearch = () => {
  return (
    <div>
      <img src={bg} alt="Background" className="w-full h-screen object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
