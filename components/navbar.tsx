"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

interface Props {
  page: string;
}

const Navbar = (props: Props) => {
  const page = props.page;
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <div className="">
      <nav className="flex items-center bg-secondary justify-between py-4 px-8">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={"/images/logo.png"}
            alt="pt lika wira sakti"
            height={80}
            width={80}
            className="w-8 md:w-10"
          />
          <h1 className="font-bold text-md md:text-xl">PT Lika Wira Sakti</h1>
        </div>
        <ul className="hidden md:flex items-center gap-4 justify-center font-semibold">
          <li>
            <Link
              href={"/"}
              className={`hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-8 transition-all duration-300 ${
                page == "beranda" &&
                "text-primary underline underline-offset-8 decoration-2"
              }`}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href={"/layanan-kami"}
              className={`hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-8 transition-all duration-300 ${
                page == "layanan-kami" &&
                "text-primary underline underline-offset-8 decoration-2"
              }`}
            >
              Layanan
            </Link>
          </li>
          <li>
            <Link
              href={"/info-lowongan"}
              className={`hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-8 transition-all duration-300 ${
                page == "info-lowongan" &&
                "text-primary underline underline-offset-8 decoration-2"
              }`}
            >
              Info Lowongan
            </Link>
          </li>
          <li>
            <Link
              href={"/galeri"}
              className={`hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-8 transition-all duration-300 ${
                page == "galeri" &&
                "text-primary underline underline-offset-8 decoration-2"
              }`}
            >
              Galeri
            </Link>
          </li>
          <li>
            <Link
              href={"/tentang-kami"}
              className={`hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-8 transition-all duration-300 ${
                page == "tentang-kami" &&
                "text-primary underline underline-offset-8 decoration-2"
              }`}
            >
              Tentang
            </Link>
          </li>
        </ul>
        <Button
          variant={"outline"}
          onClick={() => setIsClick(true)}
          className="md:hidden block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-foreground"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </Button>
      </nav>
      <div
        className={`bg-secondary z-[999] h-screen w-screen px-8 fixed top-0 transition-all duration-500 ${
          isClick ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <Button
          variant={"outline"}
          className="absolute right-8 top-4"
          onClick={() => setIsClick(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-foreground"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
        <ul className="flex justify-evenly h-screen items-center flex-col">
          <li>
            <Link
              href={"/"}
              className={`font-bold transition-all duration-300 text-xl hover:text-primary ${
                page == "beranda" && "text-primary"
              }`}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href={"/layanan-kami"}
              className={`font-bold transition-all duration-300 text-xl hover:text-primary ${
                page == "layanan-kami" && "text-primary"
              }`}
            >
              Layanan
            </Link>
          </li>
          <li>
            <Link
              href={"/info-lowongan"}
              className={`font-bold transition-all duration-300 text-xl hover:text-primary ${
                page == "info-lowongan" && "text-primary"
              }`}
            >
              Info Lowongan
            </Link>
          </li>
          <li>
            <Link
              href={"/galeri"}
              className={`font-bold transition-all duration-300 text-xl hover:text-primary ${
                page == "galeri" && "text-primary"
              }`}
            >
              Galeri
            </Link>
          </li>
          <li>
            <Link
              href={"/tentang-kami"}
              className={`font-bold transition-all duration-300 text-xl hover:text-primary ${
                page == "tentang-kami" && "text-primary"
              }`}
            >
              Tentang
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
