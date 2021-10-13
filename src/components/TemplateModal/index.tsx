import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import closeIcon from '../../assets/close.svg';

import './styles.css';

export default function TemplateModal({ children, showCloseIconModal = true, setShowModal }: any) {
  return (
    <div className="overlay">
      <div className="contentAnimation">
        <div className="modal-container">
          {showCloseIconModal
        && <img src={closeIcon} alt="fechar" className="close-icon" onClick={() => setShowModal(false)} />}
          <div className="content">
            {children}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
