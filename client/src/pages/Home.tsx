import HomeBenefitsDesktop from "@/components/Home/HomeBenefitsDesktop";
import HomeCategories from "@/components/Home/HomeCategoriesMobile";
import HomeNewsSignup from "@/components/Home/HomeNewsSignup";
import HomePriceBanners from "@/components/Home/HomePriceBanners";
import HomeRecommended from "@/components/Home/HomeRecommended";
import HomeText from "@/components/Home/HomeText";
import ImageCarousel from "@/components/Home/ImageCarousel";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HomeCategories />
      <ImageCarousel />
      <HomeBenefitsDesktop />
      <HomeRecommended />
      <HomePriceBanners />
      <hr className="w-[90vw] lg:w-[80vw] border border-zinc-200 m-auto mb-10" />
      <HomeText />
      <HomeNewsSignup />
    </div>
  );
};
export default Home;
