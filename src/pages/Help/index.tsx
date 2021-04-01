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
    <Template isStudent={user === 'student' ? true : false} title="Help">
      <div className="containerSocialMedia">
        <div className="socialMedia">
          <a className="linksSocialMedia" href="https://t.me/QuickDate">
            <img className="socialMediaIcon" src={TelegramIcon} alt="Telegram" />
            <p className="nameSocialMedia">Telegram</p>
          </a>
          <a className="linksSocialMedia" href="mailto:main.quickdates@gmail.com?subject=Olá%20QuickDates">
            <img className="socialMediaIcon" src={GmailIcon} alt="Gmail" />
            <p className="nameSocialMedia">Gmail</p>
          </a>
          <a className="linksSocialMedia" href="https://api.whatsapp.com/send?phone=5566999357137&text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20no%20QuickDates%20em%3A">
            <img className="socialMediaIcon" src={WhatsAppIcon} alt="WhatsApp" />
            <p className="nameSocialMedia"> WhatsApp </p>
          </a>
        </div>
      </div>
    </Template>
  );
}
