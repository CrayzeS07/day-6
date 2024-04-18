import React from "react";
import Image from "next/image";
import books from "../../../../public/books.jpg";

const Kitob = () => {
  return (
    <div className="w-[966px]">
      <Image src={books} alt="" />
    </div>
  );
};
export default Kitob;
