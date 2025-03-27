"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Calendar, Users, BookOpen, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { 
  ssr: false,
  loading: () => <div className="aspect-video bg-gray-200 animate-pulse rounded-lg" />
});

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const projects = [
  {
    year: "2023",
    initiatives: [
      {
        id: 1,
        title: "School Library Project",
        description: "Established libraries in 5 government schools, benefiting over 2,000 students with access to books and digital learning resources.",
        date: "March 2023",
        stats: [
          { label: "Books Distributed", value: "5,000+" },
          { label: "Schools Covered", value: "5" },
          { label: "Students Benefited", value: "2,000+" }
        ],
        image: "/images/library-project.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: <BookOpen className="w-6 h-6" />
      },
      {
        id: 2,
        title: "Summer Food Drive",
        description: "Organized a massive food distribution drive during summer vacation, ensuring children from underprivileged families received proper nutrition.",
        date: "June 2023",
        stats: [
          { label: "Meals Provided", value: "15,000+" },
          { label: "Families Reached", value: "500+" },
          { label: "Volunteers", value: "100" }
        ],
        image: "/images/food-drive.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: <Heart className="w-6 h-6" />
      },
      {
        id: 1,
        title: "School Library Project",
        description: "Established libraries in 5 government schools, benefiting over 2,000 students with access to books and digital learning resources.",
        date: "March 2023",
        stats: [
          { label: "Books Distributed", value: "5,000+" },
          { label: "Schools Covered", value: "5" },
          { label: "Students Benefited", value: "2,000+" }
        ],
        image: "/images/library-project.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: <BookOpen className="w-6 h-6" />
      }
    ]
  },
  {
    year: "2022",
    initiatives: [
      {
        id: 3,
        title: "Digital Learning Initiative",
        description: "Provided tablets and digital learning resources to underprivileged students, enabling them to continue their education during challenging times.",
        date: "September 2022",
        stats: [
          { label: "Tablets Distributed", value: "200" },
          { label: "Students Benefited", value: "200" },
          { label: "Online Resources", value: "500+" }
        ],
        image: "/images/digital-learning.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: <Users className="w-6 h-6" />
      },
      {
        id: 4,
        title: "Winter Care Drive",
        description: "Distributed winter essentials including blankets, warm clothes, and food packages to homeless and underprivileged families.",
        date: "December 2022",
        stats: [
          { label: "Blankets Distributed", value: "1,000" },
          { label: "Families Helped", value: "300" },
          { label: "Volunteers", value: "50" }
        ],
        image: "/images/winter-drive.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: <Heart className="w-6 h-6" />
      }
    ]
  }
];

export default function PreviousCausesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/previous-work-hero.jpg"
          alt="Our previous initiatives making impact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex flex-col justify-end pb-16 px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Impact Journey</h1>
            <p className="text-xl md:text-2xl mb-8">
              Celebrating the milestones and lives transformed through our initiatives over the years.
            </p>
            <Link href="#our-work">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all group"
              >
                Explore Our Work <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase */}
      <section id="our-work" className="container mx-auto px-4 py-20">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Impact Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              See Our Work in Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch how our initiatives have created meaningful change in communities.
          </p>
        </motion.div>

      

        {/* Yearly Initiatives */}
        {projects.map((project) => (
          <motion.section
            key={project.year}
            className="mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 flex items-center"
              variants={fadeInUp}
            >
              <Calendar className="w-8 h-8 text-primary mr-3" />
              {project.year}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {project.initiatives.map((initiative) => (
                <motion.div 
                  key={initiative.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 group">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={initiative.image}
                        alt={initiative.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-start mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          {initiative.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{initiative.title}</h3>
                          <div className="flex items-center text-muted-foreground mt-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            {initiative.date}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{initiative.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        {initiative.stats.map((stat, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-muted-foreground">{stat.label}</span>
                            <span className="font-bold text-primary">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link href={`/initiatives/${initiative.id}`}>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Want to Be Part of Our Next Success Story?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us in creating more impactful initiatives that transform lives and communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/volunteer">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all group"
              >
                Volunteer With Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/donate">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Support Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}