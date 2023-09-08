import { useParams, Link } from "react-router-dom";
import { useState, useRef } from "react";
import host from "../../data/host.json";
import { BsPeople, BsClock } from "react-icons/bs";
import { BiDish, BiDrink } from "react-icons/bi";
import emailjs from '@emailjs/browser';
import Carousel from 'react-multi-carousel';
import Toast from 'react-bootstrap/Toast';
import { AiFillStar } from "react-icons/ai";
import  Footer  from "../footer/Footer";
import { useAuth } from "../../context/AuthContext";
//import logo from "../../assets/logo.png";
import 'react-multi-carousel/lib/styles.css';
import "./experience.css";
import Menu from "../menu/Menu";

function Experience() {

    //para saber si hay alguien logueado
    const auth = useAuth();
    const userOnLine = auth.user; 

    const params = useParams();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(false);
   
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1025 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 701 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1
        }
      };

    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_ey78bg7', 'template_bizzg3p', form.current, 'dRlDu59wtjIMhCw_X')
        .then((result) => {
            console.log(result.text);
            setMessage(true);
            form.current.reset(); //para resetear el formulario
        }, (error) => {
            console.log(error.text);
        });
    };

    return ( 
        <div className="container-experience"> 
            <div style={{ backgroundColor: "#252525", width: "100vw"}} >
              <Menu/> 
            </div> 
            { !show ?
            <div className="wraper-menu-experience" style={{ backgroundImage: `url(${host[params.id].image[0]})` }} >
              {/* <Link to="/">
                  <img className="logo-experience" src={ logo }  />
              </Link> */}
              <button onClick={ () => { setShow(!show) } }  className="more-photos">Más fotos</button>
            </div>
               : 
            <section className="section-photos-event">
              <button className="button-close-photos" onClick={ () => { setShow(!show) } }>Cerrar</button>
              <Carousel className="carousel-photos" responsive={responsive}>
                {host[params.id].image.map((item, index) => (
                    <img className="img-experience-event" key={index} src={item} />               
                ))}
              </Carousel>
            </section>
            } 
            <h3 className="h3-experience-event">{ host[params.id].dinner }</h3> 
            <h5 className="name-host-experience">Organizado por { host[params.id].name } { host[params.id].surname } </h5>  
            <div className="container-body">
              <div className="wraper-sections-experience">
                          
                <section className="section-description-event">
                  <div className="div-host-experience">
                    <h3 className="h3-title-host">Anfitrión</h3>
                    <div className="wraper-photo-name-perfil">
                      <img className="photo-perfil-host" src= { host[params.id].photoPerfil } />
                      <h5 className="name-perfil-host">{ host[params.id].name }</h5>
                      
                    </div>
                    <p className="p-description-host">{ host[params.id].host }</p>
                  </div>
                  <div className="div-description-experience">
                    <h3 className="h3-title-host">Experiencia</h3>
                    <div className="wraper-data-experience">                     
                      <div className="div-data-experience">
                        <BsPeople className="icon-data-experience"/>
                        <h6 className="h6-description-icon">{ host[params.id].chairs } invitados máximo</h6>
                      </div>
                      <div className="div-data-experience">
                        <BiDish className="icon-data-experience"/>
                        <h6 className="h6-description-icon">Cena</h6>
                      </div>
                      <div className="div-data-experience">
                        <BsClock className="icon-data-experience" />
                        <h6 className="h6-description-icon">{ host[params.id].time } ({ host[params.id].duration }) </h6>
                      </div>
                      <div className="div-data-experience">
                        <BiDrink className="icon-data-experience"/>
                        <h6 className="h6-description-icon">{ host[params.id].aperitive }</h6>
                      </div>
                    </div>
                    <div className="many-descriptions-dinner">
                      {
                        host[params.id].description.map( (d, i) => {
                          return (
                            <p className="p-description-host" key={i} >{ d }</p>
                          )
                        })
                      }
                    </div>
                  </div>
                </section>
                <section className="section-rating">
                  <div className="wraper-number-rating">
                    <h3 className="h3-rating">{ host[params.id].rating }</h3>
                    <h4 className="h4-rating"> de <br/> 5</h4>
                    <div className="all-stars-rating">
                      <AiFillStar className="star-rating"/>
                      <AiFillStar className="star-rating"/>
                      <AiFillStar className="star-rating"/>
                      <AiFillStar className="star-rating"/>
                      <AiFillStar className="star-rating"/>
                    </div>
                  </div>
                  <div className="wraper-description-rating"> 
                    <div className="wraper-label-progress">
                      <label className="label-progress" name="file">Comida:</label>
                      <progress className="bar-progress" id="file" max="100" value={ host[params.id].dish }> </progress>               
                    </div>
                    <div className="wraper-label-progress">
                      <label className="label-progress" name="file">Calidad/precio:</label>
                      <progress className="bar-progress" id="file" max="100" value={ host[params.id].quality }> </progress>               
                    </div>
                    <div className="wraper-label-progress">
                      <label className="label-progress" name="file">Ambiente:</label>
                      <progress className="bar-progress" id="file" max="100" value={ host[params.id].environment  }> </progress>               
                    </div>
                    <div className="wraper-label-progress">
                      <label className="label-progress" name="file">Limpieza:</label>
                      <progress className="bar-progress" id="file" max="100" value={ host[params.id].cleaning }> </progress>               
                    </div>
                  </div>
                </section>
                <section className="section-review">
                  <h3 className="h3-title-host">Reseñas</h3>
                  <div className="wraper-reviews">
                    <div className="div-review">
                      <h4 className="h4-review">{ host[params.id].reviewGuest1 },</h4>
                      <p className="p-description-host p-padding"> <i>{ host[params.id].review1 }</i></p>
                    </div>
                    <div className="div-review">
                      <h4 className="h4-review">{ host[params.id].reviewGuest2 },</h4>
                      <p className="p-description-host p-padding"> <i>{ host[params.id].review2 }</i></p>
                    </div>
                  </div>
                </section>
                <section className="section-location">
                  <h3 className="h3-title-host">Ubicación</h3>
                  <h5 className="h5-location">La dirección se enviará una vez que la reserva esté confirmada.</h5>
                  <img className="image-location" src={ host[params.id].location }/>
                </section>
                <section className="section-information-event">
                  <h3 className="h3-title-host">Infotmación útil</h3>
                  <div className="wraper-information">
                    {
                      host[params.id].information.map( (d, i) => {
                        return (
                            <h6 className="h6-information" key={i}>{ d }</h6>                         
                        )
                      })
                    }
                  </div>
                </section>
              </div>           
              <aside className="aside-experience">
                <h3 className="h3-title-host">Haz tu reserva</h3>
                <h5 className="h5-reserve">
                  Una vez hecha la reserva, el Anfitrión se comunicará contigo para darte la dirección exacta y la forma de pago.
                </h5>
                { !message ? 
                <form ref={form} onSubmit={sendEmail} className="form-container">
                  <input type="text" name="user_host" className="input-reserve" style={{ display: "none" }} value= {host[params.id].surname}/>
                  <input type="text" name="user_hostEmail" className="input-reserve" style={{ display: "none" }} value= {host[params.id].email}/>
                  <label>Nombre y apellido</label>
                  <input type="text" name="user_name" className="input-reserve" placeholder="Ej: Juan Garcia" required/>
                  <label>Telefono</label>
                  <input type="text" name="user_phone" className="input-reserve" placeholder="Ej: 2914568978" required/>
                  <label>Email</label>
                  <input type="email" name="user_email" className="input-reserve" placeholder="Ej: juangarcia@gmail.com" required/>
                  <div className="wraper-select-guests">
                    <label>Cantidad de comensales</label>
                    <select className="select-guests" name="user_guest">
                      <option>2</option>
                      {
                        host[params.id].guests.map( g => 
                          <option value={ g } key={ g } >{ g }</option>
                          )
                      }                
                    </select>
                  </div>
                  <div className="wraper-select-guests">
                    <label>Fecha</label>
                    <select className="select-date" name="user_date">
                      <option>{ host[params.id].date[0] }</option>
                      {
                        host[params.id].date.map( d => 
                          <option value={ d } key={ d } >{ d }</option>
                          )
                      }                
                    </select>
                  </div>
                  <label>Código tarjeta regalo</label>
                  <input type="text" name="user_code" className="input-reserve"/>
                  <label className="label-guests">Valor por persona: { host[params.id].price } </label>
                  {
                    userOnLine ? 
                    <button type="submit" className="button-reserve-dinner">Reservar</button>
                    :
                    <h5 className="message-login">Para hacer una reserva tenés que estar registrado e iniciar cesión, haz click <Link to="/login">aquí</Link> </h5>
                  }
                 
                  
                </form>
                :
                <Toast className='show-toast' onClose={() => setMessage(false)} show={message} delay={6000}  autohide >
                    <Toast.Body className="description-toast">
                      Tu reserva se envió correctamente! <br/>
                      Espera la confirmación del Anfitrión.
                    </Toast.Body>
                  </Toast> 
                  }
              </aside> 
            </div> 
            <div className="div-footer-pc">
              <Footer/>   
            </div>       
        </div>
     );
}

export default Experience;