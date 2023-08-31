import Menu from "../menu/Menu";
import "./navbar.css";

function Navbar() {

  return (
    <div className="container-navbar"> 
      <Menu/>
      <div className="wraper-description">
        <h3 className="name-dinner">¿Quieres vivir una experiencia culinaria única?</h3>
        <h4 className="description-dinner">
          Te invitamos a disfrutar de comidas elaboradas y gourmet en casas particulares cuidadosamente seleccionadas.
        </h4>
      </div>
    </div>
  )
}

export default Navbar;