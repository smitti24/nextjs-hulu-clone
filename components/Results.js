import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

export default function Results({ requests }) {
  return (
    <FlipMove className="px-5 my-10 grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {requests.map((result) => (
        <Thumbnail key={result.id} results={result} />
      ))}
    </FlipMove>
  );
}
