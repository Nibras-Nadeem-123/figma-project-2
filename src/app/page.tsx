import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Recent from "@/components/recent";

 
export default function Home() {
  return (
     <div className="bg-background w-[1349px] h-[2453px] flex flex-col ">
      <Header/>
      <Hero/>
      <Recent/>
      <Feature/>
      <Footer/>
     </div>
  );
}
