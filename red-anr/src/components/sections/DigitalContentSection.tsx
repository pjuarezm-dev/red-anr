
import React from 'react';
import { PlayCircle, Video, Podcast, Mic, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contenidoDigital = [
  {
    titulo: "Abeja Rebelde",
    descripcion: "Un espacio para cuestionar lo que nos han dicho sobre las abejas y la apicultura",
    icono: Podcast,
    plataforma: "Spotify",
    enlace: "https://open.spotify.com/show/7iQEqGHFAuOPs2FM24lLbx?si=4884ac75c06f4a25",
    color: "bg-gradient-to-br from-green-600 to-emerald-700"
  },
  {
    titulo: "Abeja Rebelde",
    descripcion: "Ni todo lo que vuela es libre, ni todo lo que hacemos tiene sentido",
    icono: Video,
    plataforma: "YouTube",
    enlace: "https://www.youtube.com/@AbejaRebelde",
    color: "bg-gradient-to-br from-amber-600 to-orange-700"
  },
  {
    titulo: "Red ANR Instagram",
    descripcion: "Síguenos para contenido, tips y conexión con la comunidad apícola",
    icono: Instagram,
    plataforma: "Instagram",
    enlace: "https://www.instagram.com/redanrchile/",
    color: "bg-gradient-to-br from-pink-600 to-purple-600"
  }
];

export const DigitalContentSection = () => {
  return (
    <section className="py-16 px-4 bg-card/60">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-primary mb-4 font-dancing">
            Ecosistema Digital Regenerativo
          </h3>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Conectamos saberes con tecnología para compartir conocimiento
            sobre apicultura natural regenerativa en múltiples formatos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contenidoDigital.map((contenido, index) => (
            <Card key={index} className="bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-border overflow-hidden group">
              <div className={`${contenido.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                  <contenido.icono className="w-full h-full" />
                </div>
                <contenido.icono className="w-8 h-8 mb-3 relative z-10" />
                <h4 className="text-xl font-bold mb-2 relative z-10">{contenido.titulo}</h4>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full relative z-10">{contenido.plataforma}</span>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                  {contenido.descripcion}
                </p>
                <Button
                  onClick={() => window.open(contenido.enlace, '_blank')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300"
                >
                  Explorar Contenido
                  <PlayCircle className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
