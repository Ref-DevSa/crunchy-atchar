import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutPreview />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}

export default Home;