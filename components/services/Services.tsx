"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import {
  Zap,
  Repeat2,
  Sparkles,
  AlignCenter,
  Scissors,
  Smile,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements that restore your smile and confidence.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Repeat2,
    title: "Root Canal",
    description:
      "Pain-free root canal treatment using advanced techniques to save your natural tooth.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments that brighten your smile up to 8 shades lighter.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: AlignCenter,
    title: "Braces & Aligners",
    description:
      "Traditional braces and clear aligners to straighten teeth comfortably and effectively.",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: Scissors,
    title: "Tooth Extraction",
    description:
      "Gentle, virtually painless extractions performed by our expert oral surgeons.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Smile,
    title: "Smile Makeover",
    description:
      "Complete smile transformation combining veneers, implants, and whitening.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];

function ServiceCard({
  service,
}: {
  service: (typeof services)[0];
}) {
  const Icon = service.icon;
  return (
    <div
      className={`h-full p-6 rounded-2xl border ${service.border} bg-white hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group`}
    >
      <div
        className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
      >
        <Icon className={`w-6 h-6 ${service.color}`} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {service.description}
      </p>
      <Link
        href="#appointment"
        className={`inline-flex items-center gap-1 text-sm font-medium ${service.color} hover:gap-2 transition-all`}
      >
        Book Now <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-3">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From routine check-ups to complex procedures, we offer a full range
            of dental services to keep your smile healthy and beautiful.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-10">
          <Carousel
            className="w-full"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="-ml-3">
              {services.map((service) => (
                <CarouselItem key={service.title} className="pl-3 basis-[85%]">
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="text-center">
          <Button
            render={<Link href="#appointment" />}
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm px-8"
          >
            Book a Consultation →
          </Button>
        </div>
      </div>
    </section>
  );
}
