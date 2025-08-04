import React from 'react';
import { BookOpen, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import coursesData from '@/data/courses.json';
export const CoursesSection = () => {
  return <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-primary mb-4 font-dancing">
            Cursos y Formación
          </h3>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Aprende de los mejores. Nuestros integrantes ofrecen formación especializada y servicios
            en diferentes aspectos de la apicultura natural regenerativa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coursesData.map((curso, index) => <Card key={index} className="bg-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-primary mb-2 font-dancing">
                      {curso.titulo}
                    </h4>
                    <p className="text-muted-foreground font-medium mb-1">
                      por {curso.instructor}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${curso.nivel === 'Principiante' ? 'bg-green-100 text-green-800' : curso.nivel === 'Intermedio' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'}`}>
                        {curso.nivel}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <BookOpen className="w-8 h-8 text-primary mb-2" />
                  </div>
                </div>

                <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                  {curso.descripcion}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Modalidad:</span>
                    <span className="font-medium">{curso.modalidad}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Button onClick={() => {
                window.open(`${curso.enlace}`, "_blank");
                toast.success("Información enviada", {
                  description: "Te contactaremos pronto con más detalles del curso"
                });
              }} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300">
                    Más Información
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};