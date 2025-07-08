import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="md:col-span-2 col-span-1 gap-2 grid grid-cols-2 order-2 md:order-1">
      <div className="relative w-full md:h-[220px] h-[120px]">
        <Image
          src="/images/banner/MacBook-Air-M4-13-Inch-1621.webp"
          alt="logo"
          fill
        />
      </div>
      <div className="relative h-[120px] md:h-[220px] w-full">
        <Image src="/images/banner/banner_05.png" alt="logo" fill />
      </div>
      <div className="relative md:h-[220px] h-[120px] w-full">
        <Image
          src="/images/banner/samsung-s25-series-Slider-9002.webp"
          alt="logo"
          fill
        />
      </div>
      <div className="relative md:h-[220px] h-[120px] w-full">
        <Image
          src="/images/banner/iPhone-16-Series-7832.webp"
          alt="logo"
          fill
        />
      </div>
    </div>
  );
};

export default HeroBanner;
