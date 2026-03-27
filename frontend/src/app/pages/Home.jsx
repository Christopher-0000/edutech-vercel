import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

// Sections
import HeroSection from "../components/home/HeroSection";
import PopularCoursesSection from "../components/home/PopularCoursesSection";
import CategoriesSection from "../components/home/CategoriesSection";
import InstructorsSection from "../components/home/InstructorsSection";
import CtaSection from "../components/home/CtaSection";
import adminService from "../services/adminService";
import courseService from "../services/courseService";


const picsum = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const INSTRUCTORS = [
  { id: 1, name: "Sarah Jones", specialty: "UI/UX Design", image: picsum("instructor1", 200, 200) },
  { id: 2, name: "Michael Chen", specialty: "Social Media", image: picsum("instructor2", 200, 200) },
  { id: 3, name: "Emily Davis", specialty: "Business Strategy", image: picsum("instructor3", 200, 200) },
  { id: 4, name: "David Wilson", specialty: "Photography", image: picsum("instructor4", 200, 200) },
  { id: 5, name: "Jessica Brown", specialty: "Music Production", image: picsum("instructor5", 200, 200) },
];

// ─── Home Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [settings, setSettings] = useState(null);
  const [featuredCourses, setFeaturedCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sData = await adminService.getSiteSettings();
        setSettings(sData || null);
        const cData = await courseService.getFeaturedCourses();
        setFeaturedCourses(cData);
      } catch (err) {
        console.error("Home fetch error:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white flex flex-col min-h-screen overflow-hidden font-outfit">
      <Header />
      <main>
        <HeroSection images={settings?.heroImages} />
        <PopularCoursesSection courses={featuredCourses} />
        <CategoriesSection />
        <InstructorsSection instructors={INSTRUCTORS} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
