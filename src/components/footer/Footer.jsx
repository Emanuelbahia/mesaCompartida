import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="container-footer">
      <div className="wraper-terms">
        <Link to="/we" style={{ textDecoration: "none" }}><h5 className="h5-footer">Términos y condiciones</h5></Link>
        <Link to="/we" style={{ textDecoration: "none" }}><h5 className="h5-footer">Políticas y privacidad</h5></Link>
      </div>
      <div className="wraper-icons">
        <h5 className="h4-footer">Mesa compartida - Copyright {year}</h5> 
        <BsInstagram className="icon-instagram" />
      </div>
          
    </div>
  )
} 

export default Footer;