import React from "react";
import Image from "next/image";
import Logo from "../../../../public/Logo.svg";
import Menu from "../../../../public/menu.svg";
import past from "../../../../public/past.svg";
import Uzb from "../../../../public/uzb.svg";
import Search from "../../../../public/search.svg";
import Profile from "../../../../public/profile.svg";

export const Header = () => {
  return (
    <div className="w-[1440px] mt-[22px]">
      <div className="flex">
        <div className="pl-[75px]">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="ml-[46px] flex w-[180px] border justify-center border-[#E1E1E1] rounded-[16px_0px_0px_16px] gap-[12px]">
          <div className="mt-[9px]">
            <Image src={Menu} alt="Menu" />
          </div>
          <div className="mt-[9px]">
            <h3 className="text-[#3F51B5] font-bold">Рукнлар</h3>
          </div>
          <div className="mt-[14px]">
            <Image src={past} alt="Past" />
          </div>
        </div>
        <div className="flex ml-[4px]">
          <input
            className="w-[485px] h-[48px] bg-[#F8F8F8] outline-none pl-[29px] border border-[#E1E1E1]"
            type="search"
            placeholder="Қидириш"
          />
          <div className="w-[70px] h-[48px] bg-[#F8F8F8] rounded-[0px_16px_16px_0px] justify-center flex cursor-pointer border border-[#E1E1E1]">
            <Image src={Search} alt="Past" />
          </div>
        </div>
        <div className="w-[105px] h-[48px] bg-[#EEF4FF] rounded-[14px] cursor-pointer ml-[64px] flex justify-center gap-[9px]">
          <div className="mt-[16px]">
            <Image src={Uzb} alt="Past" />
          </div>
          <div className="mt-[12px]">
            <h3 className=" text-[#3F51B5] font-bold">Ўз</h3>
          </div>
          <div className="mt-[16px]">
            <Image src={past} alt="Past" />
          </div>
        </div>
        <div className=" flex justify-center w-[151px] h-[48px] bg-[#3F51B5] cursor-pointer ml-[20px] rounded-[14px] gap-[12px]">
          <Image src={Profile} alt="Past" />
          <h3 className="mt-[11px] text-[18px] text-[#fff] font-bold">Кириш</h3>
        </div>
      </div>
    </div>
  );
};
