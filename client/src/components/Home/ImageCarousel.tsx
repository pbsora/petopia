import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ImageCarousel = () => {
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
          <CarouselItem className="basis-[80%] md:basis-[95%] lg:basis-[85%]">
            <img
              src="https://images.petz.com.br/fotos/Home_Desk_1900x390_Assinatura_2023.png"
              alt=""
              className="hidden rounded-xl md:block"
            />
            <img
              src="https://images.petz.com.br/fotos/Home_SuperApp_656x572_BrinquedosCaes_Refresh.jpg"
              alt=""
              className="block rounded-xl md:hidden"
            />
          </CarouselItem>
          <CarouselItem className="basis-[80%] md:basis-[95%] lg:basis-[85%]">
            <img
              src="https://images.petz.com.br/fotos/Home_Desk_1900x390_MesdoConsumidor_CatMyPet.jpg"
              alt=""
              className="hidden rounded-xl md:block"
            />
            <img
              src="https://images.petz.com.br/fotos/Home_SAPP_MesConsumidor_Genericas.jpg"
              alt=""
              className="block rounded-xl md:hidden"
            />
          </CarouselItem>
          <CarouselItem className="basis-[80%] md:basis-[95%] lg:basis-[85%]">
            <img
              src="https://images.petz.com.br/fotos/Banner_desk_mes-do-consumidor_1900x390_1.jpg"
              alt=""
              className="hidden rounded-xl md:block"
            />
            <img
              src="https://images.petz.com.br/fotos/Home_SAPP_656x572_MesDoConsumidor_Medicamento15OFF.jpg"
              alt=""
              className="block rounded-xl md:hidden"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default ImageCarousel;
