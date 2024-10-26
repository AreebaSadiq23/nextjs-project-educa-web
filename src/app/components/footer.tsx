import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-800 text-white py-10 max-w-screen-2xl mx-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-8">
          {/* About Us Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-white">
              We are dedicated to providing the best educational resources and tools to help students succeed.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-white">Email: info@educationwebsite.com</p>
            <p className="text-white">Phone: (123) 456-7890</p>
            <p className="text-white">Address: 123 Education St, Learning City, Pakistan</p>
          </div>

          {/* Follow Us Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-600" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-600" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-600" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-pink-600" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white pt-6 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Education Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
