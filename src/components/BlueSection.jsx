// importazione mini loghi
import miniLogoDc from '../img/buy-comics-digital-comics.png'
import logoTshirt from '../img/buy-comics-merchandise.png'
import logoCard from '../img/buy-comics-subscriptions.png'
import logoGps from '../img/buy-comics-shop-locator.png'
import logoVisa from '../img/buy-dc-power-visa.svg'


function BlueSection() {
    return <div className="main-shop">
        <div className='mini-logos-container hover'>
            <a href="#"> <img className='mini-logos' src={miniLogoDc} alt="Mini Logo DC" /> </a>
            <a href="#"><article>DIGITAL COMICS</article></a>
        </div>
        <div className='mini-logos-container hover'>
            <a href="#"><img className='mini-logos' src={logoTshirt} alt="Logo T-Shirt" /></a>
            <a href="#"><article>DC MERCHANDISE</article></a>
        </div>
        <div className='mini-logos-container hover'>
            <a href="#"><img className='mini-logos' src={logoCard} alt="Logo Subscriptions Card" /></a>
            <a href="#"><article>SUBSCRIPTION</article></a>
        </div>
        <div className='mini-logos-container hover'>
            <a href="#"><img className='mini-logos' src={logoGps} alt="Logo GPS Locator" /></a>
            <a href="#"><article>COMICS SHOP LOCATOR</article></a>
        </div>
        <div className='mini-logos-container hover'>
            <a href="#"><img className='mini-logos' src={logoVisa} alt="Logo Visa Card" /></a>
            <a href="#"><article>DC POWER VISA</article></a>
        </div>
    </div>
};

export default BlueSection;