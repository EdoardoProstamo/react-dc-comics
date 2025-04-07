// importazione loghi social
import facebookLogo from '../img/footer-facebook.png'
import periscopeLogo from '../img/footer-periscope.png'
import pinterestLogo from '../img/footer-pinterest.png'
import twitterLogo from '../img/footer-twitter.png'
import youtubeLogo from '../img/footer-youtube.png'

import MenuElements from "./MenuElements"

// array
const MenuTitle = ["DC COMICS", "SHOP", "DC", "SITES"];
const NavObject = ["Characters", "Comics", "Movies", "Tv", "Games", "Collectibles", "Videos", "Fans", "News", "Shop", "Shop DC", "Shop DC Collectibles", "Therms of use", "Pravicy Policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us", "Mad Magazine", "DC Kids", "DC Universe", "DC Power Visa"];


function Footer() {
    return <footer>
        <div className="main-menu-container">
            <MenuElements MenuTitle={MenuTitle} NavObject={NavObject} />
            <div className='big-logo-container'>
            </div>
        </div>
        <div className="subscriptions-container">
            <button className='hover'>SIGN-UP-NOW!</button>
            <div className="social">
                <h3>FOLLOW US</h3>
                <a href="#" className="hover"><img src={facebookLogo} alt="Facebook" /></a>
                <a href="#" className="hover"><img src={periscopeLogo} alt="Periscope" /></a>
                <a href="#" className="hover"><img src={pinterestLogo} alt="Pinterest" /></a>
                <a href="#" className="hover"><img src={twitterLogo} alt="Twitter" /></a>
                <a href="#" className="hover"><img src={youtubeLogo} alt="Youtube" /></a>
            </div>
        </div>
    </footer>
};

export default Footer;