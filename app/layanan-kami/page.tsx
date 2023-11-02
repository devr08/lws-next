import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <header>
        <Navbar page={"layanan-kami"} />
      </header>
      <main>
        <section className="px-8 py-10 w-full flex justify-center items-center flex-col">
          <h1 className="text-center font-bold text-4xl mb-4 max-w-xl">
            Solusi <span className="text-primary">Keamanan</span> Unggulan yang
            Kami Tawarkan
          </h1>
          <p className="text-md text-muted-foreground max-w-xl text-center mb-10">
            Kami menghadirkan beragam solusi keamanan yang dirancang untuk
            memenuhi kebutuhan Anda. tim ahli kami siap memberikan perlindungan
            dan ketenangan pikiran. Jelajahi layanan kami yang terpercaya dan
            temukan solusi yang sesuai dengan kebutuhan Anda.
          </p>
          <div className="flex justify-center gap-20 items-center flex-wrap">
            <Card className="w-72 h-[420px] hover:shadow-md transition-all duration-500 hover:-translate-y-5 hover:shadow-primary">
              <CardHeader>
                <CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                </CardTitle>
                <CardDescription>Pelatihan</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc px-2">
                  <li className="mb-2">Pendidikan dan pelatihan dasar POLRI</li>
                  <li className="mb-2">
                    Pendidikan keterampilan dasar seperti PBB
                  </li>
                  <li className="mb-2">Senam tongkat, senam borgol</li>
                  <li className="mb-2">Keterampilan beladiri</li>
                  <li className="mb-2">
                    Tindakan awal terhadap keadaan darurat
                  </li>
                  <li className="mb-2">Pelatihan K3 dan Damkar</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="w-72 h-[420px] hover:shadow-md transition-all duration-500 hover:-translate-y-5 hover:shadow-primary">
              <CardHeader>
                <CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </CardTitle>
                <CardDescription>Pengawasan</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc px-2">
                  <li className="mb-2">
                    Pengawasan yang efektif terhadap tata tertib
                  </li>
                  <li className="mb-2">
                    Mengawasi setiap jenis kegiatan di lingkungan sekitar
                  </li>
                  <li className="mb-2">
                    Pencegahan timbulnya tindak kejahatan
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="w-72 h-[420px] hover:shadow-md transition-all duration-500 hover:-translate-y-5 hover:shadow-primary cursor-pointer">
              <CardHeader>
                <CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </CardTitle>
                <CardDescription>Pelatihan</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc px-2">
                  <li className="mb-2">Pengawasan/Patroli lingkungan tugas</li>
                  <li className="mb-2">Pengaturan area perparkiran</li>
                  <li className="mb-2">Service customer</li>
                  <li className="mb-2">
                    Menanggulangi beberapa kasus kejahatan yang terjadi di
                    lingkungan tugas
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
