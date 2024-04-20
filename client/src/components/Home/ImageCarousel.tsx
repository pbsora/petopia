import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ImageCarousel = () => {
  const isMobile = window.innerWidth < 768;

  const banners = {
    desktop: [
      <img
        src="https://res.cloudinary.com/dhkaqwnyz/image/upload/v1712367779/petshop/banners/eqgdl14yovcs0jidmkrn.jpg"
        alt="dog banner desktop"
        className="hidden rounded-xl md:block"
      />,
      <img
        src="https://res.cloudinary.com/dhkaqwnyz/image/upload/v1712368321/petshop/banners/c2abplxofigsehadmapq.jpg"
        alt="cat banner desktop"
        className="hidden rounded-xl md:block"
      />,
      <img
        src="https://res.cloudinary.com/dhkaqwnyz/image/upload/v1712367076/petshop/banners/k0g4drsukd065kexhdnf.jpg"
        alt="fish banner desktop"
        className="hidden rounded-xl md:block"
      />,
    ],
    mobile: [
      <img
        src="https://res.cloudinary.com/dhkaqwnyz/image/upload/v1712379954/petshop/banners/h2ypnqiptiu0qc7ek7zs.jpg"
        alt="dog banner mobile"
        className="block rounded-xl md:hidden"
      />,
      <img
        src="https://res.cloudinary.com/dhkaqwnyz/image/upload/v1712381592/petshop/banners/qlz1rqvl7sdp05tmsn0n.jpg"
        alt="bird banner"
        className="block rounded-xl md:hidden"
      />,
      <img
        src="https://res.cloudinary.com/dhkaqwnyz/image/upload/v1712383100/petshop/banners/c2mmfganj3tcu9ygfzn1.jpg"
        alt="cat banner"
        className="block rounded-xl md:hidden"
      />,
    ],
  };

  return (
    <div className="w-screen mt-2 cursor-pointer md:mt-6">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 8000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="basis-[80%] sm:basis-[70%] md:basis-[95%] lg:basis-[85%]">
            {isMobile ? banners.mobile[0] : banners.desktop[0]}
          </CarouselItem>
          <CarouselItem className="basis-[80%] sm:basis-[70%] md:basis-[95%] lg:basis-[85%]">
            {isMobile ? banners.mobile[1] : banners.desktop[1]}
          </CarouselItem>
          <CarouselItem className="basis-[80%] sm:basis-[70%] md:basis-[95%] lg:basis-[85%]">
            {isMobile ? banners.mobile[2] : banners.desktop[2]}
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default ImageCarousel;
