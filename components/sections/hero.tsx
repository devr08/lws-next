import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-secondary px-8 py-20 flex items-center justify-centers"
    >
      <div>
        <h1 className="font-bold text-3xl">
          Membangun Masa Depan Yang&nbsp;
          <span className="text-primary">Aman Dan Nyaman</span>
        </h1>
        <p className="text-sm max-w-sm mt-6 mb-5 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          voluptatem unde aliquid aspernatur recusandae natus quibusdam ipsum,
          magni, consequuntur atque, sit laborum earum suscipit? Voluptatibus
          eaque quaerat neque incidunt accusamus!
        </p>
        <div className="flex items-center">
          <Link
            href={"/"}
            className="bg-primary rounded-md px-2 py-1 w-[120px] font-semibold text-center hover:bg-yellow-600 mr-2"
          >
            <span className="text-sm">Hubungi Kami</span>
          </Link>
          <Link
            href={"/"}
            className="bg-secondary px-2 py-1 w-[120px] rounded-md text-center font-semibold hover:bg-popover"
          >
            <span className="text-sm">Tentang Kami</span>
          </Link>
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
