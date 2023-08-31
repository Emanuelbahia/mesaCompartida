import Menu from "../../components/menu/Menu";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import "./register.css";
import Validation from "../../valifationForm";
import calculateDate from "../../components/CalculateDate";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../components/firebaseConfig/firebase";
import { useAuth } from "../../context/authContext";

function Register() {

    //calendario
    const [date, setDate] = useState(null);

    //creo un usuario en la base de datos
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [domicilio, setDomicilio] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    //context
    const auth = useAuth();

    const [values, setValues] = useState({
        firstName: "",
        lastName:"",
        adress: "",
        phone: "",
        client_email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const form = useRef();
    const inputName = useRef();
    const pName = useRef();
    const inputLastName = useRef();
    const pLastName = useRef();
    const inputAdress = useRef();
    const pAdress = useRef();
    const inputPhone = useRef();
    const pPhone = useRef();
    const inputEmail = useRef();
    const pEmail = useRef();
    const inputPasswd = useRef();
    const pPasswd = useRef();
    const inputConfirmPasswd =useRef();
    const pConfirmPasswd =useRef();

    function handlerInput(e) {
        const newObject = {...values, [e.target.name]: e.target.value}
        setValues(newObject);
        }

    //para hacer validaciones en linea
    function handlerBlurName(e) {
        if (inputName.current.value.length < 3) {
        inputName.current.style.border = "1px solid red";
        pName.current.style.color = "red";
        pName.current.innerText = "Es muy corto";
        } else {
        inputName.current.style.border = "1px solid green";
        pName.current.style.display = "none";
        setNombre(e.target.value)
        }
    }
    
    function handlerBlurLastName(e) {
        if (inputLastName.current.value.length < 3) {
        inputLastName.current.style.border = "1px solid red";
        pLastName.current.style.color = "red";
        pLastName.current.innerText = "Es muy corto";
        } else {
        inputLastName.current.style.border = "1px solid green";
        pLastName.current.style.display = "none";
        setApellido(e.target.value)
        }
    }
    
    function handlerBlurAdress(e) {
        if (inputAdress.current.value.length < 7 ) {
            inputAdress.current.style.border = "1px solid red";
            pAdress.current.style.color = "red";
            pAdress.current.innerText = "La direccion es demasiado corta";
        } else {
            inputAdress.current.style.border = "1px solid green";
            pAdress.current.style.display = "none";
            setDomicilio(e.target.value)
        }
    }
    function handlerBlurPhone(e) {
        //solo acepta entre 8 y 15 numeros
        let onlyNumbers = /^[0-9]{8,15}$/ ;
         if (inputPhone.current.value.length < 9) {
            inputPhone.current.style.border = "1px solid red";
            pPhone.current.style.color = "red";
            pPhone.current.innerText = "El número es demasiado corto";
            console.log(inputPhone.current.value)
        } else if (!onlyNumbers.test(inputPhone.current.value)) {
            pPhone.current.style.color = "red";
            pPhone.current.innerText = "Solo números";
        } else {
            inputPhone.current.style.border = "1px solid green";
            pPhone.current.style.display = "none";
            setCelular(e.target.value)
        }
    }
    function handlerBlurEmail(e) {
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
        if (!email_pattern.test(inputEmail.current.value)) {
            inputEmail.current.style.border = "1px solid red"; 
            pEmail.current.style.color="red";
            pEmail.current.innerText= "Ingrese un correo válido";
        } else {
            inputEmail.current.style.border = "1px solid green ";
            inputEmail.current.style.background = "transparent";
            pEmail.current.style.display ="none";
            setEmail(e.target.value)
        }
    }
    function handlerBlurPasswd(e) {
        if (inputPasswd.current.value.length < 6 || inputPasswd.current.value.length > 15) {
            inputPasswd.current.style.border = "1px solid red";
            pPasswd.current.style.color = "red";
            pPasswd.current.innerText = "Tiene que tener entre 6 y 15 caracteres";
            console.log(inputPasswd.current.value)
        } else {
            inputPasswd.current.style.border = "1px solid green";
            pPasswd.current.style.display = "none";
            setPassword(e.target.value)
        }
    }
    function handlerBlurConfirmPasswd() {
        if (inputPasswd.current.value === inputConfirmPasswd.current.value) {
            inputConfirmPasswd.current.style.border = "1px solid green";
            pConfirmPasswd.current.style.display = "none";
        } else {
            inputConfirmPasswd.current.style.border = "1px solid red";
            pConfirmPasswd.current.style.color = "red";
            pConfirmPasswd.current.innerText = "Las contraseñas deben coincidir";
        }
    }
    const userCollection = collection(db, "users");

    const sendEmail = async (e) => {
        e.preventDefault();

        setErrors(Validation(values));
        //para registrar en la base de datos
        await addDoc(userCollection, {
            nombre: nombre,
            apellido: apellido,
            celular: celular,
            domicilio: domicilio,
            email: email,
            edad: calculateDate(date)
        })
        //para la autenticacion
        await auth.register(email, password);

        navigate("/login");
      };

    const handlePassword = () => {
        setShowPassword(!showPassword);
    }
   
    return ( 
        <div className="container-register">
            <div className="div-menu-register">
                <Menu/>
            </div>         
            <h2 className="h2-register">Sé comensal</h2>
            <p className="p-register">
                Regístrate para poder vivir experiencias gastronómicas únicas.
            </p>         
            <form ref={form} className="form-register" onSubmit={sendEmail}>
                <div className="div-label-register">
                    <label className="label-register">Nombre:</label>
                    <input name="firstName"
                    ref={inputName}
                    type="text" 
                    className="field-register" 
                    placeholder="juan"
                    onChange={handlerInput} 
                    onBlur={handlerBlurName} />
                    <p ref={pName} style={{margin: 0}}></p>  
                    {errors.firstName && <p style={{color:"red"}}>{errors.firstName}</p>}                  
                </div>
                
                <div className="div-label-register">
                    <label className="label-register">Apellido:</label>
                    <input name="lastName" 
                    ref={inputLastName}
                    className="field-register" 
                    placeholder="Garcia"
                    onChange={handlerInput} 
                    onBlur={handlerBlurLastName}/> 
                    <p ref={pLastName} style={{margin: 0}}></p>  
                    {errors.lastName && <p style={{color:"red"}}>{errors.lastName}</p>}                      
                </div>
                <div className="div-label-register">
                    <label className="label-register">Domicilio:</label>
                    <input name="adress" 
                    ref={inputAdress}
                    className="field-register" 
                    placeholder="Alsina 1350" 
                    onChange={handlerInput} 
                    onBlur={handlerBlurAdress}/>  
                    <p ref={pAdress} style={{margin: 0}}></p> 
                    {errors.adress && <p style={{color:"red"}}>{errors.adress}</p>}                          
                </div>
                <div className="div-label-register">
                    <label className="label-register">Teléfono:</label>
                    <input name="phone" 
                    ref={inputPhone}
                    className="field-register" 
                    placeholder="2915323264" 
                    onChange={handlerInput} 
                    onBlur={handlerBlurPhone}/> 
                    <p ref={pPhone} style={{margin: 0}}></p> 
                    {errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}                         
                </div>
                <div className="div-label-register">
                    <label className="label-register">Email:</label>
                    <input name="client_email" 
                    ref={inputEmail}
                    type="email" 
                    className="field-register" 
                    placeholder="juangracia@gmail.com"
                    onChange={handlerInput} 
                    onBlur={handlerBlurEmail}/>  
                    <p ref={pEmail} style={{margin: 0}}></p> 
                    {errors.client_email && <p style={{color:"red"}}>{errors.client_email}</p>}                       
                </div>
                <div className="div-label-register">
                    <label className="label-register">Fecha de nacimiento:</label>
                    <input type="date" className="field-register"  onChange={ e => setDate(e.target.value)} required />
                </div>
                <div className="div-label-register">
                    <label className="label-register">Password:<span className="span-password">(entre 6 y 15 caracteres)</span></label>
                    <div className="wraper-input-icon-password">
                        <input name="password"
                        ref={inputPasswd} 
                        type={ showPassword ? "text" : "password"}
                        className="field-register-password"
                        onChange={handlerInput} 
                        onBlur={handlerBlurPasswd}/> 
                        <span className="icon-eye-register" onClick={ handlePassword }> { showPassword ? <GoEyeClosed/> : <GoEye/>   }  </span>
                    </div>
                    <p ref={pPasswd} style={{margin: 0}}></p>   
                    {errors.password && <p style={{color:"red"}}>{errors.password}</p>}                      
                </div>
                <div className="div-label-register">
                    <label className="label-register">Confirm Password:</label>
                    <input name="confirmPassword"
                    ref={inputConfirmPasswd} 
                    type="password" 
                    className="field-register" 
                    onChange={handlerInput} 
                    onBlur={handlerBlurConfirmPasswd}/>  
                    <p ref={pConfirmPasswd} style={{margin: 0}}></p> 
                    {/* {errors.confirmPassword && <p style={{color:"red"}}>{errors.confirmPassword}</p>}  */}                     
                </div>
                <button type="submit" className="button-register">Regístrate</button>
            </form>     
        </div>
     );
}

export default Register;