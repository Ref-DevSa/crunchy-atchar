import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutPreview />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;