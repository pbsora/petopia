import HomeBenefitsDesktop from "@/components/Home/HomeBenefitsDesktop";
import HomeCategories from "@/components/Home/HomeCategoriesMobile";
import HomeNewsSignup from "@/components/Home/HomeNewsSignup";
import HomeRecommended from "@/components/Home/HomeRecommended";
import HomeText from "@/components/Home/HomeText";
import ImageCarousel from "@/components/Home/ImageCarousel";

const Home = () => {
  setTimeout(() => {
    console.log(window.innerWidth);
  }, 1000);

  return (
    <div className="overflow-hidden">
      <HomeCategories />
      <ImageCarousel />
      <HomeBenefitsDesktop />
      <HomeRecommended />
      <HomeText />
      <HomeNewsSignup />
    </div>
  );
};
export default Home;
