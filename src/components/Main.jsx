import miniLogoDc from '../img/buy-comics-digital-comics.png'
import logoTshirt from '../img/buy-comics-merchandise.png'
import logoCard from '../img/buy-comics-subscriptions.png'
import logoGps from '../img/buy-comics-shop-locator.png'
import logoVisa from '../img/buy-dc-power-visa.svg'



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
        <div className="main-menu">
            <div>
                <h3>DC COMICS</h3>
                <ul>
                    <li>Characters</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>Tv</li>
                    <li>Games</li>
                    <li>Collectibles</li>
                    <li>Videos</li>
                    <li>News</li>
                </ul>
            </div>
            <div>
                <h3>SHOP</h3>
                <ul>
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>
                </ul>
            </div>
            <div>
                <h3>DC</h3>
                <ul>
                    <li>Therms of use</li>
                    <li>Pravicy Policy (New)</li>
                    <li>Ad Choices</li>
                    <li>Advertising</li>
                    <li>Jobs</li>
                    <li>Subscriptions</li>
                    <li>Talent Workshops</li>
                    <li>CPSC Certificates</li>
                    <li>Ratings</li>
                    <li>Shop Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h3>SITES</h3>
                <ul>
                    <li>DC</li>
                    <li>Mad Magazine</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                </ul>
            </div>
        </div>
    </main>
};

export default Main;

