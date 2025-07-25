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
    <header className="bg-card/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Logo Red de Apicultura Natural Regenerativa" 
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-xl font-bold text-primary font-dancing hidden md:block">Red de Apicultura Natural Regenerativa</h1>
          </div>
          <Button
            onClick={handleDownload}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Download className="w-4 h-4 mr-2"/>
            Descargar Estándares
          </Button>
        </div>
      </div>
    </header>
  );
};