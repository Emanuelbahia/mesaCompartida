import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'; 
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAuth } from "../context/authContext";
import "./users.css";
import NotFound from "../../pages/not found/NotFound";

//en este componente muestro los datos de los usuarios que hay en la base de datos
function Users() {

    const [users, setUsers] = useState([]);
    const [averageAge, setAverageAge] = useState(0);

    //el email de la persona que se logueo
    const auth = useAuth();
    const { email } = auth.user;

    //referenciamos a la base de datos
    const usersCollection = collection(db, "users");
    
    const getUsers = async () => {
        const data = await getDocs(usersCollection);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    
    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc);
        getUsers();
    }

    useEffect(  () => {
        getUsers();  
        //eslint-disable-next-line
    }, []) 


    useEffect(() => {
        const sum = users.reduce((total, user) => total + user.edad, 0);
        const average = sum / users.length;
        setAverageAge(average);
    }, [users]);// me calcula la edad cada vez q se agrega o elimina un usuario

    return ( 
        <>
        { email === "azconaemanuel@gmail.com" || email === "juana@gmail.com" ? 
        <div className="container-users">
            <h2 className="h2-title-user">Listado de clientes</h2>
            <div className="wraper-age-total">
                <h3>Total de clientes: { users.length } </h3>
                <h3>Promedio de edad: { averageAge.toFixed(2) } años </h3>
            </div>
            <Table striped bordered hover className="table-users">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Domicilio</th>
                    <th>Celular</th>
                    <th>Edad</th>
                    <th>Email</th>
                    <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                { users.map( user => (
                    
                        <tr key={ user.id }>
                            <td>{ user.nombre }</td>
                            <td>{ user.apellido }</td>
                            <td>{ user.domicilio }</td>
                            <td>{ user.celular }</td>
                            <td>{ user.edad }</td>
                            <td>{ user.email }</td>
                            <td style={{ textAlign:"center" }}><RiDeleteBin6Line className="icon-delete" onClick={() => { deleteUser(user.id) }}/></td>
                        </tr>                   
                ))
                }
                </tbody>    
            </Table>
           
            <Link className="link-user-home" to="/">go home</Link>
        </div>
        :
        <NotFound/>
    }
    </>
     );
}

export default Users; 