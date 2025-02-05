import { FaGithub } from "react-icons/fa"; // Import icon GitHub

export default function Projects() {
  const projects = [
    {
      title: "E-Wallet App",
      description: "Aplikasi ini merupakan final project untuk mata kuliah Pemrograman Mobile, yang dibangun dengan Flutter sebagai frontend dan Laravel sebagai backend. Berikut adalah tautan untuk mengakses proyek ini.",
      image: "../images/e-wallet.png",
      githubLink: "https://github.com/username/ewallet", // Ganti dengan link GitHub Anda
    },
    {
      title: "Tokopedia UI Clone",
      description: "A replica of the Tokopedia mobile UI using Flutter.",
      image: "/images/tokopedia.png",
      githubLink: "https://github.com/username/tokopedia-ui-clone", // Ganti dengan link GitHub Anda
    },
    {
      title: "Travel Booking App",
      description: "Flutter app for booking trips around Danau Toba.",
      image: "/images/travel.png",
      githubLink: "https://github.com/username/travel-booking-app", // Ganti dengan link GitHub Anda
    },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      <p className="text-gray-600">Some of my works</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>

            {/* GitHub Link and Icon */}
            <div className="mt-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaGithub className="inline mr-2" /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
