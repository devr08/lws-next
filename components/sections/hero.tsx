import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-secondary px-8 py-5">
      <div className="flex md:flex-row flex-col items-center justify-between">
        <div>
          <h1 className="font-bold text-4xl max-w-xl">
            <span className="text-primary">Mitra Keamanan</span>&nbsp; Andalan
            Di Tangerang
          </h1>
          <p className=" max-w-md my-8 leading-relaxed text-muted-foreground">
            Dengan pelayanan prima dan berkualitas yang bertujuan untuk
            menciptakan keamanan dan kenyamanan di suatu lingkungan serta untuk
            mencegah kejadian yang tidak dinginkan seperti pencurian,
            perampokan, dan tindakan pelanggaran hukum lainnya.
          </p>
          <div className="flex items-center gap-4">
            <Button className="font-semibold" asChild>
              <Link href={"https://wa.me/6281388029616"}>Hubungi Kami</Link>
            </Button>
            <Button className="font-semibold" variant={"outline"} asChild>
              <Link href={"/tentang-kami"}>Tentang Kami</Link>
            </Button>
          </div>
        </div>
        <Image
          src={"/images/img-1.png"}
          alt="pt lika wira sakti"
          height={600}
          width={1600}
          className="w-[50%] md:block hidden shadow-lg rounded-lg"
        />
      </div>
      <h2 className="font-bold text-xs md:text-sm text-center text-muted-foreground pt-10 mb-4">
        Dipercaya Oleh 10+ Perusahaan Seperti...
      </h2>
      <div>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <Image
            src={"/images/c-1.png"}
            height={600}
            width={1600}
            className="w-28 md:w-52 transition-all duration-500 grayscale hover:filter-none hover:-translate-y-3"
            alt="client pt lika wira sakti"
          />
          <Image
            src={"/images/c-2.png"}
            height={600}
            width={1600}
            className="w-28 md:w-52 transition-all duration-500 grayscale hover:filter-none hover:-translate-y-3"
            alt="client pt lika wira sakti"
          />
          <Image
            src={"/images/c-3.png"}
            height={600}
            width={1600}
            className="w-28 md:w-52 transition-all duration-500 grayscale hover:filter-none hover:-translate-y-3"
            alt="client pt lika wira sakti"
          />
          <Image
            src={"/images/c-4.png"}
            height={600}
            width={1600}
            className="w-28 md:w-52 transition-all duration-500 grayscale hover:filter-none hover:-translate-y-3"
            alt="client pt lika wira sakti"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
