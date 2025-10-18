import { useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

// Lazy load heavy sections for better performance
const AboutSection = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const TechStackSection = lazy(() => import('./components/TechStackSection').then(m => ({ default: m.TechStackSection })));
const ProjectsSection = lazy(() => import('./components/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const ExperienceTimeline = lazy(() => import('./components/ExperienceTimeline').then(m => ({ default: m.ExperienceTimeline })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

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
        <Suspense fallback={<div className="min-h-screen" />}>
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <ExperienceTimeline />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
