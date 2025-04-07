import BlueSection from "../components/BlueSection"
import comics from "../../data/comics";
import Hero from "../components/Hero"

function Main() {
    return <main>
        <div className="main-contents">
            <div className="jumbotron">
                <article>CURRENT SERIES</article>
            </div>
            <div>
                <Hero Comics={comics} />
                <button>LOAD MORE</button>
            </div>
        </div>
        <BlueSection />
    </main>
};

export default Main;

