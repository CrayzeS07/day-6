import Link from "next/link";
import Profile from "../../public/profile.svg";
import img from "../../public/img.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex justify-center mt-[200px]">
      <div>
        <img src="https://i.imgflip.com/1skbom.jpg?a475800" alt="" />
      </div>
      <div className="mt-[60px]">
        <Link href={`/profile`}>
          <div className=" flex justify-center w-[151px] h-[48px] bg-[#3F51B5] cursor-pointer ml-[20px] rounded-[14px] gap-[12px]">
            <Image src={Profile} alt="Past" />
            <h3 className="mt-[11px] text-[18px] text-[#fff] font-bold">
              Кириш
            </h3>
          </div>
        </Link>
      </div>
      <div className="ml-[15px]">
        <Image src={img} alt="Past" />
      </div>
    </div>
  );
}
