/* eslint-disable no-unneeded-ternary */
import React from 'react';
import { useParams } from 'react-router-dom';
import TelegramIcon from '../../assets/telegram-icon.svg';
import GmailIcon from '../../assets/gmail-icon.svg';
import WhatsAppIcon from '../../assets/whatsapp-icon.svg';
import Template from '../../components/Template';
import './styles.css';

interface IProps{
  user:string
}

export default function Help() {
  const { user }:IProps = useParams();
  return (
    <div>
      <Template isStudent={user === 'student' ? true : false} title="Help">
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
            <p className="nameSocialMedia"> WhatsApp </p>
          </a>
        </div>
      </Template>
    </div>
  );
}
