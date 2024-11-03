// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 shadow-md shadow-slate-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-6">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyBrand
          </Link>            <p className="text-gray-400">
              MyBrand is committed to providing the best services and products to our customers. 
              We strive for excellence and aim to exceed expectations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
            <ul>
              <li>
                <Link href="/" className="hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition duration-300">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition duration-300">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>


        </div>
        
        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-500">&copy; 2024 MyBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
