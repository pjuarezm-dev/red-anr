import territoryData from '@/data/territoriesSection.json';

export const TerritoriesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-primary-foreground text-center">
          <h3 className="text-4xl font-bold mb-6 font-dancing">
            "La apicultura regenerativa trasciende fronteras y conecta territorios"
          </h3>
          <p className="text-xl mb-8 opacity-90 font-light">
            De montañas a valles, de bosques a praderas, nuestras prácticas se adaptan y regeneran cada ecosistema único
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {territoryData.map((territorio, index) => (
              <div key={index} className="relative">
                <img
                  src={`${territorio.image}`}
                  alt={territorio.imagealt}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 rounded-b-lg">
                  <p className="font-semibold">{territorio.imagealt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
