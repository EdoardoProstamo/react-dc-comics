import BlueSection from "../components/BlueSection"

function Main() {
    return <main>
        <div className="main-contents">
            <a href="#" className="hover"><article> {'-->'} Content goes here {'<--'} </article></a>
        </div>
        <BlueSection />
        <div className="main-menu-container">
            <div className='main-menu'>
                <div>
                    <h3>DC COMICS</h3>
                    <ul>
                        <a href="#" className="hover"><li>Characters</li></a>
                        <a href="#" className="hover"><li>Comics</li></a>
                        <a href="#" className="hover"><li>Movies</li></a>
                        <a href="#" className="hover"><li>Tv</li></a>
                        <a href="#" className="hover"><li>Games</li></a>
                        <a href="#" className="hover"><li>Collectibles</li></a>
                        <a href="#" className="hover"><li>Videos</li></a>
                        <a href="#" className="hover"><li>News</li></a>
                    </ul>
                </div>
                <div>
                    <h3>SHOP</h3>
                    <ul>
                        <a href="#" className="hover"><li>Shop DC</li></a>
                        <a href="#" className="hover"><li>Shop DC Collectibles</li></a>
                    </ul>
                </div>
                <div>
                    <h3>DC</h3>
                    <ul>
                        <a href="#" className="hover"><li>Therms of use</li></a>
                        <a href="#" className="hover"> <li>Pravicy Policy (New)</li></a>
                        <a href="#" className="hover"><li>Ad Choices</li></a>
                        <a href="#" className="hover"><li>Advertising</li></a>
                        <a href="#" className="hover"> <li>Jobs</li></a>
                        <a href="#" className="hover"><li>Subscriptions</li></a>
                        <a href="#" className="hover"><li>Talent Workshops</li></a>
                        <a href="#" className="hover"><li>CPSC Certificates</li></a>
                        <a href="#" className="hover"><li>Ratings</li></a>
                        <a href="#" className="hover"> <li>Shop Help</li></a>
                        <a href="#" className="hover"><li>Contact Us</li></a>
                    </ul>
                </div>
                <div>
                    <h3>SITES</h3>
                    <ul>
                        <a href="#" className="hover"><li>DC</li></a>
                        <a href="#" className="hover"> <li>Mad Magazine</li></a>
                        <a href="#" className="hover"><li>DC Kids</li></a>
                        <a href="#" className="hover"><li>DC Universe</li></a>
                        <a href="#" className="hover"><li>DC Power Visa</li></a>
                    </ul>
                </div>
            </div>
            <div className='big-logo-container'>
            </div>
        </div>
    </main>
};

export default Main;

