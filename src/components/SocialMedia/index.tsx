import React, { FC } from 'react';
import TelegramIcon from '../../assets/telegram-icon.svg';
import GmailIcon from '../../assets/gmail-icon.svg';
import WhatsAppIcon from '../../assets/whatsapp-icon.svg';
import './styles.css';

const SocialMedia: FC = () => (
  <div className="socialMedia">
    <a className="linksSocialMedia" href="https://web.telegram.org/#/login">
      <img className="socialMediaIcon" src={TelegramIcon} alt="Telegram" />
      <p className="nameSocialMedia">Telegram</p>
    </a>
    <a className="linksSocialMedia" href="https://www.gmail.com/mail/help/intl/en/about.html?utm_expid=...">
      <img className="socialMediaIcon" src={GmailIcon} alt="Gmail" />
      <p className="nameSocialMedia">Gmail</p>
    </a>
    <a className="linksSocialMedia" href="https://www.whatsapp.com/?lang=pt_br">
      <img className="socialMediaIcon" src={WhatsAppIcon} alt="WhatsApp" />
      <p className="nameSocialMedia">WhatsApp</p>
    </a>
  </div>
);

export default SocialMedia;
