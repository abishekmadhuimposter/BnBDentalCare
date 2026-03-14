import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "best-dentist-in-kochi",
    title: "Best Dentist in Kochi: What to Look For in 2026",
    excerpt:
      "Finding the right dentist can transform your oral health. Here is everything you need to know about choosing the best dental clinic in Kochi, Kerala.",
    category: "Tips & Advice",
    readTime: "5 min read",
    date: "March 10, 2026",
    gradient: "from-blue-400 to-blue-600",
    featured: true,
  },
  {
    id: 2,
    slug: "teeth-cleaning-benefits",
    title: "10 Surprising Benefits of Professional Teeth Cleaning",
    excerpt:
      "Regular dental cleaning does more than keep your smile bright. Discover how professional cleaning protects your health beyond just your teeth.",
    category: "Oral Health",
    readTime: "4 min read",
    date: "February 28, 2026",
    gradient: "from-cyan-400 to-blue-500",
    featured: false,
  },
  {
    id: 3,
    slug: "root-canal-cost-india",
    title: "Root Canal Treatment Cost in Kerala: Complete Guide",
    excerpt:
      "Worried about root canal costs? We break down everything — procedure details, pricing, insurance coverage and what affects the final cost.",
    category: "Treatments",
    readTime: "6 min read",
    date: "February 15, 2026",
    gradient: "from-indigo-400 to-violet-500",
    featured: false,
  },
  {
    id: 4,
    slug: "dental-implants-vs-dentures",
    title: "Dental Implants vs Dentures: Which is Right for You?",
    excerpt:
      "Comparing dental implants and dentures can be confusing. Our experts compare cost, comfort, durability and suitability to help you decide.",
    category: "Comparisons",
    readTime: "7 min read",
    date: "February 5, 2026",
    gradient: "from-teal-400 to-green-500",
    featured: false,
  },
  {
    id: 5,
    slug: "teeth-whitening-at-home-vs-clinic",
    title: "At-Home vs Professional Teeth Whitening: The Truth",
    excerpt:
      "Home whitening kits are everywhere, but are they safe? Compare results, safety and cost with professional clinic whitening.",
    category: "Cosmetic",
    readTime: "4 min read",
    date: "January 20, 2026",
    gradient: "from-orange-400 to-rose-500",
    featured: false,
  },
  {
    id: 6,
    slug: "braces-for-adults",
    title: "Braces for Adults in 2026: Are You Too Old?",
    excerpt:
      "Many adults avoid braces thinking it is too late. Learn why adult orthodontic treatment is more common and accessible than ever.",
    category: "Orthodontics",
    readTime: "5 min read",
    date: "January 10, 2026",
    gradient: "from-violet-400 to-purple-600",
    featured: false,
  },
];

export default function BlogSection() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <section id="blog" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-3">
              Dental Blog
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Dental Health Tips & News
            </h2>
          </div>
          <Button
            render={<Link href="/blog" />}
            variant="outline"
            className="border-blue-300 text-blue-600 hover:bg-blue-50 shrink-0"
          >
            View All Posts →
          </Button>
        </div>

        {/* Featured + Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Post */}
          <div className="lg:col-span-1 group">
            <div className="h-full bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
              <div
                className={`bg-linear-to-br ${featured.gradient} h-52 relative overflow-hidden flex items-center justify-center`}
              >
                <div className="text-center text-white p-6">
                  <Tag className="w-8 h-8 mx-auto mb-3 opacity-70" />
                  <p className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full inline-block">
                    Featured
                  </p>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs px-2 py-0.5">
                    {featured.category}
                  </Badge>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featured.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 flex-1 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{featured.date}</span>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="text-blue-600 text-sm font-medium hover:gap-2 flex items-center gap-1 transition-all"
                  >
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of remaining posts */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
              >
                <div
                  className={`bg-linear-to-br ${post.gradient} h-32 relative overflow-hidden flex items-end p-4`}
                >
                  <Badge className="bg-white/90 text-gray-700 hover:bg-white/90 text-xs">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3 flex-1 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 text-xs font-medium flex items-center gap-1 hover:gap-1.5 transition-all"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
