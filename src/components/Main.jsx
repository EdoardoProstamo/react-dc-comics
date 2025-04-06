// importazione mini loghi
import miniLogoDc from '../img/buy-comics-digital-comics.png'
import logoTshirt from '../img/buy-comics-merchandise.png'
import logoCard from '../img/buy-comics-subscriptions.png'
import logoGps from '../img/buy-comics-shop-locator.png'
import logoVisa from '../img/buy-dc-power-visa.svg'
import bigLogo from '../img/dc-logo-bg.png'


function Main() {
    return <main>
        <div className="main-contents">
            <a href="#"><article> {'-->'} Content goes here {'<--'} </article></a>
        </div>
        <div className="main-shop">
            <div className='mini-logos-container'>
                <a href="#"> <img className='mini-logos' src={miniLogoDc} alt="Mini Logo DC" /> </a>
                <a href="#"><article>DIGITAL COMICS</article></a>
            </div>
            <div className='mini-logos-container'>
                <a href="#"><img className='mini-logos' src={logoTshirt} alt="Logo T-Shirt" /></a>
                <a href="#"><article>DC MERCHANDISE</article></a>
            </div>
            <div className='mini-logos-container'>
                <a href="#"><img className='mini-logos' src={logoCard} alt="Logo Subscriptions Card" /></a>
                <a href="#"><article>SUBSCRIPTION</article></a>
            </div>
            <div className='mini-logos-container'>
                <a href="#"><img className='mini-logos' src={logoGps} alt="Logo GPS Locator" /></a>
                <a href="#"><article>COMICS SHOP LOCATOR</article></a>
            </div>
            <div className='mini-logos-container'>
                <a href="#"><img className='mini-logos' src={logoVisa} alt="Logo Visa Card" /></a>
                <a href="#"><article>DC POWER VISA</article></a>
            </div>
        </div>
        <div className="main-menu-container">
            <div className='main-menu'>
                <div>
                    <h3>DC COMICS</h3>
                    <ul>
                        <a href="#"><li>Characters</li></a>
                        <a href="#"><li>Comics</li></a>
                        <a href="#"><li>Movies</li></a>
                        <a href="#"><li>Tv</li></a>
                        <a href="#"><li>Games</li></a>
                        <a href="#"><li>Collectibles</li></a>
                        <a href="#"><li>Videos</li></a>
                        <a href="#"><li>News</li></a>
                    </ul>
                </div>
                <div>
                    <h3>SHOP</h3>
                    <ul>
                        <a href="#"><li>Shop DC</li></a>
                        <a href="#"><li>Shop DC Collectibles</li></a>
                    </ul>
                </div>
                <div>
                    <h3>DC</h3>
                    <ul>
                        <a href="#"><li>Therms of use</li></a>
                        <a href="#"> <li>Pravicy Policy (New)</li></a>
                        <a href="#"><li>Ad Choices</li></a>
                        <a href="#"><li>Advertising</li></a>
                        <a href="#"> <li>Jobs</li></a>
                        <a href="#"><li>Subscriptions</li></a>
                        <a href="#"><li>Talent Workshops</li></a>
                        <a href="#"><li>CPSC Certificates</li></a>
                        <a href="#"><li>Ratings</li></a>
                        <a href="#"> <li>Shop Help</li></a>
                        <a href="#"><li>Contact Us</li></a>
                    </ul>
                </div>
                <div>
                    <h3>SITES</h3>
                    <ul>
                        <a href="#"><li>DC</li></a>
                        <a href="#"> <li>Mad Magazine</li></a>
                        <a href="#"><li>DC Kids</li></a>
                        <a href="#"><li>DC Universe</li></a>
                        <a href="#"><li>DC Power Visa</li></a>
                    </ul>
                </div>
            </div>
            <div className='big-logo-container'>
            </div>
        </div>
    </main>
};

export default Main;

