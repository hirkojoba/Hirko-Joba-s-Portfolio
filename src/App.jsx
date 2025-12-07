import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import BlurLayers from './components/BlurLayers';

/**
 * MAIN APP COMPONENT
 *
 * This is the root component that combines all sections.
 * The order of components below determines the order they appear on the page.
 *
 * TO CUSTOMIZE:
 * - Reorder components to change section order
 * - Remove components you don't want to display
 * - Add new custom sections here
 */

function App() {
  return (
    <div className="app">
      {/* Custom Cursor - Desktop only */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section - Landing/Introduction */}
      <Hero />

      {/* Projects Section - Case study cards */}
      <Projects />

      {/* About Section - Your story and strengths */}
      <About />

      {/* Skills Section - Technical skills grid */}
      <Skills />

      {/* Contact Section - Get in touch */}
      <Contact />

      {/* Scroll to Top Button - Appears on scroll */}
      <ScrollToTop />

      {/* Blur Layers - Depth of field effect */}
      <BlurLayers />
    </div>
  );
}

export default App;
