import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function InfoLowongan() {
  return (
    <>
      <header>
        <Navbar page="info-lowongan" />
      </header>
      <main>
        <section className="py-10 px-8 h-screen w-full">
          <h1 className="font-bold text-4xl mb-4">
            <span className="text-primary">Kesempatan</span> Karir Kami
          </h1>
          <Separator />
          <div className="flex justify-center items-center gap-10 flex-wrap my-8">
            <Card className="w-72 transition-transform duration-500 hover:-translate-y-5 cursor-pointer shadow-lg">
              <CardHeader>
                <CardTitle>We are hiring</CardTitle>
                <CardDescription>Front end enginner</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum, sint ipsum. Voluptate, numquam repellat non debitis
                  inventore pariatur voluptatibus? Velit labore ad laborum
                  dolorum fugit exercitationem temporibus aliquid quae nostrum!
                </p>
              </CardContent>
              <Separator />
              <CardFooter>
                <p className="mt-2">PT. Lika Wira Sakti Karir</p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
