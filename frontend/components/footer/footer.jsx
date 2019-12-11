import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="footer-main">
        <Link to="https://angel.co/maureen-durnin?public_profile=1"><i class="footer-icon-circle fab fa-angellist"></i></Link>
        <Link to="https://www.linkedin.com/in/maureen-durnin-19b73a198/"><i class="footer-icon-circle fab fa-linkedin-in"></i></Link>
        <Link to="https://github.com/mmdurnin"><i class="footer-icon fab fa-github"></i></Link>
        <Link to="maureendurnin.com" ><i class="footer-icon fas fa-user-circle"></i></Link>
    </div>
)

export default Footer;