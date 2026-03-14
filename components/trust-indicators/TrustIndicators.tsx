import { CheckCircle2, Microscope, Smile, DollarSign } from "lucide-react";

const indicators = [
  {
    icon: CheckCircle2,
    title: "Experienced Dentists",
    description: "15+ years of expertise in all dental procedures",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Microscope,
    title: "Modern Equipment",
    description: "State-of-the-art technology for precise treatment",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Smile,
    title: "Pain Free Treatment",
    description: "Gentle care with advanced anaesthesia techniques",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: DollarSign,
    title: "Affordable Care",
    description: "Quality dental care at transparent, fair prices",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {indicators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-5 rounded-xl hover:shadow-md transition-shadow duration-200 border border-gray-100 hover:border-blue-100"
              >
                <div
                  className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mb-3`}
                >
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-snug">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
