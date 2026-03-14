"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Stethoscope, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-base font-bold text-blue-700 leading-none">
                B&B Dental
              </span>
              <span className="block text-xs text-gray-500 leading-none mt-0.5">
                Care
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
            <Button
              render={<Link href="#appointment" />}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <button
                  className="lg:hidden inline-flex items-center justify-center rounded-md p-1.5 text-gray-700 hover:bg-blue-50 transition-colors border-0 bg-transparent cursor-pointer"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0" showCloseButton={false}>
              <div className="flex flex-col h-full">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between p-4 border-b bg-blue-600">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-white" />
                    <span className="font-bold text-white text-lg">
                      B&B Dental Care
                    </span>
                  </div>
                  <SheetClose
                    render={
                      <button
                        className="inline-flex items-center justify-center rounded-md p-1.5 text-white hover:bg-blue-700 transition-colors border-0 bg-transparent cursor-pointer"
                        aria-label="Close menu"
                      />
                    }
                  >
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex-1 py-4 px-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="p-4 border-t space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 w-full py-2.5 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us Now
                  </a>
                  <Link
                    href="#appointment"
                    onClick={() => setOpen(false)}
                    className={cn(
                      buttonVariants(),
                      "w-full bg-blue-600 hover:bg-blue-700 text-white justify-center"
                    )}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
