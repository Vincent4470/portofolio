import { FaMobileAlt, FaCode, FaServer } from "react-icons/fa";

export default function Services() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Services</h2>
      <p className="text-gray-600">What I can do for you</p>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md w-64">
          <FaMobileAlt className="text-4xl text-blue-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Mobile Development</h3>
          <p className="text-gray-600 text-sm">Flutter apps for iOS & Android.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md w-64">
          <FaCode className="text-4xl text-green-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Web Development</h3>
          <p className="text-gray-600 text-sm">Modern web apps using React & Next.js.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md w-64">
          <FaServer className="text-4xl text-gray-600 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Backend Development</h3>
          <p className="text-gray-600 text-sm">API development with Node.js & Laravel.</p>
        </div>
      </div>
    </section>
  );
}
