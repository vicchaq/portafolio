import React from 'react';
import "./Footer.css";
import "../images/whas.jpg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
            <h1>Yasna Lillo</h1>
            <p>Argentina - Mendoza</p>
            </div>
            <div className="footer-contact">
                <h3>Contactame</h3>
                <p>Y pongamonos manos a la obra</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                </div>
                <div className="sns-links">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
