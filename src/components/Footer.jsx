// importazione loghi social
import facebookLogo from '../img/footer-facebook.png'
import periscopeLogo from '../img/footer-periscope.png'
import pinterestLogo from '../img/footer-pinterest.png'
import twitterLogo from '../img/footer-twitter.png'
import youtubeLogo from '../img/footer-youtube.png'


function Footer() {
    return <footer>
        <div className="subscriptions-container">
            <button>SIGN-UP-NOW!</button>
            <div className="social">
                <h3>FOLLOW US</h3>
                <a href="#"><img src={facebookLogo} alt="Facebook" /></a>
                <a href="#"><img src={periscopeLogo} alt="Periscope" /></a>
                <a href="#"><img src={pinterestLogo} alt="Pinterest" /></a>
                <a href="#"><img src={twitterLogo} alt="Twitter" /></a>
                <a href="#"><img src={youtubeLogo} alt="Youtube" /></a>
            </div>
        </div>
    </footer>
};

export default Footer;