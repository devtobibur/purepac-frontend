import HeroBanner from "./HeroBanner";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  return (
    <div className="md:py-10 py-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5">
        <HeroBanner />
        <HeroSlider />
      </div>
    </div>
  );
};

export default HeroSection;
