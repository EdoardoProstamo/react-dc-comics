function Hero(props) {
    const comics = props.Comics;
    return (
        <>
            {comics.map(element =>
                <div key={element.id} className="hero-container">
                    <img className="hero" src={element.thumb} alt={element.title} />
                    <h4>{element.series}</h4>
                </div>
            )}

        </>
    )
}

export default Hero;