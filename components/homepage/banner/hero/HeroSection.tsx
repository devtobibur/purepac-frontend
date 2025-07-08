import Image from "next/image";
import HeroSlider from "./hero-slider";

const HeroSection = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-2 gap-5 grid-cols-1 grid md:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/banner/MacBook-Air-M4-13-Inch-1621.webp"
              alt="logo"
              fill
            />
          </div>
          <div className="relative">
            <Image src="/images/banner/banner_05.png" alt="logo" fill />
          </div>
          <div className="relative">
            <Image
              src="/images/banner/samsung-s25-series-Slider-9002.webp"
              alt="logo"
              fill
            />
          </div>
          <div className="relative">
            <Image
              src="/images/banner/iPhone-16-Series-7832.webp"
              alt="logo"
              fill
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
