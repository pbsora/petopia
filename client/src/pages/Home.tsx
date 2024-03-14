import HomeBenefitsDesktop from "@/components/Home/HomeBenefitsDesktop";
import HomeCategories from "@/components/Home/HomeCategoriesMobile";
import HomeRecommended from "@/components/Home/HomeRecommended";
import ImageCarousel from "@/components/Home/ImageCarousel";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HomeCategories />
      <ImageCarousel />
      <HomeBenefitsDesktop />
      <HomeRecommended />
    </div>
  );
};
export default Home;
