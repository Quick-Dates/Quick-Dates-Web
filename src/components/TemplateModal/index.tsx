import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import closeIcon from '../../assets/close.svg';

import './styles.css';

export default function TemplateModal({ children, showCloseModal = true, close = false }: any) {
  const [hideModal, setHideModal] = useState(false);
  return (
    <div className={hideModal || close ? 'hide' : 'overlay'}>
      <div className="contentAnimation">
        <div className="modal-container">
          {showCloseModal
        && <img src={closeIcon} alt="fechar" className="close-icon" onClick={() => setHideModal(true)} />}
          <div className="content">
            {children}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
