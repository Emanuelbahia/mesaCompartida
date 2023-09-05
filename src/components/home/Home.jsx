import { BsGift } from "react-icons/bs";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import { useAuth } from "../../context/AuthContext";
import 'react-multi-carousel/lib/styles.css';
import ce1  from "../../assets/ce1.jpg";
import vegano from "/vegano.jpg";
import claseCocina from "../../assets/clasecocina.jpg";
import ce5 from "../../assets/ce5.jpg";
import host from "../../assets/host.jpg";
import ce4 from "../../assets/ce4.jpg";
import ce3 from "../../assets/ce3.jpg";
import af1 from "../../assets/af1.jpg";
import af2 from "../../assets/af2.jpg";
import af3 from "../../assets/af3.jpg";
import af4 from "../../assets/af4.jpg";
import "./home.css";

function Home() {

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

  const auth = useAuth();
  const { email } = auth.user;

  return (
    <div className="container-home">
      <section className="home-experience">
        <h1>¿Qué somos?</h1>
        <p className="p-h1">
        Una plataforma que conecta anfitriones con comensales. Se trata de una estructura dentro de la cual los usuarios
                aportan valor entre ellos. Se crea una red donde un segmento de clientes, los anfitriones, ofrecen sus &quot;eventos gastronómicos&quot;,
                al otro segmento de clientes, llamados comensales, que son los que buscan una experiencia gastronómica única, diferente y con una 
                fuerte valoración en el intercambio social en un lugar que se sientan &quot;Como en casa&quot;.<br/>
                Cada anfitrión subirá el evento gastronómico que realizará en distintas fechas con todos los detalles de la misma, como la cantidad de lugares que tendrá
                y la cena que hará esa noche.<br/>
                Los comensales primero deberán registrarse para poder reservar sus lugares (sillas) en una experiencia gastronómica, en la fecha que deseen.
        </p>
        <h3 className="home-title">Experiencias gastronómicas</h3>
        <div className="wraper-home-experience">          
          <div className="description-image-experience flex-start">
            <div className="title-description-experience-local">
              <h4 className="title-experience">Cenas en casas locales</h4>
              <h5 className="description-experience">Descubre el placer de cenar en casas de anfitriones locales y sumérgete en una experiencia gastronómica única y auténtica.</h5>
            </div>
            <img className="image-home-experience" src={ ce1 } />
          </div>
          <div className="description-image-experience flex-center">
            <div className="title-description-experience-veggie">
              <h4 className="title-experience">Sabores veggies</h4>
              <h5 className="description-experience">
                Celebra el sabor y la bondad de la cocina vegana con nosotros, 
                donde fusionamos ingredientes frescos y técnicas innovadoras.
              </h5>
            </div>
            <img className="image-home-experience" src={ vegano } />
          </div>
          <div className="description-image-experience flex-end">
            <div className="title-description-experience-class">
              <h4 className="title-experience">Experiencias únicas</h4>
              <h5 className="description-experience">
                Descubre una nueva forma de disfrutar de una experiencia gastronómica exclusiva en la comodidad
                de un ambiente acogedor y único.
              </h5>
            </div>
            <img className="image-home-experience" src={ claseCocina } />
          </div>
        </div>
      </section>
      <section className="container-events">
        <div className="all-example-events">
          <div className="wraper-event">
            <h3 className="title-event">Eventos privados</h3>
            <h4 className="description-event">
              Cada evento tendra una cierta cantidad de lugares, pero si lo deseas puedes personalizarlo y 
              hacerlo privado para vos y tus invitados.
            </h4>
          </div>
          <div className="wraper-event">
            <h3 className="title-event">Comprometidos con tu comodidad</h3>
            <h4 className="description-event">
              Nuestro objetivo es que te sientas como en casa, por eso nos encargamos de todo para que vos solo te dediques a disfrutar.
            </h4>
          </div>
          <div className="wraper-event">
            <h3 className="title-event">Seleccion de anfitriones</h3>
            <h4 className="description-event">
              Nuestros anfitriones son cuidadosamente seleccionados para que puedas disfrutar de una experiencia gastronómica unica.
            </h4>
          </div>         
        </div>
        <img className="img-example-events" src={ ce5 } />
      </section>
      <section className="container-host">
        <h3 className="home-title">Crea eventos gastronómicos</h3>       
          <Link to="beHost" className="wraper-host">
            <img className="image-host" src={ host } />
            <div className="under-host-image">
              <h3 className="h3-host">¿Quiéres ser anfitrion?</h3>
              <h4 className="h4-host">
                Si sos un aficionado a la gastronomía y tienes un espacio y una propuesta gastronómica para ofrecer,
                esta es tu oportunidad para dar a conocer tu talento culinario y elevar tu creatividad
                para transformar tu espacio en un restaurante exclusivo para personas que quieran vivir
                una experiencia gastronómica única.
              </h4>
            </div>
          </Link>             
      </section>
      <section className="container-gift">
        <h3 className="home-title">Busca tu experiencia gastronómica</h3>
        <div className="wraper-gift-experience">
        <Link to="/dinner" className="wraper-experience">
            <img className="img-gift" src={ ce4 }/>
            <div className="experience-description">
              <h3 className="h3-gift">Haz tu reserva</h3>
              <p className="p-gift">
                Descubre un nuevo nivel de experiencia gastronómica en nuestra página, donde las casas de nuestros anfitriones 
                se convierten en destinos culinarios exclusivos. 
                Disfruta de comidas elaboradas y gourmet mientras vives momentos inolvidables
                Entra y elige el día y la hora para tener una experiencia inolvidable junto a tus seres queridos
              </p>
            </div>
          </Link>
          <Link to="gift" className="wraper-gift">
            <img className="img-gift" src={ ce3 }/>
            <div className="gift-description">
              <h3 className="h3-gift">Tarjeta de regalo <BsGift style={{ marginLeft: "2vh", color: "#a90909" }}/> </h3>
              <p className="p-gift">
                Regálale a tus seres queridos una experiencia gastronómica fuera de lo común, 
                un viaje culinario que nunca olvidarán.
                Con nuestras tarjetas de regalo, puedes regalar una experiencia gastronómica única y auténtica.
                Entra y elige la que más te guste.
              </p>
            </div>
          </Link>
        </div>
      </section>
      <section className="container-review">
        <h3 className="home-title">Algunas reseñas</h3>
        <Carousel responsive={responsive}>
          <div className="div-carousel">
            <img className="img-carousel" src={ af2 } />
            <p className="p-carousel">
              <i>Fantástica cena en la casa de Julian! Encantadora mesa de comedor grande, cocina abierta, excelente lista de reproducción y 
                deliciosa comida y vino. Dio consejos y recomendaciones sobre otras recetas de los paises asiáticos.</i>
            </p>
            <h5 className="h5-carousel">Pedro sobre Julian en Bahia Blanca.</h5>
          </div>
          <div className="div-carousel">
            <img className="img-carousel" src={ af1 } />
            <p className="p-carousel">
              <i>Nuestra experiencia con Ana fue maravillosa. Nos hizo sentir bienvenidos desde el primer momento en que entramos en su casa. 
                Pudimos sentir su pasión por la cocina por la forma en que explicó los platos y las razones por las que eligió los ingredientes. 
                La comida era deliciosa y los vinos eran geniales. Tuvo la amabilidad de compartir las recetas de algunos de los platos.</i>
            </p>
            <h5 className="h5-carousel">Cecilia sobre Ana en Bahia Blanca.</h5>
          </div>
          <div className="div-carousel">
            <img className="img-carousel" src={ af3 } />
            <p className="p-carousel">
              <i>¡Tuvimos una experiencia más que increíble con Francisco! La comida era deliciosa y especial, 
                la hospitalidad fue cálida y acogedora. Definitivamente regresaremos de nuevo .</i>
            </p>
            <h5 className="h5-carousel">Caro sobre Francisco en Bahia Blanca.</h5>
          </div>
          <div className="div-carousel">
            <img className="img-carousel" src={ af4 } />
            <p className="p-carousel">
              <i>Carla es una fantástica anfitriona que se esmeró para que nuestra velada fuese inolvidable. Nos recibió con una amplia 
                sonrisa como si fuéramos viejos amigos e inmediatamente ya estábamos charlando de la vida, de la comida y de los placeres del mundo. 
                La cena fue muy interesante y pudimos profundizar (entre risas) en los secretos de la cocina italiana. 
                Los vinos servidos eran muy ricos. La experiencia muy recomendable.</i>
            </p>
            <h5 className="h5-carousel">Martin sobre Carla en Bahia Blanca.</h5>
          </div>
        </Carousel>
      </section>
      {
        email === "azconaemanuel@gmail.com" && <Link className="link-dashboard-home" to= "/users">Dashboard</Link>
      }
    </div>
  )
}

export default Home;