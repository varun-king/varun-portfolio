import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
import MenuBars from "../images/menu-bars.png"
import CrossMenu from "../images/cross-menu-icon.png"
import Logo from "../images/logo.png"


const NavBar = () => {
    const [open, setOpen] = useState(true)
    const [screenWidth, setScreenWidth] = useState(0)

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if(width> 800){
            setOpen(true);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => {
            window.removeEventListener("resize", trackScreenWidth);
        }
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-wraper">
                <div className="logo">
                     <Link to="/">
                        <img src={Logo} alt="Apps Winery"/>
                     </Link>
                </div>
                <div className="list-wraper">
                    <img 
                        src={MenuBars} 
                        alt="Menu bars"
                        style={{opacity: !open ? 1 : 0}}
                        onClick={()=>{
                            setOpen(!open)
                        }}
                        />
                    <img 
                        src={CrossMenu} 
                        alt="Menu Cross"
                        style={{opacity: !open ? 0 : 1}}
                        onClick={()=>{
                            setOpen(!open)
                        }}
                        />

                    <ul style={{left: open ? "0" : "-100vw"}}>
                        <li>
                            <Link 
                                to="/"
                                // onClick={handleClose}
                                // style={{color: location.pathname === "/" && "#4071f4"}}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/skills"
                                // onClick={handleClose}
                                // style={{color: location.pathname === "/skills" && "#4071f4"}}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/works"
                                // onClick={handleClose}
                                // style={{color: location.pathname === "/works" && "#4071f4"}}
                            >
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact"
                                // onClick={handleClose}
                                // style={{color: location.pathname === "/contact" && "#4071f4"}}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default NavBar
