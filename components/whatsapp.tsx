import Image from "next/image";
import Link from "next/link";

const ClickToWhatsapp = () => {
  return (
    <Link href={"https://wa.me/6281388029616"}>
      <Image src={"/images/wa.gif"} alt="hubungi kami" height={60} width={60} className="fixed rounded-full bottom-10 right-5"/>
    </Link>
  );
};

export default ClickToWhatsapp;
