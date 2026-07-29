import Hero from "../../components/home/Hero/Hero";
import Categories from "../../components/home/Categories/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  );
}

export default Home;