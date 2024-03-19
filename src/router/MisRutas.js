import React  from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import Inicio from "../views/Inicio";
import Curriculum from "../views/Curriculum";
import Error from "../views/Error";
import Portfolio from "../views/Portfolio";
import Proyectos from "../views/Proyectos";
import Servicios from "../views/Servicios";
import Contacto from "../views/Contacto";
import Footer from "../components/layout/Footer";
import HeaderNav from "../components/layout/HeaderNav";



const MisRutas = () =>{
    return(
        <div>
            <BrowserRouter>
                <HeaderNav/>
                <hr/>
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/inicio" element={<Inicio/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/curriculum" element={<Curriculum/>}/>
                    <Route path="/*" element={<Error/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/proyectos" element={<Proyectos/>}/>
                    <Route path="/servicios" element={<Servicios/>}/>
                </Routes>
                <hr/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
export default MisRutas;