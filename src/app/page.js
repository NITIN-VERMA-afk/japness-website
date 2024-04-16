import HeroSection from "./Components/HeroSection";
import LandingPage from "./Components/LandingPage"; 
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";

export default function Home() {
  return (
    <main className="">
      <div>
        <HeroSection/>
        <LandingPage/>
        <Services/>
        <Pricing/>
        <ContactUs/>


      </div>

   
    </main>
  );
}
