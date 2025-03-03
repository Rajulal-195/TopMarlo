import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-white bg-orange-400 ms-4 p-2 text-2xl font-bold">
              <span className="text-orange-400 bg-white p-2">Top</span>Marlo
            </Link>
            <p className="mt-2 text-sm">
              Find your dream home with the best deals in the city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Listings</a></li>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-white">Contact Us</h2>
            <p className="mt-2 text-sm">123 Main Street, New York, NY</p>
            <p className="mt-1 text-sm">Email: info@dreamhomes.com</p>
            <p className="mt-1 text-sm">Phone: +1 (555) 123-4567</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-gray-700 mt-6 pt-4">
          &copy; {new Date().getFullYear()} DreamHomes Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
