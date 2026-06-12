import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className="min-w-[180px] transition-transform duration-300 cursor-pointer">
      <img className="rounded-lg" alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard
