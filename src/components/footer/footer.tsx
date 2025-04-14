import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="ReserveBite Logo"
              width={130}
              height={50}
            />
            <p className="text-gray-600 text-sm mt-4">
              Find and book the best restaurants in your city. Discover new
              cuisines and enjoy a seamless dining experience.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-[#004225] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-[#004225] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-[#004225] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-[#004225] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Restaurants",
                "Reservations",
                "Blog",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-[#004225] text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#004225]" />
                <span className="text-gray-600 text-sm">
                  123 Main Street, Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#004225]" />
                <span className="text-gray-600 text-sm">+251 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#004225]" />
                <span className="text-gray-600 text-sm">
                  info@reservebite.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for updates and offers
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004225] text-sm"
              />
              <button className="bg-[#004225] text-white px-4 py-2 rounded-lg hover:bg-[#003a20] transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ReserveBite. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-500 hover:text-[#004225] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-[#004225] text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-[#004225] text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
