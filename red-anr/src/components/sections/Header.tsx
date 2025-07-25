import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Logo from '/logos/ANR_200.png';

export const Header = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1KYNxkXAtS9uI8fhaZjSNjShyJ855uHdf/view', '_blank');
    toast.success("Descarga iniciada", {
      description: "El documento de estándares se está abriendo"
    });
  };

  return (
    <header>
      <div>
        <div>
          <div>
            <img
              src={Logo}
              alt="Logo Red de Apicultura Natural Regenerativa" 
            />
            <h1>Red de Apicultura Natural Regenerativa</h1>
          </div>
          <Button
            onClick={handleDownload}
          >
            <Download/>
            Descargar Estándares
          </Button>
        </div>
      </div>
    </header>
  );
};