import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const SectionAbout = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row-reverse items-center justify-beetween py-6 gap-6 px-8">
      <div>
        <h1 className="text-4xl font-bold">
          Mengenal Singkat <span className="text-primary">Tentang Kami</span>
        </h1>
        <p className="text-muted-foreground mt-6 mb-2">
          PT Lika Wira sakti berkedudukan di kota Tangerang yang
          didirikan pada tahun 2021 berdasarkan Akta Nomor 29 Tanggal 22
          Februari 2021, dibuat di hadapan Notaris Fikri, SH, MKN,
        </p>
        <p className="text-muted-foreground mb-4">
          Dan juga merupakan perusahaan yang memiliki tenaga
          ahli dan berpengalaman di bidang pengamanan dengan didukung oleh SDM
          yang baik serta profesional
        </p>

        <div>
          <Button className="font-semibold" variant={"outline"} asChild>
            <Link href={"/tentang-kami"}>Baca Selengkapnya</Link>
          </Button>
        </div>
      </div>
      <Image
        src={"/images/hero-img.png"}
        alt="tentang pt lika wira sakti"
        height={600}
        width={1600}
        className="w-[70%] md:w-[40%]"
      />
    </section>
  );
};

export default SectionAbout;
