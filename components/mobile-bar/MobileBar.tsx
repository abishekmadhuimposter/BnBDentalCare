"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";

export default function MobileBar() {
  const whatsappMessage = `Hello! I would like to book an appointment at B&B Dental Care.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white border-t border-gray-200 shadow-xl grid grid-cols-3 divide-x divide-gray-200">
        {/* Call */}
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center justify-center py-3 gap-1 text-blue-600 hover:bg-blue-50 transition-colors active:bg-blue-100"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[11px] font-medium">Call</span>
        </a>

        {/* Book Appointment - Center (highlighted) */}
        <Link
          href="#appointment"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-blue-600 text-white hover:bg-blue-700 transition-colors active:bg-blue-800"
        >
          <CalendarCheck className="w-5 h-5" />
          <span className="text-[11px] font-medium">Book Now</span>
        </Link>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 text-green-600 hover:bg-green-50 transition-colors active:bg-green-100"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
