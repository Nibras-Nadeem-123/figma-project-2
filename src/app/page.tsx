import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Recent from "@/components/recent";

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col ">
      <div ><Header /></div>
      <main className="w-full flex flex-col items-center">
        <Hero />
        <Recent />
        <Feature />
      </main>
      <Footer />
    </div>
  );
}
