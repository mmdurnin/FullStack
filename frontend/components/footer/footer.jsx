import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="footer-main row">


        <div className="footer-1">
            <h1>Discover</h1>
            <p id="footer-section">Some of the restaurants on this site are real restaurants located in San Francisco. However, most of the content is a mix provided by the sources listed below. </p>
            <div id="footer-section">
                <ul>
                    <li>Inspiration: OpenTable</li>
                    <li>Reviews: Yelp (Indianapolis)</li>
                    <li>Restaurant Names: Savor Japan</li>
                    <li>Photos: Pexels</li>
                    <li>Phone Numbers/ Addresses: Fake Number/Address Generator </li>
                </ul>
            </div>
            <p className="footer-copywright" >©TableFor2 • Created by Maureen Durnin</p>
        </div>

        <div className="footer-2">
            <h1>Technologies</h1>
            <div id="footer-section">
            <ul>
                <li>PostgreSQL</li>
                <li>Ruby on Rails</li>
                <li>React / Redux</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            </div>
            <h3><Link to="https://github.com/mmdurnin/TableFor2">About the code</Link></h3>
        </div>

        <div className="footer-3 column">
            <h1>TableFor2</h1>
            <div id="footer-section">
                <p>TableFor2 is inspired by <Link to="https://www.opentable.com/">OpenTable</Link>. </p>
                <div className="row">

                </div>
            </div>
            <div className="footer-icons column">
                <Link to="https://angel.co/maureen-durnin?public_profile=1">
                    <i class="footer-icon-circle fab fa-angellist"></i>
                    <h3>AngelList</h3>
                </Link>
                <Link to="https://www.linkedin.com/in/maureen-durnin-19b73a198/">
                    <i class="footer-icon-circle fab fa-linkedin-in"></i>
                    <h3>LinkedIn</h3>
                </Link>
                <Link to="https://github.com/mmdurnin">
                    <i class="footer-icon fab fa-github"></i>
                    <h3>GitHub</h3>
                    </Link>
                <Link to="maureendurnin.com" >
                    <i class="footer-icon fas fa-user-circle"></i>
                    <h3>Developer Portfolio</h3>
                </Link>
            </div>
        </div>
    </div>
)

export default Footer;