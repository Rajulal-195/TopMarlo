import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800  shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white bg-orange-400 p-2 ps-0 text-2xl font-bold">
          <span className="text-orange-400 bg-white p-2">Top</span>marlo
        </Link>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className={`md:flex space-x-6 absolute md:relative top-12 md:top-0 left-0 w-full md:w-auto bg-gray-700 md:bg-transparent p-4 md:p-0 transition-transform transform ${isOpen ? "block" : "hidden"}`}>
          <li>
            <Link to="/" className="text-white hover:text-red-600 block py-2 md:py-0">Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-red-600 block py-2 md:py-0">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-red-600 block py-2 md:py-0">Contact</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-red-600 block py-2 md:py-0">About</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-red-600 block py-2 md:py-0">Login </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-red-600 block py-2 md:py-0">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
