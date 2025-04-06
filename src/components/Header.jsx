import Logo from "./Logo"
import NavElements from "./NavElements";

const NavObject = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];


function Header() {
    return <header>
        <div>
            <a href="#" className="hover"><Logo /></a>
            <nav>
                <NavElements NavObject={NavObject} />
            </nav>
        </div>
    </header>
}

export default Header;