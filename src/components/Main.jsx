import BlueSection from "../components/BlueSection"
import comics from "../../data/comics";
import Hero from "../components/Hero"

function Main() {
    return <main>
        <div className="main-contents">
            <div className="jumbotron">
                <button className="hover">CURRENT SERIES</button>
            </div>
            <div className="">
                <div className="comics-container">
                    <Hero Comics={comics} />
                </div>
                <button>LOAD MORE</button>
            </div>
        </div>
        <BlueSection />
    </main>
};

export default Main;

