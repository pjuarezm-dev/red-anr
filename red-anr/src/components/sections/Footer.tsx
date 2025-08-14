import { Mail } from 'lucide-react';
import Logo from '/images/logos/ANR_200.png';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <img
            src={ Logo }
            alt="Logo Red de Apicultura Natural Regenerativa"
            className="w-8 h-8 object-contain bg-white rounded p-1"
          />
          <h4 className="text-xl font-bold font-dancing">Red de Apicultura Natural Regenerativa</h4>
        </div>
        <p className="text-primary-foreground/80 mb-4 font-light">
          Regenerando ecosistemas, una colmena a la vez
        </p>
        <div className="flex justify-center space-x-6 text-primary-foreground/80">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            anrchile.ag@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};
