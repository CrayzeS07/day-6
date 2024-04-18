import React from "react";
import Banner from "../../../public/Banner.jpg";
import Card from "../../../public/Card.jpg";
import Image from "next/image";

const profile = () => {
  return (
    <div>
      <div className="w-[966px]">
        <Image src={Banner} alt="" />
      </div>
      <div className="w-[966px]">
        <Image src={Card} alt="" />
      </div>
    </div>
  );
};
export default profile;
