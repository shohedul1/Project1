import FirstSection from "@/components/FirstSection/FirstSection";
import Navbar from "@/components/Navbar/Navbar";
import SecoundSection from "@/components/SecoundSection/SecoundSection";
import ThirdSection from "@/components/ThirdSection/ThirdSection";

export default function Home() {
  return (
    <div className="pb-20 px-[70px]" >
      <Navbar />
      <FirstSection />
      <SecoundSection />
      <ThirdSection />

    </div>
  );
}
