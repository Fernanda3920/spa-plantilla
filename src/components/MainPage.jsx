import React from 'react';
import '../App.css';
import TopBar from '../components/TopBar';
import MainNavbar from '../components/MainBar';
import FeatureCardGroup from '../components/FeatureCardGroup';
import AboutSection from '../components/AboutSection';
import ServidesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const HERO_BACKGROUND_URL = 'https://cdn.pixabay.com/photo/2024/04/12/18/51/model-8692431_1280.jpg';

function MainPage() {
  return (
    <div>
      <header>
        <TopBar />
        <MainNavbar logoSrc="/spa-logo.png" />
        <Hero 
          imageUrl={HERO_BACKGROUND_URL} 
          title="SPA"
          subtitle="Centro de bienestar y relajación"
        />
      </header>

      <main>
        <FeatureCardGroup />
        <AboutSection />
        <ServidesSection />
        <Footer />
      </main>
    </div>
  );
}

export default MainPage;
