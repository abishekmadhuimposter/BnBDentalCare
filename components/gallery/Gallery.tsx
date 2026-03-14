"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryItems = [
  {
    id: 1,
    treatmentType: "Dental Implants",
    beforeBg: "from-gray-400 to-gray-500",
    afterBg: "from-blue-400 to-blue-600",
    beforeLabel: "Missing Tooth",
    afterLabel: "Natural Implant",
  },
  {
    id: 2,
    treatmentType: "Teeth Whitening",
    beforeBg: "from-yellow-400 to-orange-400",
    afterBg: "from-white to-blue-100",
    beforeLabel: "Stained / Yellow",
    afterLabel: "Bright White",
  },
  {
    id: 3,
    treatmentType: "Smile Makeover",
    beforeBg: "from-gray-400 to-gray-600",
    afterBg: "from-cyan-400 to-blue-500",
    beforeLabel: "Chipped & Uneven",
    afterLabel: "Perfect Smile",
  },
  {
    id: 4,
    treatmentType: "Braces",
    beforeBg: "from-gray-300 to-gray-500",
    afterBg: "from-blue-300 to-indigo-500",
    beforeLabel: "Crooked Teeth",
    afterLabel: "Aligned & Straight",
  },
  {
    id: 5,
    treatmentType: "Veneers",
    beforeBg: "from-orange-300 to-yellow-500",
    afterBg: "from-blue-200 to-blue-500",
    beforeLabel: "Discoloured",
    afterLabel: "Porcelain Veneers",
  },
];

function GalleryCard({ item }: { item: (typeof galleryItems)[0] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="grid grid-cols-2">
        {/* Before */}
        <div className="relative">
          <div
            className={`bg-linear-to-br ${item.beforeBg} aspect-square flex items-center justify-center`}
          >
            <div className="text-center text-white p-4">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                <svg
                  viewBox="0 0 64 64"
                  className="w-10 h-10"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32 4C21.5 4 14 11.5 14 20c0 4 1.2 7.5 3 10.5L20 48c.5 2 2 4 4 4h4c2 0 3.5-1.5 4-4l1-8 1 8c.5 2.5 2 4 4 4h4c2 0 3.5-2 4-4l3-17.5C51.8 27.5 50 24 50 20c0-8.5-8-16-18-16z" />
                </svg>
              </div>
              <p className="text-xs font-semibold">{item.beforeLabel}</p>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
            Before
          </div>
        </div>

        {/* After */}
        <div className="relative">
          <div
            className={`bg-linear-to-br ${item.afterBg} aspect-square flex items-center justify-center`}
          >
            <div className="text-center text-white p-4">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                <svg
                  viewBox="0 0 64 64"
                  className="w-10 h-10"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32 4C21.5 4 14 11.5 14 20c0 4 1.2 7.5 3 10.5L20 48c.5 2 2 4 4 4h4c2 0 3.5-1.5 4-4l1-8 1 8c.5 2.5 2 4 4 4h4c2 0 3.5-2 4-4l3-17.5C51.8 27.5 50 24 50 20c0-8.5-8-16-18-16z" />
                </svg>
              </div>
              <p className="text-xs font-semibold">{item.afterLabel}</p>
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
            After
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="p-3 text-center">
        <p className="font-semibold text-gray-900 text-sm">{item.treatmentType}</p>
        <p className="text-xs text-gray-500 mt-0.5">Real Patient Results</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-3">
            Smile Gallery
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Smile Transformations
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            See the incredible before & after results our patients have achieved
            with our treatments.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-3">
              {galleryItems.map((item) => (
                <CarouselItem key={item.id} className="pl-3 basis-[90%]">
                  <GalleryCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          * Results may vary. All images are from actual patient treatments with consent.
        </p>
      </div>
    </section>
  );
}
