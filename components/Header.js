// 'use client';
// import { useState, useEffect } from 'react';
// import { Menu, X, ChevronRight } from 'lucide-react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import ThemeToggle from './ThemeToggle';
// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const [isInitialLoad, setIsInitialLoad] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => setIsInitialLoad(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMenuOpen && !event.target.closest('header')) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [isMenuOpen]);
//   const navLinks = [
//     { href: '#challenges', label: 'Challenges', icon: '🎯' },
//     { href: '#strategy', label: 'Strategy', icon: '📈' },
//     { href: '#features', label: 'Features', icon: '⚡' },
//     { href: '#benifits', label: 'Benefits', icon: '🎁' },
//   ];
//   const headerVariants = {
//     initial: { y: -100 },
//     animate: { y: 0 },
//     exit: { y: -100 },
//   };
//   const menuVariants = {
//     closed: {
//       opacity: 0,
//       x: '100%',
//       transition: { type: 'spring', stiffness: 400, damping: 40 },
//     },
//     open: {
//       opacity: 1,
//       x: 0,
//       transition: { type: 'spring', stiffness: 400, damping: 40 },
//     },
//   };
//   const bounceVariants = {
//     initial: { y: -100, opacity: 0 },
//     animate: (i) => ({
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         stiffness: 500,
//         damping: 15,
//         delay: i * 0.1,
//         duration: 1,
//       },
//     }),
//     hover: {
//       scale: 1.05,
//       y: -2,
//       transition: {
//         type: 'spring',
//         stiffness: 400,
//         damping: 10,
//       },
//     },
//   };
//   return (
//     <motion.header
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={headerVariants}
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         isScrolled
//           ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg dark:shadow-gray-800/30'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           <motion.div 
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ type: 'spring', stiffness: 500, damping: 15, duration: 1 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link href="/" className="flex items-center space-x-2">
//               <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
//                 Tericsoft
//               </span>
//             </Link>
//           </motion.div>
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link, i) => (
//               <motion.div
//                 key={link.href}
//                 custom={i}
//                 variants={bounceVariants}
//                 initial="initial"
//                 animate="animate"
//                 whileHover="hover"
//                 className="relative"
//               >
//                 <Link
//                   href={link.href}
//                   className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 ${
//                     activeLink === link.href
//                       ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
//                       : isScrolled
//                       ? 'text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
//                       : 'text-white hover:text-primary-400'
//                   }`}
//                   onClick={() => setActiveLink(link.href)}
//                 >
//                   <span className="transform transition-transform duration-300 group-hover:scale-110">
//                     {link.icon}
//                   </span>
//                   <span>{link.label}</span>
//                   {isInitialLoad && (
//                     <motion.div
//                       className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500"
//                       initial={{ scaleX: 0 }}
//                       animate={{ scaleX: 1 }}
//                       transition={{ delay: i * 0.1 + 0.5, duration: 0.3 }}
//                     />
//                   )}
//                 </Link>
//               </motion.div>
//             ))}
//             <motion.div
//               variants={bounceVariants}
//               custom={navLinks.length}
//               initial="initial"
//               animate="animate"
//               whileHover="hover"
//             >
//               <ThemeToggle />
//             </motion.div>
//           </nav>
//           <motion.button
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ type: 'spring', stiffness: 500, damping: 15 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className={`md:hidden p-2 rounded-full transition-all ${
//               isScrolled 
//                 ? 'bg-primary-600 text-white hover:bg-primary-700' 
//                 : 'bg-white text-primary-600 hover:bg-gray-100'
//             }`}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </motion.button>
//         </div>
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.nav
//               initial="closed"
//               animate="open"
//               exit="closed"
//               variants={menuVariants}
//               className="md:hidden absolute top-20 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg rounded-b-2xl border-t border-gray-100 dark:border-gray-800"
//             >
//               <div className="container mx-auto px-4 py-4">
//                 {navLinks.map((link, i) => (
//                   <motion.div
//                     key={link.href}
//                     custom={i}
//                     variants={bounceVariants}
//                     initial="initial"
//                     animate="animate"
//                     whileHover="hover"
//                   >
//                     <Link
//                       href={link.href}
//                       className={`flex items-center justify-between w-full p-4 rounded-xl mb-2 transition-all duration-300 ${
//                         activeLink === link.href
//                           ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
//                           : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
//                       }`}
//                       onClick={() => {
//                         setActiveLink(link.href);
//                         setIsMenuOpen(false);
//                       }}
//                     >
//                       <div className="flex items-center space-x-3">
//                         <span className="text-xl transform transition-transform duration-300 group-hover:scale-110">
//                           {link.icon}
//                         </span>
//                         <span className="font-medium">{link.label}</span>
//                       </div>
//                       <ChevronRight size={20} className="text-gray-400 dark:text-gray-600" />
//                     </Link>
//                   </motion.div>
//                 ))}
                
//                 {/* Theme toggle in mobile menu */}
//                 <motion.div
//                   variants={bounceVariants}
//                   custom={navLinks.length}
//                   initial="initial"
//                   animate="animate"
//                   whileHover="hover"
//                   className="mt-4 p-4 border-t border-gray-100 dark:border-gray-800"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="font-medium text-gray-600 dark:text-gray-300">Theme</span>
//                     <ThemeToggle />
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.header>
//   );
// }






// 'use client';
// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import ThemeToggle from './ThemeToggle';

// const NAV_LINKS = [
//   { href: '#challenges', label: 'Challenges' },
//   { href: '#strategy', label: 'Strategy' },
//   { href: '#framework', label: 'Framework' },
//   { href: '#benifits', label: 'Benefits' },
//   { href: '#cost', label: 'Cost Graph' },
//   { href: '#infograph', label: 'Infrastructure' },
//   { href: '#features', label: 'Features' },
// ];

// const headerVariants = {
//   initial: { y: -100 },
//   animate: { y: 0 },
//   exit: { y: -100 },
// };

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMenuOpen && !event.target.closest('header')) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [isMenuOpen]);

