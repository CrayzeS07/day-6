import React from "react";
import Image from "next/image";
import img2 from "../../../public/img2.png";
import bosh from "../../../public/bosh.svg";
import walet from "../../../public/wallet.svg";
import saqlanganlar from "../../../public/saqlamalar.svg";
import setings from "../../../public/setings.svg";
import book from "../../../public/book.svg";
import Link from "next/link";

const Userlayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mt-[52px]">
      <div className="w-[1290px] h-[211px] rounded-[10px] bg-[#F8F8F8] flex shadow-[0px_10px_13px_-7px_#000000,-1px_16px_12px_4px_rgba(0,0,0,0)]">
        <div className="w-[163px] flex justify-center h-[163px] rounded-[50%] bg-[#ffffff] mt-[24px] ml-[24px]">
          <Image
            className="rounded-[50%] bg-[#33323234]"
            src={img2}
            alt="Menu"
          />
        </div>
        <div className=" mt-[24px] ml-[33px]">
          <div>
            <h3 className="text-[30px] text-[#11142D] font-extrabold">
              Криштиану Роналду
            </h3>
          </div>
          <div className="mt-[10px]">
            <p className="text-[20px] text-[#242424] font-medium">
              +998 93 777 77 77
            </p>
          </div>
          <div className="mt-[10px]">
            <p className="text-[20px] text-[#9A9A9A] font-medium">
              ID: 0001 Баланс: 777 777 777 сўм
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-[60px] gap-[36px]">
        <div className="w-[250px] h-[300px] rounded-[10px] shadow-[0px_2px_15px_-4px_rgba(128,126,126,0.68)]">
          <Link href={`/profile`}>
            <div className="flex gap-[16px] mt-[28px] ml-[24px] hover:text-[#3F51B5] cursor-pointer">
              <div className="w-[24px]">
                <Image src={bosh} alt="Past" />
              </div>
              <div>
                <h3 className="text-[18px] font-medium">Обуна бўлиш</h3>
              </div>
            </div>
          </Link>
          <Link href={`/profile/xisob`}>
            <div className="flex gap-[16px] mt-[28px] ml-[24px] hover:text-[#3F51B5] cursor-pointer">
              <div className="w-[24px]">
                <Image src={walet} alt="Past" />
              </div>
              <div>
                <h3 className="text-[18px] font-medium">Э-Хисоб</h3>
              </div>
            </div>
          </Link>
          <Link href={`/profile/kitoblar`}>
            <div className="flex gap-[16px] mt-[28px] ml-[24px] hover:text-[#3F51B5] cursor-pointer">
              <div className="w-[24px]">
                <Image src={book} alt="Past" />
              </div>
              <div>
                <h3 className="text-[18px] font-medium">Китобларим</h3>
              </div>
            </div>
          </Link>
          <Link href={`/profile/saqlanganlar`}>
            <div className="flex gap-[16px] mt-[28px] ml-[24px] hover:text-[#3F51B5] cursor-pointer">
              <div className="w-[24px]">
                <Image src={saqlanganlar} alt="Past" />
              </div>
              <div>
                <h3 className="text-[18px] font-medium">Сақланганлар</h3>
              </div>
            </div>
          </Link>
          <Link href={`/profile/sozlamalar`}>
            <div className="flex gap-[16px] mt-[28px] ml-[24px] hover:text-[#3F51B5] cursor-pointer">
              <div className="w-[24px]">
                <Image src={setings} alt="Past" />
              </div>
              <div>
                <h3 className="text-[18px] font-medium">Созламалар</h3>
              </div>
            </div>
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Userlayout;
