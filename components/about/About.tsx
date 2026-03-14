import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Heart, Target, Trophy } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-First Care",
    description: "Every treatment is tailored to your unique needs and comfort.",
  },
  {
    icon: Target,
    title: "Precision & Excellence",
    description: "We use cutting-edge technology for accurate diagnoses.",
  },
  {
    icon: Trophy,
    title: "Award-Winning Team",
    description: "Recognized among the top dental clinics in the region.",
  },
];

const achievements = [
  "Over 5,000 successful treatments",
  "15+ years of clinical experience",
  "Certified specialist dentists",
  "ISO certified dental clinic",
];

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-3">
            About Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Caring for Your Smile Since 2010
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            We are a team of passionate dental professionals committed to
            delivering exceptional oral healthcare in a warm, welcoming
            environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="rounded-2xl overflow-hidden bg-linear-to-br from-blue-500 to-blue-700 aspect-4/3 shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      viewBox="0 0 64 64"
                      className="w-14 h-14"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="32" cy="20" r="10" />
                      <path d="M10 54c0-12.15 9.85-22 22-22s22 9.85 22 22" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold">Dr. B. Sharma, MDS</p>
                  <p className="text-blue-200 text-sm mt-1">
                    Chief Dental Officer
                  </p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-5 rounded-2xl shadow-xl text-center">
                <p className="text-3xl font-bold leading-none">15+</p>
                <p className="text-sm text-blue-100 mt-1">Years Exp.</p>
              </div>
            </div>

            {/* Secondary image */}
            <div className="absolute -top-4 -left-4 hidden md:flex md:items-center md:justify-center w-40 h-40 rounded-xl overflow-hidden border-4 border-white shadow-xl bg-linear-to-br from-cyan-400 to-blue-500">
              <div className="flex flex-col items-center justify-center h-full text-white">
                <Trophy className="w-8 h-8 mb-1" />
                <p className="text-xs font-semibold text-center px-2">
                  Award Winning
                </p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Choose B&B Dental Care?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At B&B Dental Care, we believe everyone deserves a healthy,
              confident smile. Our experienced team of specialists uses the
              latest dental technology to provide comprehensive care — from
              routine check-ups to complex restorative procedures.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are committed to creating a stress-free experience for every
              patient, combining clinical excellence with genuine compassion to
              deliver outcomes that transform lives.
            </p>

            {/* Achievements list */}
            <ul className="space-y-2 mb-8">
              {achievements.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="p-4 bg-blue-50 rounded-xl border border-blue-100"
                  >
                    <Icon className="w-5 h-5 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {v.title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-snug">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <Button
              render={<Link href="#appointment" />}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
            >
              Meet Our Team →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
