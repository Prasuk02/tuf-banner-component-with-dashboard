import Banner from "@/components/global/Banner";
import Navbar from "@/components/global/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Navbar golbal component */}
      <Navbar/>

      <div className="w-full flex flex-col items-center mt-24">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-5xl text-[#111111] font-bold">Prep Like a
            <span className="text-brand-primary">&nbsp;Pro:&nbsp;</span>
            Your Go-To Hub for Student Success!
          </h1>
          <p className="text-base text-[#888888] mt-6">Chart Your Learning Journey: Conquer DSA, Master CS Concepts, Design Systems, Sharpen Competitive Skills, and Ace Interviews with Ease!</p>
        </section>

        {/* Banner Section */}
        <section className="w-[80%] mt-10">
          <Banner/>
        </section>
      </div>
    </main>
  );
}
