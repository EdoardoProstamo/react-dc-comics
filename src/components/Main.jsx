import BlueSection from "../components/BlueSection"
import MenuElements from "./MenuElements"

const MenuTitle = ["DC COMICS", "SHOP", "DC", "SITES"];
const NavObject = ["Characters", "Comics", "Movies", "Tv", "Games", "Collectibles", "Videos", "Fans", "News", "Shop", "Shop DC", "Shop DC Collectibles", "Therms of use", "Pravicy Policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us", "Mad Magazine", "DC Kids", "DC Universe", "DC Power Visa"];

// const MenuObject = [""];

function Main() {
    return <main>
        <div className="main-contents">
            <a href="#" className="hover"><article> {'-->'} Content goes here {'<--'} </article></a>
        </div>
        <BlueSection />
        <div className="main-menu-container">
            <MenuElements MenuTitle={MenuTitle} NavObject={NavObject} />
            <div className='big-logo-container'>
            </div>
        </div>
    </main>
};

export default Main;

