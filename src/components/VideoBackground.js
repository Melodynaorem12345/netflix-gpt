import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);
    //console.log("Trailer Video:", trailerVideo?.key);
    useMovieTrailer(movieId);
  return (
    <div className="w-full">
      {trailerVideo && (
        <iframe 
        className="w-full aspect-video" 
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player" 
        allow="autoplay; encrypted-media" 
        referrerPolicy="strict-origin-when-cross-origin" 
        ></iframe>
        )}
    </div>
  );
};

export default VideoBackground;
