import galleryData from '@/data/gallerySection.json';


export const GallerySection = () => {
  return (
    <section className="py-16 px-4 bg-card/60">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center text-primary mb-12 font-dancing">
          Nuestro Trabajo en Imágenes
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          { galleryData.map((photo, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img
                src={`${photo.image}`}
                alt={`${photo.imagealt}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
