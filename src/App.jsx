import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Services from "./components/Services.jsx";
import Craft from "./components/Craft.jsx";
import Barbers from "./components/Barbers.jsx";
import Shop from "./components/Shop.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Journal from "./components/Journal.jsx";
import Booking from "./components/Booking.jsx";
import Footer from "./components/Footer.jsx";
import MotionFX from "./components/MotionFX.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <MotionFX />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Craft />
        <Barbers />
        <Shop />
        <Testimonials />
        <Journal />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}