//   if (!isClient) {
//     return null;
//   }

//   return (
//     <motion.header
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={headerVariants}
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         isScrolled
//           ? 'bg-black/80 text-white backdrop-blur-lg shadow-lg'
//           : 'bg-black/60 text-white'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{
//               type: 'spring',
//               stiffness: 300,
//               damping: 15,
//             }}
//             className="flex items-center space-x-2"
//           >
//             <Link href="/" className="text-2xl font-bold text-purple-900">
//               Tericsoft
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`text-sm font-medium transition-all duration-300 ${
//                   activeLink === link.href ? 'text-gray-300' : 'text-white'
//                 } hover:text-gray-300`}
//                 onClick={() => setActiveLink(link.href)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <motion.button
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{
//               type: 'spring',
//               stiffness: 300,
//               damping: 15,
//             }}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden p-2 rounded-full bg-white text-black shadow-lg"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.nav
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="lg:hidden absolute top-20 left-0 right-0 bg-black/90 text-white backdrop-blur-xl shadow-2xl rounded-b-3xl border-t border-gray-700"
//             >
//               <div className="container mx-auto p-4 space-y-4">
//                 {NAV_LINKS.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => {
//                       setActiveLink(link.href);
//                       setIsMenuOpen(false);
//                     }}
//                     className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
//                       activeLink === link.href ? 'bg-gray-700' : 'hover:bg-gray-800'
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//                 {/* <div className="pt-4 border-t border-gray-700">
//                   <div className="flex items-center justify-between px-4">
//                     <span className="font-medium">Theme</span>
//                     <ThemeToggle />
//                   </div>
//                 </div> */}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.header>
//   );
// }



'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { href: '#challenges', label: 'Challenges' },
  { href: '#strategy', label: 'Strategy' },
  { href: '#framework', label: 'Framework' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#cost', label: 'Cost Graph' },
  { href: '#infograph', label: 'Infrastructure' },
  { href: '#features', label: 'Features' },
];

const headerVariants = {
  initial: { y: -100 },
  animate: { y: 0 },
  exit: { y: -100 },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  if (!isClient) {
    return null;
  }

  return (
    <motion.header
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      className={`fixed w-full z-50 transition-all duration-500 bg-black/90 dark:bg-black/90`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15,
            }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Tericsoft
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeLink === link.href 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-white/80 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15,
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full text-white hover:text-primary-400 transition-all"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-lg shadow-2xl rounded-b-3xl"
            >
              <div className="container mx-auto p-4 space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeLink === link.href 
                        ? 'bg-primary-900/40 text-primary-400' 
                        : 'text-white/80 hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="mt-4 p-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white/80">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}