import Button from "../components/Button"

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <h1 style={{textAlign: "left"}} >Hello, I'm Yasir.</h1>
                <h2>Python and Web Developer</h2>
                <br/>

                <Button link="https://github.com/mdxyasir" label="mdxyasir" icon="fab fa-github" />
                <Button link="mailto:mdxyasir@gmail.com" label="mdxyasir@gmail.com" icon="fas fa-envelope" />
                <Button link="https://deviantart.com/mdxyasir" label="mdxyasir" icon="fab fa-deviantart" />        
            </div>
        </div>
    )
}

export default Home