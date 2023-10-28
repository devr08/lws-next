import Image from "next/image";
import Link from "next/link";

interface Props {
    page: string
}

const Navbar = (props: Props) => {
    const page = props.page

    return (
        <nav className="flex items-center bg-secondary justify-between py-4 px-8">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={"/images/logo.png"}
            alt="pt lika wira sakti"
            height={80}
            width={80}
            className="w-10"
          />
          <h1 className="font-bold text-xl">PT Lika Wira Sakti</h1>
        </div>
        <ul className="flex items-center gap-4 justify-center font-semibold">
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
            <Link href={"/galeri"} className={`hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-8 transition-all duration-300 ${page == "galeri" && 'text-primary underline underline-offset-8 decoration-2'}`}>Galeri</Link>
          </li>
          <li>
            <Link href={"/tentang-kami"} className={`hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-8 transition-all duration-300 ${page == "tentang-kami" && 'text-primary underline underline-offset-8 decoration-2'}`}>Tentang</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar