"use client";

import { 
  Heart, 
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight  // Added ArrowRight import
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#" },
    { icon: <Twitter className="w-5 h-5" />, url: "#" },
    { icon: <Instagram className="w-5 h-5" />, url: "#" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#" }
  ];

  const quickLinks = [
    { name: "About Us", url: "/about" },
    { name: "Our Causes", url: "/causes" },
    { name: "Events", url: "/events" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" }
  ];

  const initiatives = [
    "Education Support",
    "Food Distribution",
    "Old Age Home Visits",
    "Orphanage Support",
    "Medical Camps"
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-gray-100 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/images/आशा (1).png" 
                alt="Hope Foundation Logo" 
                width={120}
                height={120}
                className="h-16 w-16 rounded-full shadow-md border-2 border-primary/20"
              />
              <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Aasha Ki Ek Kiran
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Empowering lives through education, support, and community service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-6 bg-primary rounded-full mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={link.url} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Initiatives */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-6 bg-secondary rounded-full mr-3"></span>
              Our Initiatives
            </h3>
            <ul className="space-y-3">
              {initiatives.map((initiative, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-muted-foreground hover:text-secondary transition-colors flex items-center"
                >
                  <Heart className="w-4 h-4 mr-2 text-secondary fill-secondary/20" />
                  {initiative}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-6 bg-accent rounded-full mr-3"></span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <span className="text-muted-foreground">123 Hope Street, New Delhi, India</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <a href="mailto:contact@hopefoundation.org" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@hopefoundation.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        
        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-muted-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              &copy; {currentYear} Aasha Ki Ek Kiran. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}