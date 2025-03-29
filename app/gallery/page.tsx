"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Grid2X2, List, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "Community Outreach",
    description: "Our team helping local communities with essential supplies",
    category: "events",
    image: "/gallery/outreach.jpg",
  },
  {
    id: 2,
    title: "Education Program",
    description: "Children learning at our educational center",
    category: "programs",
    image: "/gallery/education.jpg",
  },
  {
    id: 3,
    title: "Medical Camp",
    description: "Free health checkups for underserved communities",
    category: "events",
    image: "/gallery/medical.jpg",
  },
  {
    id: 4,
    title: "Volunteer Team",
    description: "Our dedicated volunteers making a difference",
    category: "team",
    image: "/gallery/volunteers.jpg",
  },
  {
    id: 5,
    title: "Fundraiser Gala",
    description: "Annual fundraising event for our causes",
    category: "events",
    image: "/gallery/gala.jpg",
  },
  {
    id: 6,
    title: "Food Distribution",
    description: "Providing meals to families in need",
    category: "programs",
    image: "/gallery/food.jpg",
  },
  {
    id: 7,
    title: "School Renovation",
    description: "Before and after of our school renovation project",
    category: "projects",
    image: "/gallery/school.jpg",
  },
  {
    id: 8,
    title: "Clean Water Initiative",
    description: "Installing clean water systems in villages",
    category: "projects",
    image: "/gallery/water.jpg",
  },
];

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...new Set(galleryItems.map(item => item.category))];

  const openImage = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    if (currentIndex === -1) return;

    if (direction === "prev") {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImage(filteredItems[prevIndex].id);
    } else {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Our Gallery
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore moments from our initiatives, events, and the impact we're making together.
        </p>
      </motion.div>

      {/* Filters and Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-auto md:flex-1 max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search gallery..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid2X2 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Gallery Content */}
      {filteredItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
          >
            Clear filters
          </Button>
        </motion.div>
      ) : viewMode === "grid" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openImage(item.id)}
              >
                <div className="aspect-square bg-muted relative overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                    <span className="text-muted-foreground">Image: {item.title}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-primary/10 text-primary capitalize">
                    {item.category}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openImage(item.id)}
              >
                <div className="flex flex-col sm:flex-row gap-4 p-4">
                  <div className="sm:w-1/3 aspect-video bg-muted rounded-lg overflow-hidden">
                    {/* Replace with actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                      <span className="text-muted-foreground">Image: {item.title}</span>
                    </div>
                  </div>
                  <div className="sm:w-2/3">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground mb-2">{item.description}</p>
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredItems.map((item) => {
                if (item.id !== selectedImage) return null;
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-full"
                  >
                    <Card className="relative aspect-video bg-muted overflow-hidden">
                      {/* Replace with actual image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                        <span className="text-2xl text-muted-foreground">Image: {item.title}</span>
                      </div>
                    </Card>
                    
                    <Card className="mt-4 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-2xl font-bold">{item.title}</h2>
                          <p className="text-muted-foreground">{item.description}</p>
                          <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary capitalize">
                            {item.category}
                          </span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={closeImage}
                          className="ml-4"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}

              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}