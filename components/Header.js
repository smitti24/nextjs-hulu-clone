import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Hearder() {
  return (
    <header className="">
      <div>
        <HeaderItem />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="/"
      />
    </header>
  );
}

export default Hearder;
