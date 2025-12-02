import React from "react";
import Navbar from "../components/Navbar";
import '../styles/UsuariosView.css'
import { useState } from "react";
import Salas from "../components/Salas";
import Reservas from "../components/Reservas/reservas";

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
            ><Salas /></div>
            <div className="reservas"
            style={{display: cambio ? 'flex' : 'none'}}>
               
                <Reservas />
                
                </div>
        </div>



        </div>
    );
}
export default UsuariosView;