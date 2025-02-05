import { FaReact, FaNodeJs, FaPython, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiFlutter, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

export default function TechStack() {
  return (
    <div className="mt-6 flex justify-center gap-4 text-4xl text-gray-700">
      <FaReact title="React.js" className="hover:text-blue-500" />
      <SiNextdotjs title="Next.js" className="hover:text-black" />
      <SiTypescript title="TypeScript" className="hover:text-blue-600" />
      <SiFlutter title="Flutter" className="hover:text-blue-400" />
      <FaNodeJs title="Node.js" className="hover:text-green-600" />
      <FaPython title="Python" className="hover:text-yellow-500" />
      <SiTailwindcss title="Tailwind CSS" className="hover:text-teal-400" />
      <FaCss3Alt title="CSS" className="hover:text-blue-700" />
      <SiMongodb title="MongoDB" className="hover:text-green-500" />
      <FaDatabase title="SQL & Database" className="hover:text-gray-500" />
    </div>
  );
}
