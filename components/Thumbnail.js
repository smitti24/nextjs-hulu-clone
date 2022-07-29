import { forwardRef } from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

/* eslint-disable react/display-name */
const Thumbnail = forwardRef(({ results }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={`${BASE_URL}${results.backdrop_path || results.poster_path}`}
        alt={results.title}
        height={1080}
        width={1920}
        className="max-w-[1920px] max-h-[1080px]"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{results.overview}</p>
        <h2 className="text-2xl mt-1 text-white transition-all duration-100 ease-in group-hover:font-bold">
          {results.title || results.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {results.media_type && `${results.media_type} •`}{" "}
          {results.release_date || results.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {results.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
