import React from "react";
import Image from "next/image";
import saqla from "../../../../public/saqla.jpg";

const saqlanganlar = () => {
  return (
    <div className="w-[966px]">
      <Image src={saqla} alt="" />
    </div>
  );
};
export default saqlanganlar;
