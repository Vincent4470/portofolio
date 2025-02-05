import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="text-sm">&copy; 2025 Vincent Etwin Mangapul. All rights reserved.</p>

      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-500" />
        </a>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-400" />
        </a>
      </div>
    </footer>
  );
}
