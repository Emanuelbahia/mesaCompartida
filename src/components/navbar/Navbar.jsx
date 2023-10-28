import Menu from "../menu/Menu";
import "./navbar.css";

function Navbar() {

  return (
    <div className="container-navbar"> 
      <Menu/>
      <div className="wraper-description">
        <h3 className="name-dinner">¿Querés vivir una experiencia gastronómica única y especial?</h3>
        <h4 className="description-dinner">
          Te invitamos a disfrutar de una &quot;Mesa Compartida&quot; en casas particulares.
        </h4>
      </div>
    </div>
  )
}

export default Navbar;