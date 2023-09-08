import wine from "../../assets/reg5.jpg";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Menu from "../menu/Menu";
import "./host.css";
import Footer from "../footer/Footer";

function Host() {

    const formGift = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_ey78bg7', 'template_bizzg3p', formGift.current, 'dRlDu59wtjIMhCw_X')
        .then((result) => {
            console.log(result.text);
            formGift.current.reset(); //para resetear el formulario
        }, (error) => {
            console.log(error.text);
        });
    };

    return ( 
        <div className="container-page-host">
            <div className="wraper-header-host">
                    <Menu/>
                    <h3 className="h3-header-host">
                        Convierte tu hobby y tu pasión en una fuente de dinero extra !!
                    </h3>
            </div>
            <div className="description-host">
                <h3>Crea eventos gastronómicos</h3>
                <h4>
                    Si eres un apasionado de la cocina, despierta el chef que llevas dentro. 
                    Nuestra plataforma te brinda la oportunidad de mostrar tu talento culinario
                    y convertir tu hogar en un auténtico destino gastronómico! <br/> 
                    Organiza eventos inolvidables en tu casa, donde los comensales vivirán una experiencia culinaria distinta y fuera de lo común.
                </h4>
                <ul>
                    <li>Gana dinero compartiendo tu pasión y cocinando lo que te gusta.</li>
                    <li>Flexibilidad para crear tú menú y elegir las fechas y horarios.</li>
                    <li>Registro fácil y sin costo.</li>
                    <li>Ningún costo fijo por utilizar nuestra plataforma.</li>
                    <li>Publicidad en la cuenta de instagram de Mesa compartida.</li>
                </ul>
            </div>
            <div className="host-img">
                <img src={wine}/>
                <h4>
                    ¡Deja volar tu creatividad culinaria! Convierte tu casa en un espacio gastronómico exclusivo,
                    lleva la experiencia gastronómica a otro nivel alejado de la rutina de los restaurantes tradicionales.
                </h4>
            </div>
            <div className="wraper-form-host">
                <h3>Contáctanos</h3>
                <h4>Completa el formulario y nos comunicaremos para definir tu perfil de anfitrión.</h4>
                <form ref={formGift} onSubmit={sendEmail} className='form-host'>
                    <label>Nombre:</label>
                    <input type="text" name="name_host" placeholder="Fernando" required/>
                    <label>Apellido:</label>
                    <input type="text" name="surname_host" placeholder="Galan" required/>
                    <label>Teléfono:</label>
                    <input type="text" name="phone_host" placeholder="2915232323" required/>
                    <label>Correo electrónico:</label>
                    <input type="text" name="email_host" placeholder="fergalan@gmail.com" required/>
                    <button>Ser anfitrión</button>
                </form>
            </div>
            <div style={{ width: "100vw" }}>
            <   Footer/>
            </div>
        </div>
     );
}


 export default Host;