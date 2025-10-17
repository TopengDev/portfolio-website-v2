import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Easter egg console message
    console.log(
      '%c🚀 TopengDev Portfolio',
      'font-size: 20px; font-weight: bold; background: linear-gradient(90deg, #00FFFF, #007AFF); -webkit-background-clip: text; color: transparent;'
    );
    console.log(
      '%c👋 Hey there! Thanks for checking out the code. Let\'s build something amazing together!',
      'font-size: 14px; color: #00FFFF;'
    );
    console.log(
      '%c📧 Reach out: christopher@topengdev.com',
      'font-size: 12px; color: #ACACAC;'
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#EDEDED] overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceTimeline />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
