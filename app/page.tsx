import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/sections/hero";
import SectionAbout from "@/components/sections/about";
import SectionKeunggulanKami from "@/components/sections/memilihkami";
import Footer from "@/components/footer";
import ClickToWhatsapp from "@/components/whatsapp";

export default function Home() {
  return (
    <>
      <header>
        <Navbar page={"beranda"} />
      </header>
      <main>
        <HeroSection />
        <SectionAbout />
        <SectionKeunggulanKami />
        <ClickToWhatsapp />
      </main>
      <Footer />
    </>
  );
}
