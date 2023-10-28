import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-secondary px-8 py-14 flex items-center justify-centers"
    >
      <div>
        <h1 className="font-bold text-3xl">
          Mitra Keamanan&nbsp;
          <span className="text-primary">Andalan Di Tangerang</span>
        </h1>
        <p className="text-sm max-w-sm mt-6 mb-5 text-muted-foreground">
          Dengan pelayanan prima dan berkualitas yang bertujuan untuk
          menciptakan keamanan dan kenyamanan di suatu lingkungan serta untuk
          mencegah kejadian yang tidak dinginkan seperti pencurian, perampokan,
          dan tindakan pelanggaran hukum lainnya.
        </p>
        <div className="flex items-center gap-4">
          <Button className="font-semibold" asChild>
            <Link href={"/"}>Hubungi Kami</Link>
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
        className="w-[50%]"
      />
    </section>
  );
};

export default HeroSection;
