"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarCheck,
  Phone,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const services = [
  "Dental Implants",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Braces & Aligners",
  "Tooth Extraction",
  "Smile Makeover",
  "Dental Check-up",
  "Other",
];

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const whatsappMessage = `Hello! I would like to book an appointment at B&B Dental Care.%0AName: ${encodeURIComponent(form.name || "Patient")}%0AService: ${encodeURIComponent(form.service || "General Check-up")}%0ADate: ${encodeURIComponent(form.date || "Flexible")}`;

  return (
    <section
      id="appointment"
      className="py-16 lg:py-24 bg-linear-to-br from-blue-600 to-blue-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Info */}
          <div className="text-white">
            <Badge className="bg-white/20 text-white hover:bg-white/20 mb-4 border border-white/30">
              Book Appointment
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">
              Ready for a Healthier Smile?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Schedule your appointment online or contact us directly. We
              confirm your booking within 24 hours.
            </p>

            {/* Contact options */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Call Us</p>
                  <a
                    href="tel:+919876543210"
                    className="text-white font-semibold text-lg hover:text-blue-200 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">WhatsApp</p>
                  <a
                    href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold text-lg hover:text-green-300 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Working Hours</p>
                  <p className="text-white font-semibold">
                    Mon – Sat: 9 AM – 8 PM
                  </p>
                  <p className="text-blue-200 text-sm">Sunday: 10 AM – 2 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Appointment Requested!
                </h3>
                <p className="text-gray-500 mb-6">
                  Thank you! We will confirm your appointment within 24 hours
                  via call or WhatsApp.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Book Another
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Book Your Appointment
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <Input
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="border-gray-200 focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="border-gray-200 focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Required *
                    </label>
                    <Select
                      onValueChange={(val: unknown) =>
                        handleChange("service", typeof val === "string" ? val : "")
                      }
                    >
                      <SelectTrigger className="border-gray-200 focus:border-blue-400">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      value={form.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="border-gray-200 focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message (Optional)
                    </label>
                    <Textarea
                      placeholder="Describe your dental concern or any special requests..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="border-gray-200 focus:border-blue-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-semibold shadow-md"
                  >
                    {loading ? (
                      "Booking..."
                    ) : (
                      <>
                        <CalendarCheck className="w-5 h-5 mr-2" />
                        Confirm Appointment
                      </>
                    )}
                  </Button>

                  {/* WhatsApp alternative */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-3 bg-white text-gray-400">or</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 transition-colors text-base"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.163.576 4.187 1.581 5.932L0 24l6.233-1.557A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.962 0-3.797-.535-5.374-1.465l-.385-.228-3.7.924.999-3.621-.252-.398A9.943 9.943 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Book via WhatsApp
                  </a>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
