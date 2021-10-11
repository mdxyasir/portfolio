import Project from "../components/Project"

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <h1>Portfolio</h1>
                <br/><br/>
                <Project 
                    image="./images/portfolio/nitro-logo.png"
                    title="Nitro Request System"
                    description="A bot for the 9000 member design community, Nitro Design. It features a request system and a starboard to showcase the best creations made by designers."
                    language="Python"
                    icon="fab fa-python"
                />
                <br/><br/><br/>
                <Project 
                    image="./images/portfolio/weather-app.png"
                    title="Simple Weather App"
                    description="A simple weather app. Search a country or city and get the weather. The app is pretty useless as windows displays the weather in the taskbar but it was still fun to make."
                    language="Javascript (Electron)"
                    icon="fab fa-js"
                />
            </div>
        </div>
    )
}

export default Portfolio
