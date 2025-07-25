import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { PrinciplesSection } from '@/components/sections/PrinciplesSection';
import { MembersSection } from '@/components/sections/MembersSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TerritoriesSection } from '@/components/sections/TerritoriesSection';
import { DigitalContentSection } from '@/components/sections/DigitalContentSection';
import { CoursesSection } from '@/components/sections/CoursesSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />
      <HeroSection />
      <PrinciplesSection />
      <MembersSection />
      <GallerySection />
      <TerritoriesSection />
      <DigitalContentSection />
      <CoursesSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};


export default Index;