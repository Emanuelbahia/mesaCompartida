import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./pages/layout/Layout";
import Home from "./components/home/Home";
import Register from "./pages/register/Register";
import Dinner from "./components/dinner/Dinner";
import Gift from "./components/gift/Gift";
import Host from "./components/host/Host";
import Experience from "./components/experience/Experience";
import We from "./components/we/We";
import Users from "./components/users/Users";
import Login from "./pages/login/Login";
import NotFound from "./pages/not found/NotFound";

function App() {
  

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <Layout /> } >
            <Route index element={ <Home/> } />              
            <Route path="we" element={ <We/> } />
          </Route> 
          <Route path="/gift" element={ <Gift/> } />
          <Route path="/beHost" element={ <Host/> } />
          <Route path="/dinner" element={ <Dinner/> } />
          <Route path="/dinner/:id" element={ <Experience/> } />
          <Route path="/register" element={ <Register/> } /> 
          <Route path="/login" element={ <Login/> } /> 
          <Route path="/users" element= { <Users/> } />
          <Route path="*" element= { <NotFound/> } /> 
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
