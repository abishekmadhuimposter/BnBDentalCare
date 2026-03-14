"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Menon",
    initials: "PM",
    location: "Kochi",
    rating: 5,
    text: "Absolutely amazing experience! Dr. Sharma made my dental implant procedure completely painless. The clinic is so clean and modern. I highly recommend B&B Dental Care to everyone.",
    treatment: "Dental Implants",
    avatarColor: "bg-blue-200",
  },
  {
    id: 2,
    name: "Rahul Nair",
    initials: "RN",
    location: "Ernakulam",
    rating: 5,
    text: "I was terrified of root canals but the team here was so gentle and reassuring. No pain at all! The staff is incredibly friendly and professional. Best dental clinic in Kerala.",
    treatment: "Root Canal",
    avatarColor: "bg-indigo-200",
  },
  {
    id: 3,
    name: "Ananya Thomas",
    initials: "AT",
    location: "Aluva",
    rating: 5,
    text: "My smile makeover is unbelievable! I never thought I could look this good. The dentists really took the time to understand what I wanted. Worth every penny!",
    treatment: "Smile Makeover",
    avatarColor: "bg-cyan-200",
  },
  {
    id: 4,
    name: "Suresh Kumar",
    initials: "SK",
    location: "Thrissur",
    rating: 5,
    text: "Very professional and caring staff. My teeth whitening results are stunning — multiple people have complimented my smile. The appointment booking was quick and easy.",
    treatment: "Teeth Whitening",
    avatarColor: "bg-teal-200",
  },
  {
    id: 5,
    name: "Meera Pillai",
    initials: "MP",
    location: "Kottayam",
    rating: 5,
    text: "Got braces for my daughter here. The team was incredibly patient with her and explained everything clearly. She loves visiting the clinic! Great experience overall.",
    treatment: "Braces",
    avatarColor: "bg-violet-200",
  },
  {
    id: 6,
    name: "Arjun Vijay",
    initials: "AV",
    location: "Kozhikode",
    rating: 5,
    text: "State-of-the-art equipment and the most gentle dental tech I have ever experienced. Tooth extraction was quick with no pain. Already recommended to my entire family.",
    treatment: "Tooth Extraction",
    avatarColor: "bg-rose-200",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="h-full bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
      <Quote className="w-8 h-8 text-blue-200 mb-3 shrink-0" />
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
        &quot;{testimonial.text}&quot;
      </p>
      <div className="border-t border-gray-100 pt-4">
        <StarRating count={testimonial.rating} />
        <div className="flex items-center gap-3 mt-3">
          <Avatar className="w-10 h-10">
            <AvatarFallback
              className={`${testimonial.avatarColor} text-gray-700 font-semibold text-sm`}
            >
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-900 text-sm">
              {testimonial.name}
            </p>
            <p className="text-xs text-gray-500">
              {testimonial.treatment} · {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-white text-blue-700 hover:bg-white mb-3 shadow-sm">
            Patient Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here is what our patients say
            about their experience at B&B Dental Care.
          </p>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="font-bold text-gray-900">4.9 / 5</span>
            <span className="text-gray-500 text-sm">· 200+ Google Reviews</span>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-3">
              {testimonials.map((t) => (
                <CarouselItem key={t.id} className="pl-3 basis-[88%]">
                  <TestimonialCard testimonial={t} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
