import { useState, useRef } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { GoEye, GoEyeClosed } from "react-icons/go";
import Menu from "../../components/menu/Menu";
import "./login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const alertEmail = useRef();
    const inputEmail = useRef();
    const alertPassword = useRef();
    const inputPassword = useRef();
    const auth = useAuth();
    const navigate = useNavigate();

   //si el mail y la contraseña estan en autenticacion, te redirige al home, 
   //sino te aparece un cartel de q no estas registrado o esta mal el email o la contraseña
    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        try {
            await auth.login(email, password);      
            navigate("/")           
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                alertEmail.current.style.display = "block";
                inputEmail.current.style.border = "1px solid red"
            } else {
                alertEmail.current.style.display = "none";
                inputEmail.current.style.border = "1px solid green"
            }
            if (error.code === "auth/wrong-password") {
                alertPassword.current.style.display = "block";
                inputPassword.current.style.border = "1px solid red"
            } else {  
                alertPassword.current.style.display = "none";
                inputPassword.current.style.border = "1px solid green"
            }
            
        }     
    }
    const handlePassword = () => {
        setShowPassword(!showPassword);
    }
   /*  const handleGoogle = (e) => {
        e.preventDefault();
        auth.loginWithGoogle();
    } */
    return ( 
        <div className="container-login">
            <div className="wraper-menu-login">
                <Menu/>
            </div>
            <form className="form-login" onSubmit={handleSubmitLogin}>
                <label className="label-login">Email:</label>
                <input ref={ inputEmail } className="input-login" type="email" onChange={(e) => setEmail(e.target.value)} />
                <h4 ref={ alertEmail } className="alert-login">El email es inválido</h4>
                <label className="label-login">Password:</label>
                <div>
                <input 
                    ref={ inputPassword } 
                    className="input-login" 
                    value={ password } 
                    type={ showPassword ? "text" : "password"} 
                    onChange={(e) => setPassword(e.target.value)} />
                    <span className="icon-eye" onClick={ handlePassword }> { showPassword ? <GoEyeClosed/> : <GoEye/> }  </span>
                </div>    
                <h4 ref={ alertPassword } className="alert-login">La contraseña es incorrecta</h4>
                <button type="submit" className="button-login">Log in</button>
            </form> 
            {/* <button onClick={(e) => handleGoogle(e)}>Google</button> */}
            <h5 className="message-register">Si no estás registrado, <br/> haz click <Link to="/register">aquí</Link> </h5>  
        </div>
        
     );
}

export default Login; 