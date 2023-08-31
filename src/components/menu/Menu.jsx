import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import logo from "../../assets/logo.png";
import "./menu.css";

function Menu() {

    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(!clicked);
    }

    const handleLogOut = () => {
        auth.logout();
    }

    const auth = useAuth();
    const userOnline = auth.user;

    return ( 
        <div className="wraper-menu-logo">  
            <Link className="wraper-logo" to="/">
                <img className="logo" src={ logo } />
                <h4 className="logo-title">Mesa compartida</h4>
            </Link>
            <div onClick={handleClick} className={`icon nav-icon-5 ${clicked ? "open" : ""} `}  >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`div-links ${clicked ? "active" : ""} `}>
                 <Link className={`navbar-link  ${clicked ? "open" : ""} `} onClick={handleClick}  to="/we">          
                    <h4 className="p-link">¿Que somos?</h4>         
                </Link> 
                <Link className={`navbar-link  ${clicked ? "open" : ""} `} onClick={handleClick}  to="/beHost">         
                    <h4 className="p-link">Sé anfitrión</h4>         
                </Link>
                <Link className={`navbar-link  ${clicked ? "open" : ""} `} onClick={handleClick}  to="/register">         
                    <h4 className="p-link">Sé comensal</h4>         
                </Link>
                <Link className={`navbar-link  ${clicked ? "open" : ""} `} onClick={handleClick}  to="/dinner">          
                    <h4 className="p-link">Experienia gastronómica</h4>         
                </Link>              
                <Link className={`navbar-link  ${clicked ? "open" : ""} `} onClick={handleClick}  to="/gift">        
                    <h4 className="p-link">Tarjetas regalo</h4>          
                </Link>                                
                <Link className={`navbar-link  ${clicked ? "open" : ""} `} onClick={handleClick}  to="/login">         
                    <h4 className="p-link">Log in</h4>         
                </Link>
            </div> 
            <div className="navbar-menu">
                <Link className="link-navbar-pc" to="/we">¿Que somos?</Link>
                <Link className="link-navbar-pc" to="/beHost">Sé anfitrión</Link>
                <Link className="link-navbar-pc m-r" to="/register">Sé comensal</Link>            
                <Link className="link-navbar-pc" to="/dinner">Experienia gastronómica</Link>             
                <Link className="link-navbar-pc" to="/gift">Tarjeta regalo</Link>
                {
                    !userOnline ? 
                    <Link className="link-navbar-pc" to="/login">Log in</Link>
                    :
                    <button className="button-logOut" onClick={ () => handleLogOut() }>Log out</button>
                }           
            </div>
        </div> 
     );
}

export default Menu;