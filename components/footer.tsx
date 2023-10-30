import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="shadow bg-secondary p-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              src={"/images/logo.png"}
              height={32}
              width={32}
              className="h-8 mr-3"
              alt="pt lws logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PT Lika Wira Sakti
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/tentang-kami" className="mr-4 hover:underline md:mr-6 ">
                Tentang
              </Link>
            </li>
            <li>
              <a href="/privacu-policy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-services" className="mr-4 hover:underline md:mr-6 ">
                Terms Of Service
              </a>
            </li>
            <li>
              <a href="https://wa.me/6281388029616" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-muted-foreground sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-muted-foreground sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            PT Lika Wira Sakti
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
