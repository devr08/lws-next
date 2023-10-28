import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const SectionKeunggulanKami = () => {
  return (
    <section className="bg-secondary py-6 px-8">
      <h1 className="text-center font-bold text-3xl max-w-lg mx-auto">
        Keunggulan Kami yang Membuat Kami Menjadi{" "}
        <span className="text-primary">Pilihan Utama</span>
      </h1>
      <div className="flex items-center justify-between flex-row-reverse">
        <Image
          src={"/images/why.png"}
          alt="kenapa harus memilih pt lika wira sakti"
          height={600}
          width={1600}
          className="w-96"
        />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Pengalaman dan Keahlian</AccordionTrigger>
            <AccordionContent>
              Kami memiliki pengalaman dan keahlian dalam industri keamanan.
              Dengan didukung oleh tim yang terlatih dan berpengalaman, kami
              memiliki pemahaman mendalam tentang kebutuhan keamanan Anda.{" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Pelayanan Prima</AccordionTrigger>
            <AccordionContent>
              Kami berkomitmen untuk memberikan pelayanan pelanggan yang unggul.
              Kami mendengarkan kebutuhan klien kami dan merancang solusi yang
              sesuai. Tenaga Ahli dan Profesionalisme: Tim kami terdiri dari
              tenaga ahli yang profesional dan
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Komitmen Pada Keamanan</AccordionTrigger>
            <AccordionContent>
              Keamanan adalah prioritas utama kami. Kami berusaha untuk mencegah
              kejadian yang tidak diinginkan dan memberikan ketenangan kepada
              klien kami.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Reputasi Yang Baik</AccordionTrigger>
            <AccordionContent>
              Kami telah membangun reputasi yang baik dalam industri keamanan
              dan telah melayani berbagai klien dengan sukses.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Teknologi Terkini</AccordionTrigger>
            <AccordionContent>
              Kami selalu mengikuti perkembangan teknologi terbaru dalam
              industri keamanan untuk memberikan solusi yang paling efisien dan
              efektif.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default SectionKeunggulanKami;
