// import Link from 'next/link';
// import { Mail, Phone, MapPin } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white pattern-dots">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">Tericsoft</h3>
//             <p className="text-gray-400">
//               Leading provider of Offshore Development Center solutions, helping businesses
//               achieve operational excellence and cost optimization.
//             </p>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 {/* <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
//                   Contact
//                 </Link> */}
//               </li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//             <ul className="space-y-4">
//               <li className="flex items-center">
//                 <Mail className="w-5 h-5 mr-2" />
//                 <a href="mailto:info@tericsoft.com" className="text-gray-400 hover:text-white transition-colors">
//                   info@tericsoft.com
//                 </a>
//               </li>
//               <li className="flex items-center">
//                 <Phone className="w-5 h-5 mr-2" />
//                 <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
//                   +91 98765 43210
//                 </a>
//               </li>
//               <li className="flex items-center">
//                 <MapPin className="w-5 h-5 mr-2" />
//                 <span className="text-gray-400">
//                   Bangalore, India
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} Tericsoft. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 transition-all duration-300 ease-in-out">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4 transform transition-transform hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-purple-800">Tericsoft</h3>
            <p className="text-gray-300 leading-relaxed">
              Leading provider of Offshore Development Center solutions, helping businesses
              achieve operational excellence and cost optimization.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4 transform transition-transform hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link href="/services" className="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Services
                </Link>
              </li> */}
              {/* <li>
                <Link href="/contact" className="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4 transform transition-transform hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-blue-400 animate-pulse" />
                <a 
                  href="mailto:info@tericsoft.com" 
                  className="text-gray-300 hover:text-white hover:underline transition-all"
                >
                  support@tericsoft.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-green-400 animate-pulse" />
                <a 
                  href="tel:+919876543210" 
                  className="text-gray-300 hover:text-white hover:underline transition-all"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-red-400" />
                <span className="text-gray-300">
                  Bangalore, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tericsoft. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* <a 
              href="https://github.com/tericsoft" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6 hover:scale-110 transition-transform" />
            </a> */}
            <a 
              href="https://linkedin.com/company/tericsoft" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://twitter.com/tericsoft" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}