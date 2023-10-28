import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <header>
        <Navbar page={"beranda"} />
      </header>
      <main>
        <HeroSection />
      </main>
    </>
  );
}
