export default function Projects() {
    const projects = [
      {
        title: "E-Wallet App",
        description: "A digital wallet built with Flutter and Laravel.",
        image: "/images/ewallet.png",
      },
      {
        title: "Tokopedia UI Clone",
        description: "A replica of the Tokopedia mobile UI using Flutter.",
        image: "/images/tokopedia.png",
      },
      {
        title: "Travel Booking App",
        description: "Flutter app for booking trips around Danau Toba.",
        image: "/images/travel.png",
      },
    ];
  
    return (
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
        <p className="text-gray-600">Some of my works</p>
  
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-md">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  