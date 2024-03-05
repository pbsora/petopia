import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const ImageCarousel = () => {
  const [isWide, setIsWide] = useState<boolean>(window.innerWidth > 768);

  const handleScreenSize = debounce(() => {
    ("");
    if (window.innerWidth > 768) {
      setIsWide(true);
    } else {
      setIsWide(false);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [handleScreenSize]);

  return (
    <div className="w-screen mt-2 cursor-pointer md:mt-6">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 500000, //
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="basis-[85%] md:basis-[95%] lg:basis-[85%]">
            {isWide ? (
              <img
                src="https://images.petz.com.br/fotos/Home_Desk_1900x390_Assinatura_2023.png"
                alt=""
                className="rounded-xl"
              />
            ) : (
              <img
                src="https://images.petz.com.br/fotos/Home_SuperApp_656x572_BrinquedosCaes_Refresh.jpg"
                alt=""
                className="rounded-xl"
              />
            )}
          </CarouselItem>
          <CarouselItem className="basis-[85%] md:basis-[95%] lg:basis-[85%]">
            {isWide ? (
              <img
                src="https://images.petz.com.br/fotos/Home_Desk_1900x390_MesdoConsumidor_CatMyPet.jpg"
                alt=""
                className="rounded-xl"
              />
            ) : (
              <img
                src="https://images.petz.com.br/fotos/Home_SAPP_MesConsumidor_Genericas.jpg"
                alt=""
                className="rounded-xl"
              />
            )}
          </CarouselItem>
          <CarouselItem className="basis-[85%] md:basis-[95%] lg:basis-[85%]">
            {isWide ? (
              <img
                src="https://images.petz.com.br/fotos/Banner_desk_mes-do-consumidor_1900x390_1.jpg"
                alt=""
                className="rounded-xl"
              />
            ) : (
              <img
                src="https://images.petz.com.br/fotos/Home_SAPP_656x572_MesDoConsumidor_Medicamento15OFF.jpg"
                alt=""
                className="rounded-xl"
              />
            )}
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default ImageCarousel;
