import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Play, Star, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-linear-to-br from-blue-50 via-white to-blue-50 pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 text-sm px-3 py-1">
              ✨ Trusted by 5000+ Happy Patients
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              Your Smile,{" "}
              <span className="text-blue-600 relative">
                Our Priority
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10 C75 2, 150 2, 298 10"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience world-class dental care with our team of expert
              dentists. We combine advanced technology with a gentle touch to
              give you the healthy, beautiful smile you deserve.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Button
                render={<Link href="#appointment" />}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 text-base px-8"
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                render={<Link href="#about" />}
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base px-8"
              >
                <Play className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">5,000+</p>
                  <p className="text-xs text-gray-500">Happy Patients</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">15+ Years</p>
                  <p className="text-xs text-gray-500">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">4.9/5</p>
                  <p className="text-xs text-gray-500">Google Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-blue-400 to-blue-600 aspect-4/5 max-h-130">
                {/* Placeholder dental clinic illustration */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <div className="w-32 h-32 mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg
                      viewBox="0 0 64 64"
                      className="w-20 h-20"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M32 4C21.5 4 14 11.5 14 20c0 4 1.2 7.5 3 10.5L20 48c.5 2 2 4 4 4h4c2 0 3.5-1.5 4-4l1-8 1 8c.5 2.5 2 4 4 4h4c2 0 3.5-2 4-4l3-17.5C51.8 27.5 50 24 50 20c0-8.5-8-16-18-16z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">
                    B&B Dental Care
                  </h3>
                  <p className="text-blue-100 text-center text-sm">
                    Professional Dental Services
                  </p>
                  <div className="mt-4 flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-300 text-yellow-300"
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full" />
                <div className="absolute bottom-12 left-6 w-10 h-10 bg-white/10 rounded-full" />
              </div>

              {/* Floating card - Appointment */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-blue-100">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Next Available</p>
                  <p className="text-sm font-bold text-gray-900">Today 2:30 PM</p>
                </div>
              </div>

              {/* Floating card - Rating */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-xl shadow-xl p-4 border border-blue-100">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-900">4.9/5 Rating</p>
                <p className="text-xs text-gray-500">200+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs text-gray-400">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
