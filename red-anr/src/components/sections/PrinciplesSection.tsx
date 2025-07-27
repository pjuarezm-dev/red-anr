import { Card, CardContent } from '@/components/ui/card';

const principios = [
  {
    title: "Respeto al Ciclo Natural",
    description: "Conoce y respeta los patrones de comportamiento y ciclos naturales del organismo colmena"
  },
  {
    title: "Biodiversidad Activa",
    description: "Comprende a las abejas en tu contexto ecosistémico"
  },
  {
    title: "Calidad sin Químicos",
    description: "No ataques a tus colmenas con productos químicos y alimentos artificiales"
  },
  {
    title: "Equilibrio Productivo",
    description: "Poliproductividad y equilibrio en las cosechas "
  },
  {
    title: "Manejo Mínimo",
    description: "Realiza tus intervenciones en base a la observación"
  },
  {
    title: "Sostenibilidad Territorial",
    description: "Co-crear nuevas economías, circuitos cortos y precios justos"
  }
];

export const PrinciplesSection = () => {
  return (<section className="py-16 px-4 bg-card/60">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center text-primary mb-12 font-dancing">
          Los Principios de la Apicultura Natural Regenerativa
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principios.map((principio, index) => (
            <Card key={index} className="bg-card/90 border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="text-xl not-only:text-primary mb-3 font-medium">{principio.title}</h4>
                <p className="text-muted-foreground font-light">{principio.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>);
};