import { ShoppingBag, Package, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import servicesData from '@/data/services.json';
import Certificacion from '/images/logos/certificacion.png' 

export const ServiceSection = () => {
  return (
    <section className="py-16 px-4 bg-card/60">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-primary mb-4 font-dancing">
            Servicios de Nuestra Red
          </h3>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Conoce los servicios especializados que ofrecen los miembros de nuestra red, contribuyendo al cuidado de la sanidad apícola y al fortalecimiento de una apicultura natural y regenerativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((tienda, index) => (
            <Card key={index} className="bg-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border overflow-hidden group">
              <div className="relative">
                <div className="h-54 flex items-center justify-center overflow-hidden">
                  <img
                    src={tienda.imagen}
                    alt={tienda.nombre}
                    className="w-54 h-54 object-contain "
                  /> 
                  {tienda.certified && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full">
                      <img src={Certificacion} width="72px"></img>
                    </div>
                  )}
                  </div>
              </div>

              <CardContent className="p-6"> 
                <p className="font-medium mb-4 leading-relaxed">
                  {tienda.descripcion}
                </p> 
                <Button
                  onClick={() => window.open(tienda.enlace, '_blank')}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold rounded-full transition-all duration-300"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Servicios disponibles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
