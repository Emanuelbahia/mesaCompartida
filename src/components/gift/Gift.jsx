import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { BsGift } from "react-icons/bs";
import Menu from "../menu/Menu";
import "./gift.css";
import giftp from "../../assets/giftp.jpg";
import giftp1 from "../../assets/giftp1.jpg";
import Footer from '../footer/Footer';

function Gift() {

    const navigate = useNavigate();
    const formGift = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_ey78bg7', 'template_bizzg3p', formGift.current, 'dRlDu59wtjIMhCw_X')
        .then((result) => {
            console.log(result.text);
            formGift.current.reset(); //para resetear el formulario
            navigate("/");
        }, (error) => {
            console.log(error.text);
        });
    };

    return ( 
        <div className="page-gift">
            <div className="gift-menu">
                <Menu/>
                <h3 className="h3-gift-menu">Regala momentos inolvidables!</h3>
            </div>
            <div className="wraper-explication">
                <h4 className='h4-gift-description'>Es fácil de usar <BsGift className='icon-gift-page'/> </h4>
                <h5 className='h5-gift-description'>
                    Usa la tarjeta de regalo para reservar un evento gastronómico único y diferente.<br/>
                    Cuando la persona que recibe la tarjeta haga la reserva para la cena que desee, 
                    solo debe introducir el código de la tarjeta de regalo en la plataforma de pago.<br/>
                    Si el importe de la tarjeta es menor al de la cena, se te cobrará la diferencia, 
                    en caso de haber elegido la opción de importe libre se te cobrará el total de la cena al momento de reservarla.
                </h5>
            </div>
            <div className="wraper-gift-promotion">
                <div className="gift-promotion margin-gift1">                   
                    <p>
                        Celebra el amor con una cena romántica en la intimidad del living de nuestros anfitriones. 
                        Nuestras tarjetas son el regalo perfecto para sorprender a tu pareja, celebrar cumpleaños, aniversarios, 
                        o simplemente disfrutar de una noche especial y crear recuerdos inolvidables juntos.
                    </p>
                    <img src={ giftp1 }/>
                </div>
                <div className="gift-promotion">                   
                    <p>
                        Comparte momentos especiales con las personas que amas, obséquiales a tus papás, hermanos o amigos el regalo que realmente les llegue al corazón. 
                        Con nuestras tarjetas de regalo, podrán disfrutar de una cena en casa, compartiendo risas y momentos especiales.
                    </p>
                    <img src={ giftp }/>
                </div>
            </div>
            <div className="description-gift">
                <h4 className='h4-gift-description'>Personaliza tu tarjeta de regalo</h4>
                <h5 className='h5-gift-description'>
                    Nuestras tarjetas de regalo son el pasaporte a una experiencia gastronómica única en casas de anfitriones apasionados por la cocina, 
                    donde cada plato cuenta una historia.<br/>
                    Elige una fecha para que le enviemos la tarjeta a la persona que quieras.
                    Una vez que la reciba podrá reservar el evento gastronómico. 
                </h5>
            </div>         
            <form ref={formGift} onSubmit={sendEmail} className='form-gift'>
                
                <div className='label-input-gift'>
                    <h3 className='h3-gift-title'>Enviar a:</h3>
                    <label>Nombre y apellido del destinatario:</label>
                    <input type="text" name="name_gift" placeholder='Ana cardenas' className='input-gift'/>
                </div>
                <div className='label-input-gift'>
                    <label>Email del destinatario:</label>
                    <input type="email" name="email_person_gift" placeholder='ana@gmail.com' className='input-gift'/>
                </div>
                
                <div className='label-input-gift'>
                    <h3 className='h3-gift-title'>De:</h3>
                    <label>Tu nombre y apellido:</label>
                    <input type="text" name="name_pay_gift" placeholder='Pablo gandolfi' className='input-gift'/>
                </div>
                <div className='label-input-gift'>
                    <label>Tu email:</label>
                    <input type="email" name="email_pay_gift" placeholder='pablo@gmail.com' className='input-gift'/>
                </div>            
                <div className='div-gift-pc'>
                    <h3 className='h3-gift-title'>Enviar el día:</h3>
                    <div className='div-date'>
                        <input className='input-date' type="text" name='date_day' placeholder='DD'/>
                        <input className='input-date' type="text" name='date_month' placeholder='MM'/>
                        <input className='input-date' type="text" name='date_year' placeholder='YYYY'/>
                    </div>
                </div>
                <div className='div-gift-pc'>
                    <h3 className='h3-gift-title'>Elige el valor de la tarjeta:</h3>
                    <select name='select_price'>
                        <option value="$10.000">$10.000</option>
                        <option value="$15.000">$15.000</option>
                        <option value="$20.000">$20.000</option>
                        <option value="importe libre">Importe libre</option>{/* segun la cena que elija */}
                    </select>
                </div>
                <div className='div-gift-pc'>
                    <h3 className='h3-gift-title'>Mensaje personal:</h3>
                    <textarea name='textarea_gift' className='textarea-gift'/>
                </div>
                <button className='button-buy-gift'>Comprar</button>
            </form> 
            <div className="div-footer-pc">
                <Footer/>    
            </div> 
        </div>
     );
}

export default Gift;