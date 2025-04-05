import miniLogoDc from '../img/buy-comics-digital-comics.png'
import logoTshirt from '../img/buy-comics-merchandise.png'
import logoCard from '../img/buy-comics-subscriptions.png'
import logoGps from '../img/buy-comics-shop-locator.png'
import logoVisa from '../img/buy-dc-power-visa.svg'



function Main() {
    return <main>
        <div className="main-contents">
            <span> {'-->'} Content goes here {'<--'} </span>
        </div>
        <div className="main-shop">
            <div><img src={miniLogoDc} alt="Mini Logo DC" /> DIGITAL COMICS</div>
            <div><img src={logoTshirt} alt="Logo T-Shirt" /> DC MERCHANDISE</div>
            <div><img src={logoCard} alt="Logo Subscriptions Card" /> SUBSCRIPTION</div>
            <div><img src={logoGps} alt="Logo GPS Locator" /> COMICS SHOP LOCATOR</div>
            <div><img src={logoVisa} alt="Logo Visa Card" /> DC POWER VISA</div>
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

