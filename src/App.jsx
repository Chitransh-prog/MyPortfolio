import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import DarkVeil from './components/background/Backgrounds/DarkVeil/DarkVeil';

import Home from './pages/home';
import Skills from './pages/skills';
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <DarkVeil />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="space-y-20 pt-24 px-4">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="contact"><Contact /></section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;