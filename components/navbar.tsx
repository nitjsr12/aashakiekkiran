"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { 
      name: "Our Work", 
      href: "#",
      subLinks: [
        { name: "Current Causes", href: "/causes" },
        { name: "Past Initiatives", href: "/previous-causes" },
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-2" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-3"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src="/images/आशा (1).png" 
                alt="Hope Foundation Logo" 
                width={120} 
                height={120} 
                className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-primary/20 shadow-md"
              />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Aasha Ki Ek Kiran
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.subLinks ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium"
                    >
                      {link.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 border border-gray-100 dark:border-gray-700"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 transition-colors duration-150"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Link href="/donate" className="ml-4">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all">
                Donate Now
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          
          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-16 bg-white dark:bg-gray-900 shadow-lg md:hidden pt-4 px-6 pb-8"
              >
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.name} className="border-b border-gray-100 dark:border-gray-800 pb-2">
                      {link.subLinks ? (
                        <>
                          <button
                            onClick={() => toggleDropdown(link.name)}
                            className="flex items-center justify-between w-full py-3 text-gray-700 dark:text-gray-300 hover:text-primary font-medium text-lg"
                          >
                            {link.name}
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                          </button>
                          
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 overflow-hidden"
                            >
                              {link.subLinks.map((subLink) => (
                                <Link
                                  key={subLink.name}
                                  href={subLink.href}
                                  className="block py-3 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className="block py-3 text-gray-700 dark:text-gray-300 hover:text-primary font-medium text-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <Link href="/donate" className="mt-6" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all py-6 text-lg">
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}