import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </li>
      </ul>
      <p className="text">@2024 | Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
