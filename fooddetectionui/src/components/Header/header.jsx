import './Header.css'
import logo from './logoFR.png'
const Header = () => {
    return <div className="header">
        <header class="header-container">
                <img src={logo} alt="logo" height="30px"className="header-heading" ></img>
            <ul class="nav nav-pills header-feature">
                <li class="feature-list"><a href="#"  class="nav-link" aria-current="page">Home</a></li>
                <li class="nav-item feature-list"><a  href="#service-section" class="nav-link feature-a">Features</a></li>
                <li class="nav-item feature-list"><a href="#about-section" class="nav-link feature-a">About</a></li>
                <li class="nav-item feature-list"><a href="#contact-section" class="nav-link feature-a">Contact Us</a></li>
                <li class="nav-item feature-list"><a href="#faq-section" class="nav-link feature-a">FAQs</a></li>
            </ul>
        </header>
    </div>
}

export default Header;