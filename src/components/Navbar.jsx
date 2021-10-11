import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav_menu">
                <h>Yasir</h>
                <div className="nav_links">
                    <Link to="/">Home</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </div>     
            </div>
        </div>
    )
}

export default Navbar
