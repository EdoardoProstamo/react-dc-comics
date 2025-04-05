import Logo from "./Logo"


function Header() {
    return <header>
        <div>
            <Logo />
            <nav>
                <ul>
                    <li> <a href="#">Characters</a> </li>
                    <li> <a href="#" className="bb-blue">Comics</a> </li>
                    <li> <a href="#">Movies</a> </li>
                    <li> <a href="#">Tv</a> </li>
                    <li> <a href="#">Games</a> </li>
                    <li> <a href="#">Collectibles</a> </li>
                    <li> <a href="#">Videos</a> </li>
                    <li> <a href="#">Fans</a> </li>
                    <li> <a href="#">News</a> </li>
                    <li> <a href="#">Shop</a> </li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header;