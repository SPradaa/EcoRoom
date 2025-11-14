import React from "react";
import Navbar from "../components/Navbar";
import '../styles/UsuariosView.css'
import { useState } from "react";

function UsuariosView () {
    const [cambio, setCambio]= useState(false);
    return(
        <div className="principal-Contend">
            <Navbar
            nombre={'Santiago Prada'}
             />
        <div className="Controladores">
            <div className="variaciones">
            <div className="agrupacion">
            <button className="btn-cambios-sala" onClick={() => setCambio(false)} style={{background: cambio ? 'transparent' : 'white'}}>Salas Disponibles</button>
            <button className="btn-cambios-reserva" onClick={()=> setCambio (true)} style={{background: cambio ? 'white' : 'transparent'}} >Mis Reservas</button>
            </div>
            </div>
            <div className="salas"
            style={{display: cambio ? 'none': 'flex'}}
            ><p>hola estas son las salas</p></div>
            <div className="reservas"
            style={{display: cambio ? 'flex' : 'none'}}
            ><p>Hola estas son sus reservas</p></div>
        </div>



        </div>
    );
}
export default UsuariosView;