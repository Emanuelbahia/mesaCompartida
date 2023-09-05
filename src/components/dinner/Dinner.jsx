import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Footer from "../footer/Footer";
import dinnerpc2 from "../../assets/dinnerpc2.jpg";
import host1p from "../../assets/host/host1p.jpg";
import host2p from "../../assets/host/host2p.jpg";
import host3p from "../../assets/host/host3p.jpg";
import host4p from "../../assets/host/host4p.jpg";
import d1 from "../../assets/dinner1.jpg";
import d2 from "../../assets/dinner2.jpg";
import d3 from "../../assets/dinner3.jpg";
import d4 from "../../assets/dinner4.jpg";
import d5 from "../../assets/dinner5.jpg";
import d6 from "../../assets/dinner6.jpg";
import d7 from "../../assets/dinner7.jpg";
import d8 from "../../assets/dinner8.jpg";
import "./dinner.css";

function Dinner() {
    return ( 
        <div className="container-dinner">
            <div className="wraper-header">
                <Menu/>
                <h3 className="h3-header-dinner">
                    Cenas originales y experiencias únicas en tu ciudad
                </h3>
            </div>
            <div className="wraper-body-dinner">
                <section className="dinner-experience-description">
                    <img className="img-dinner-experience-description" src={ dinnerpc2 } />
                    <div className="h4-p-experience">
                        <h4 className="h4-dinner-experience-description">
                            ¡Decile adiós a las cenas y salidas aburridas de siempre!
                        </h4>
                        <p className="p-dinner-experience-description">
                            Mesa compartida te trae una experiencia gastronomica única y distintas a las demás.
                            Experimenta una cena clandestina en la casa de nuestros anfitriones junto a tus amigos
                            o seres queridos.
                        </p>
                    </div>
                </section>
                <h2 className="h2-experience-dinner">Últimas experiencias</h2>
                <section className="some-experience-dinner">                    
                    <div className="description-experience-dinner">
                        <div className="img-name-host host1">
                            <img className="img-host-profile" src= { host1p } />
                            <h5 className="h5-host-profile">
                                Dinner <br/> <span className="span-h5-experience">Pato a la naranja lacado</span> 
                            </h5>
                        </div>
                        <div className="price-dinner-host">
                            <h5 className="h5-rating-dinner"><span className="span-star"><AiFillStar/></span> 4.8</h5>
                            <h5 className="h5-price-dinner">$10.000 <span className="span-person">/persona</span></h5>
                        </div>
                    </div>
                    <div className="description-experience-dinner">
                        <div className="img-name-host host2">
                            <img className="img-host-profile" src={ host2p } />
                            <h5 className="h5-host-profile">
                                Dinner <br/> <span className="span-h5-experience">Albóndigas de jengibre con brócoli y sésamo</span> 
                            </h5>
                        </div>
                        <div className="price-dinner-host">
                            <h5 className="h5-rating-dinner"><span className="span-star"><AiFillStar/></span> 4.9</h5>
                            <h5 className="h5-price-dinner">$8.500 <span className="span-person">/persona</span></h5>
                        </div>
                    </div>
                    <div className="description-experience-dinner">
                        <div className="img-name-host host3">
                            <img className="img-host-profile" src={ host3p } />
                            <h5 className="h5-host-profile">
                                Dinner <br/> <span className="span-h5-experience">Almejas a la marinera</span> 
                            </h5>
                        </div>
                        <div className="price-dinner-host">
                            <h5 className="h5-rating-dinner"><span className="span-star"><AiFillStar/></span> 4.8</h5>
                            <h5 className="h5-price-dinner">$11.000 <span className="span-person">/persona</span></h5>
                        </div>
                    </div>
                    <div className="description-experience-dinner">
                        <div className="img-name-host host4">
                            <img className="img-host-profile" src={ host4p } />
                            <h5 className="h5-host-profile">
                                Dinner <br/> <span className="span-h5-experience">Filet mignon con salsa de Jerez</span> 
                            </h5>
                        </div>
                        <div className="price-dinner-host">
                            <h5 className="h5-rating-dinner"><span className="span-star"><AiFillStar/></span> 5</h5>
                            <h5 className="h5-price-dinner">$9.000 <span className="span-person">/persona</span></h5>
                        </div>
                    </div>
                </section>
                <h2 className="h2-experience-dinner">Próximos eventos gastronómicos</h2>
                <section className="container-reserve">                    
                    <div className="wraper-dinner-event">
                        <img className="img-dinner-experience" src={ d7 } />
                        <div className="description-event-experience">
                            <h4 className="h4-event-experience">Pasta al pesto con gambas</h4>
                            <h5 className="h5-chair-event-experience"><strong>Sillas:</strong> 6</h5>
                            <h5 className="h5-date-event-experience"><strong>Fechas en:</strong> Agosto </h5>
                            <h5 className="h5-event-experience">Por Carolina Dambrosio</h5>
                        </div>
                        <Link to="/dinner/0" className="reserve-event-experience">Fechas</Link>
                    </div>
                    <div className="wraper-dinner-event">
                        <img className="img-dinner-experience" src={ d1 } />
                        <div className="description-event-experience">
                            <h4 className="h4-event-experience">Enchiladas de ternera</h4>
                            <h5 className="h5-chair-event-experience"><strong>Sillas:</strong> 8</h5>
                            <h5 className="h5-date-event-experience"><strong>Fechas en:</strong> Agosto </h5>
                            <h5 className="h5-event-experience">Por Fernando Belasteguin</h5>
                        </div>
                        <Link to="/dinner/1" className="reserve-event-experience">Fechas</Link>
                    </div>
                    <div className="wraper-dinner-event">
                        <img className="img-dinner-experience" src={ d2 } />
                        <div className="description-event-experience">
                            <h4 className="h4-event-experience">Pollo al bourbon</h4>
                            <h5 className="h5-chair-event-experience"><strong>Sillas:</strong> 4</h5>
                            <h5 className="h5-date-event-experience"><strong>Fechas en:</strong> Agosto </h5>
                            <h5 className="h5-event-experience">Por Ornella Sanchez</h5>
                        </div>
                        <Link to="/dinner/2" className="reserve-event-experience">Fechas</Link>
                    </div>
                    <div className="wraper-dinner-event">
                        <img className="img-dinner-experience" src={ d3 } />
                        <div className="description-event-experience">
                            <h4 className="h4-event-experience">Salteados de verduras y gambas</h4>
                            <h5 className="h5-chair-event-experience"><strong>Sillas:</strong> 5</h5>
                            <h5 className="h5-date-event-experience"><strong>Fechas en:</strong> Agosto </h5>
                            <h5 className="h5-event-experience">Por Maximiliano Darroze</h5>
                        </div>
                        <Link to="/dinner/3" className="reserve-event-experience">Fechas</Link>
                    </div>
                    <div className="wraper-dinner-event">
                        <img className="img-dinner-experience" src={ d4 } />
                        <div className="description-event-experience">
                            <h4 className="h4-event-experience">Pimientos rellenos de verduras</h4>
                            <h5 className="h5-chair-event-experience"><strong>Sillas:</strong> 6</h5>
                            <h5 className="h5-date-event-experience"><strong>Fechas en:</strong> Agosto </h5>
                            <h5 className="h5-event-experience">Por Carolina Dambrosio</h5>
                        </div>
                        <Link to="/dinner/4" className="reserve-event-experience">Fechas</Link>
                    </div>
                    <div className="wraper-dinner-event">
                        <img className="img-dinner-experience" src={ d5 } />
                        <div className="description-event-experience">
                            <h4 className="h4-event-experience">Espaguetis de calabacín y calabaza con gambones</h4>
                            <h5 className="h5-chair-event-experience"><strong>Sillas:</strong> 5</h5>
                            <h5 className="h5-date-event-experience"><strong>Fechas en:</strong> Agosto </h5>
                            <h5 className="h5-event-experience">Por Maximiliano Darroze</h5>
                        </div>
                        <Link to="/dinner/5" className="reserve-event-experience">Fechas</Link>
                    </div>
                    <div className="wraper-dinner-event">
                        <img className="img-dinner-experience" src={ d6 } />
                        <div className="description-event-experience">
                            <h4 className="h4-event-experience">Rollitos de langostinos con papel de arroz</h4>
                            <h5 className="h5-chair-event-experience"><strong>Sillas:</strong> 8</h5>
                            <h5 className="h5-date-event-experience"><strong>Fechas en:</strong> Agosto </h5>
                            <h5 className="h5-event-experience">Por Fernando Belasteguin</h5>
                        </div>
                        <Link to="/dinner/6" className="reserve-event-experience">Fechas</Link>
                    </div>
                    <div className="wraper-dinner-event">
                        <img className="img-dinner-experience" src={ d8 } />
                        <div className="description-event-experience">
                            <h4 className="h4-event-experience">Tartar de salmón con ensalada</h4>
                            <h5 className="h5-chair-event-experience"><strong>Sillas:</strong> 8</h5>
                            <h5 className="h5-date-event-experience"><strong>Fechas en:</strong> Agosto </h5>
                            <h5 className="h5-event-experience">Por Fernando Belasteguin</h5>
                        </div>
                        <Link to="/dinner/7" className="reserve-event-experience">Fechas</Link>
                    </div>
                </section>              
            </div>
            <Footer/>
        </div>
     );
}

export default Dinner;