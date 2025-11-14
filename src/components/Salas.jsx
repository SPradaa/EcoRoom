import React from "react";
import '../styles/Salas.css'
import { useState } from "react";
import Search from "./Search";
import Targets from "./Targets"; 
import '../assets/images/InHome.png'

function Salas () {
    return(
        <div className="sala"> 
        <div className="info-salas">
            <h3 className="title-info">Encuentra Tu Espacio Ideal</h3>
            <p className="text-info">Busca y filtra salas sostenibles según tus necesidades</p> 
            <Search />
            </div>
            <div className="Target">
            <Targets
            image ={require('../assets/images/InHome.png')}
            title = "Como en Casa"
            description = "Sala acogedora con decoración hogareña y ambiente cálido."
            estado = "Ocupado"
            capacidad = "4"
            precio = "$30/hr"
             />

                <Targets
            image ={require('../assets/images/Sala-Verde.png')}
            title = "Sala Verde"
            description = "Espacio de trabajo con plantas y luz natural para inspirar creatividad."
            estado = "Disponible"
            capacidad = "6"
            precio = "$45/hr"
             />
            </div>
        </div>
    );
}

export default Salas;