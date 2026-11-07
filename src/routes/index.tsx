import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Why } from "@/components/site/Why";
import { Programs } from "@/components/site/Programs";
import { SchoolAndEvents } from "@/components/site/SchoolAndEvents";
import { Testimonials } from "@/components/site/Testimonials";
import { Centres } from "@/components/site/Centres";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Little Spartans · Big Adventures For Little People | Chennai Kids Sports Academy" },
      { name: "description", content: "Chennai's playful sports & physical development academy for kids 1.5–10. Multi-sports, yoga, gymnastics & judo. Book a free demo class." },
      { property: "og:title", content: "Little Spartans · Kids Sports Academy Chennai" },
      { property: "og:description", content: "Holistic child development through sports and games. Free demo class available at 6 centres across Chennai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-dvh bg-[color:var(--color-cream)]">
      <Header />
      <main>
        <Hero />
        <Why />
        <Programs />
        <SchoolAndEvents />
        <Testimonials />
        <Centres />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
