import React from 'react';
import '../App.css';
import MainNavbar from '../components/MainBar';
import FeatureCardGroup from '../components/FeatureCardGroup';
import AboutSection from '../components/AboutSection';
import ServidesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ContactForm from './ContactForm';

const HERO_BACKGROUND_URL = 'https://cdn.pixabay.com/photo/2024/04/12/18/51/model-8692431_1280.jpg';

function MainPage() {
  return (
    <div>
      <header>
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
    <a
  href="https://wa.me/526643723351?text=Hola,%20quiero%20hacer%20una%20reservación."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "65px",
    height: "65px",
    backgroundColor: "#25D366",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    textDecoration: "none",
    zIndex: 1000,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.1)";
    e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.4)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
  }}
>
  <i className="fa-brands fa-whatsapp"></i>
</a>


        <ServidesSection />
        <ContactForm/>
        <Footer />
      </main>
    </div>
  );
}

export default MainPage;
