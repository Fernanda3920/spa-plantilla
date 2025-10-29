import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        Reserva tu cita
      </h1>
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-4">
        {/* Inserta tu enlace personal de Calendly aquí */}
        <InlineWidget url="https://calendly.com/hedraspa/30min" />
      </div>
    </div>
  );
};

export default CalendlyWidget;
