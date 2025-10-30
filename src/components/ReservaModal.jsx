// src/components/ReservaModal.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const ReservaModal = () => {
  const { i18n, t } = useTranslation();
  const locale = i18n.language.startsWith('es') ? 'es' : 'en';

  return (
    <div
      className="modal fade"
      id="reservaModal"
      tabIndex="-1"
      aria-labelledby="reservaModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 rounded-3">
          <div className="modal-header bg-light">
            <h5 className="modal-title fw-bold" id="reservaModalLabel">
              {t('navbar.reserve') || 'Reserva'}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-0">
            <iframe
              src={`https://calendly.com/hedraspa/30min?embed_domain=localhost&embed_type=Inline&locale=${locale}`}
              width="100%"
              height="600"
              frameBorder="0"
              title="Calendly"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservaModal;
