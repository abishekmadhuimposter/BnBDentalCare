import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import TrustIndicators from "@/components/trust-indicators/TrustIndicators";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Gallery from "@/components/gallery/Gallery";
import Testimonials from "@/components/testimonials/Testimonials";
import Appointment from "@/components/appointment/Appointment";
import Location from "@/components/location/Location";
import BlogSection from "@/components/blog/BlogSection";
import Footer from "@/components/footer/Footer";
import MobileBar from "@/components/mobile-bar/MobileBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustIndicators />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Appointment />
        <Location />
        <BlogSection />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}


