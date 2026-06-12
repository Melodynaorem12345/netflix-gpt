import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //console.log(movies);
  return (
    <div className="mb-10">
        <h1 className="text-2xl text-white font-bold mb-4">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
