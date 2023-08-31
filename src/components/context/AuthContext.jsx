//useContext para globalizar las funciones de firebase a toda nuestra aplicacion
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../firebaseConfig/firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup,
    signOut,
    onAuthStateChanged
    } from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        console.log("no se creo el contexto")
    }
    return context;
};

//creo un provider para globalizar el contexto y compartir informacion entre componentes
export function AuthProvider({ children }) { 

    //con user tengo los datos de la persona q se logueo
    const [user, setUser] = useState("");

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            if(!currentUser) {
                console.log("no hay usuario suscrito");
                setUser("");
            } else {
                setUser(currentUser);
            }
        })
        return () => suscribed();
    }, [])

    const register = async (email, password) => {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);  
    }
    const login = async (email, password) => {
        const response = await  signInWithEmailAndPassword(auth, email ,password);
        console.log(response);
    } 
   
    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider();
        return await signInWithPopup(auth, responseGoogle)
    }
    const logout = async () => {
        const response = await signOut(auth);
        console.log(response);
    }

    //con value exportamos las funciones
    return ( 
        <authContext.Provider value={{
            register,
            login,
            loginWithGoogle,
            logout,
            user
        }}> 
            { children }
        </authContext.Provider>
    )
} 
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
  };