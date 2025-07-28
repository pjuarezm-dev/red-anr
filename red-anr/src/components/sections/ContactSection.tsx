
import React from 'react';
import { Mail } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-primary mb-8 font-dancing">
            Únete a la Regeneración
          </h3>
          <div className="bg-gradient-to-b from-primary to-accent rounded-2xl p-12 text-primary-foreground">
            <p className="text-2xl font-light mb-6 italic">
              "Cada colmena es un universo. Cada abeja, un maestro.
              Juntos, tejemos la red que regenera nuestros territorios."
            </p>
            <div className="flex items-center justify-center space-x-3 text-lg">
              <Mail className="w-6 h-6" />
              <a
                href="mailto:anrchile.ag@gmail.com"
                className="hover:text-accent transition-colors underline decoration-2 underline-offset-4 font-medium"
              >
                anrchile.ag@gmail.com
              </a>
            </div>
            <p className="text-primary-foreground/80 mt-4 font-light">
              Conecta con nosotros y sé parte del cambio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
