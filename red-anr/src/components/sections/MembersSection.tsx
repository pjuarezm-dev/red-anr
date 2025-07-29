import membersData from '@/data/members.json'; 

export const MembersSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center text-primary mb-12 font-dancing">
          Nuestros Integrantes
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {membersData.map((apicultor, i) => (
            <div key={i} className="relative  flex items-center justify-center h-full">
             {apicultor.link ? (
                <a href={apicultor.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={apicultor.src}
                    title={apicultor.title}
                    className="p-6 transition-all duration-300 hover:scale-105"
                  />
                </a>
              ):(
                <img
                  src={apicultor.src}
                  title={apicultor.title}
                    className="p-6 transition-all duration-300 hover:scale-105"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
