import React from "react";
import Image from "next/image";
import user from "../../../../public/user.jpg";
import saqlash from "../../../../public/saqlash.jpg";

const sozlamalar = () => {
  return (
    <div className="w-[966px] h-[463px] rounded-[] shadow-[0px_2px_15px_-4px_rgba(128,126,126,0.68)]">
      <div className="pt-[32px] pl-[32px]">
        <div>
          <h2 className="text-[30px] text-[#11142D] font-extrabold">
            Созламалар
          </h2>
        </div>
        <div className="flex mt-[50px]">
          <div className="w-[64px]">
            <Image src={user} alt="" />
          </div>
          <div>
            <h3 className="mt-[20px] ml-[22px] text-[#3F51B5] font-medium">
              Сурат юклаш
            </h3>
          </div>
        </div>
        <div className="w-[343px] mt-[49px]">
          <Image src={saqlash} alt="" />
        </div>
      </div>
    </div>
  );
};
export default sozlamalar;
