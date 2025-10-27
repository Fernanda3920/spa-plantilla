import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ContactForm from './components/ContactForm';
import ServiceDetail from './components/pages/ServiceDetail';
import WhatsAppReservation from './components/WhatsAppReservation';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<MainPage />} />
        <Route path="/servicio/:id" element={<ServiceDetail />} />
        <Route path="/contacto" element={<ContactForm/>} />
        <Route path="/reserva-whatsapp" element={<WhatsAppReservation />} />
        {/* Ejemplo de otra ruta */}
      </Routes>
    </Router>
  );
}

export default App;
