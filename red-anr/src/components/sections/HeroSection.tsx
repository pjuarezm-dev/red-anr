import React from 'react';
import { toast } from 'sonner';
import Autoplay from "embla-carousel-autoplay" 
import Fade from 'embla-carousel-fade'

import { Download, Award, Users, Network, Star  } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"

import heroSlidesData from '@/data/heroSlides.json';

export const HeroSection = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1KYNxkXAtS9uI8fhaZjSNjShyJ855uHdf/view', '_blank');
    toast.success("Descarga iniciada", {
      description: "El documento de estándares se está abriendo"
    });
  };

  const getIcon = (iconName: string) => {
    const icons = { Award, Users, Network, Star };
    return icons[iconName as keyof typeof icons];
  };

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'launch':
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="text-left">
               <div className="inline-flex items-center bg-gradient-to-r from-primary to-accent/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
                {slide.badge.icon && React.createElement(getIcon(slide.badge.icon), { className: "w-5 h-5 mr-2 text-white" })}
                <span className="text-white font-semibold">{slide.badge.text}</span>
              </div> 
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-dancing">
                {slide.title}  
                <span className="block text-white/90 text-3xl md:text-4xl mt-2">
                  {slide.description}
                </span>
              </h1>
              <p className="text-xl text-white/95 leading-relaxed mb-8">
                <strong>{slide.highlight}</strong> {slide.content.replace(slide.highlight, '')}
              </p>
              {slide.hasDownload && (
                <Button onClick={handleDownload}  size="lg" className="font-bold px-8 py-4 rounded-full">
                  <Star className="w-5 h-5 mr-2" />
                  Asociados Certificados
                </Button>
              )}
            </div>
             <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse"></div>
                <img 
                  src={slide.image} 
                  alt={slide.imageAlt}  
                  className="relative w-80 h-80 object-contain animate-scale-in"
                />
              </div>
            </div>
          </div>
        );

      case 'partner':
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-primary to-accent/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
                {slide.badge.icon && React.createElement(getIcon(slide.badge.icon), { className: "w-5 h-5 mr-2 text-white" })}
                <span className="text-white font-semibold">{slide.badge.text}</span>
              </div> 
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-dancing">
                {slide.title}  
                <span className="block text-white/90 text-3xl md:text-4xl mt-2">
                  {slide.description}
                </span>
              </h1>
              <p className="text-xl text-white/95 leading-relaxed mb-8">
                {slide.content} 
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative bg-white rounded p-4">
                <img 
                  src={slide.logo} 
                  alt={slide.logoAlt} 
                /> 
              </div>
            </div>
          </div>
        );

      case 'network':
        return (
          <div className="grid gap-12 items-center h-full">
            <div className="text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-primary to-accent/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
               {slide.badge.icon && React.createElement(getIcon(slide.badge.icon), { className: "w-5 h-5 mr-2 text-white" })}
                <span className="text-white font-semibold">{slide.badge.text}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-dancing">
                {slide.title}  
                <span className="block text-white/90 text-3xl md:text-4xl mt-2">
                  {slide.description}
                </span>
              </h1>
              <div>
              <p className="text-xl text-white/95 leading-relaxed">
                  {slide.content}
                </p>
                {slide.secondaryContent && (
                  <p className="text-xl text-white/95 leading-relaxed mb-8">
                    {slide.secondaryContent}
                  </p>
                )}
              </div>
              {slide.hasDownload && (
                <div>
                  <Button onClick={handleDownload}>
                    <Download/>
                    Descargar Estándares
                  </Button>
                </div>
              )}
            </div> 
          </div>
        );

      default:
        return null;
    }
  };

   return (
    <section className="relative min-h-[80vh] flex items-center">
      <Carousel 
        className="w-full"
        opts={{  
          containScroll: false,
          loop: true,
        }} 
        
        plugins={[ 
          Autoplay({delay: 5000}),
          Fade()
        ]}
      >
        <CarouselContent>
          {heroSlidesData.map((slide) => (
            <CarouselItem key={slide.id}>
               <div className="relative min-h-[80vh]">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{
                  backgroundImage: `url(${slide.background})`
                }}></div>
                <div className="absolute inset-0  bg-black/60"></div>
                <div className="container mx-auto relative z-10 h-full flex items-center px-4 py-10">
                  {renderSlideContent(slide)}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent> 
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};