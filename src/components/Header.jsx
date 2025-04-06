import Logo from "./Logo"


function Header() {
    return <header>
        <div>
            <a href="#" className="hover"><Logo /></a>
            <nav>
                <ul>
                    <li> <a href="#" className="hover">CHARACTERS</a> </li>
                    <li> <a href="#" className="bb-blue hover">COMICS</a> </li>
                    <li> <a href="#" className="hover">MOVIES</a> </li>
                    <li> <a href="#" className="hover">TV</a> </li>
                    <li> <a href="#" className="hover">GAMES</a> </li>
                    <li> <a href="#" className="hover">COLLECTIBLES</a> </li>
                    <li> <a href="#" className="hover">VIDEOS</a> </li>
                    <li> <a href="#" className="hover">FANS</a> </li>
                    <li> <a href="#" className="hover">NEWS</a> </li>
                    <li> <a href="#" className="hover">SHOP</a> </li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header;