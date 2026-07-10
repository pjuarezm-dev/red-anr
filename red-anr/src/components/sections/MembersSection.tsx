import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import membersData from '@/data/members.json'; 

export const MembersSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center text-primary mb-12 font-dancing">
          Nuestros Integrantes
        </h3>
        <Carousel className="w-full" opts={{align: "start", loop: true,}} plugins={[Autoplay({delay: 3000,}),]}>
          <CarouselContent>
          {membersData.map((apicultor, i) => (
             <CarouselItem key={i} className="basis-1/2 lg:basis-1/5"> 
              <Card className="bg-transparent border-0 shadow-none">
                <CardContent className="flex aspect-square items-center justify-center">
                  {apicultor.link ? (
                <a href={apicultor.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={apicultor.src}
                    title={apicultor.title}
                    className="transition-all duration-300 hover:scale-105"
                  />
                </a>
              ):(
                <img
                  src={apicultor.src}
                  title={apicultor.title}
                    className="transition-all duration-300 hover:scale-105"
                />
              )}
                </CardContent>
              </Card> 
             </CarouselItem> 
          ))} 
          </CarouselContent> 
        </Carousel>
      </div>
    </section>
  );
};
