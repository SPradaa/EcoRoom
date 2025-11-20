import React from "react";
import '../../styles/Reservas.css'
import { useState, useEffect } from "react";

function Reservas() {

        const [ObtenerReserva, setObtenerReserva] = useState([]);

        useEffect(()=>{
            const ObtenerReserva = localStorage.getItem('reservas')
            if(ObtenerReserva){ 
                try{
                    const reservaObtenidas = JSON.parse(ObtenerReserva);
                    if(Array.isArray(reservaObtenidas)){
                        setObtenerReserva(reservaObtenidas);
                    }
                }catch(error){
                    console.log(`Error al Obtener JSON`, error)
                }
            }

        },[])
    
return (
    <div className="contendReserv">
        
        <div className="contenedor-estadistica">
        <div className="estadistica">
            <p className="info-estadistica">Total de Reservas:</p>
            <p className="cant-reservas">{ObtenerReserva.length}</p>
        </div>

         <div className="estadistica">
            <p className="info-estadistica">Reservas Activas:</p>
            <p className="cant-reservas">{ObtenerReserva.length}</p>
        </div>  
        </div>


        <div className="contenedor-solicitudes">
        <p className="history">Historial de Reservas</p>

       
    {
        ObtenerReserva.map((reserva, index) =>(
            <div className="target-reserva">
                <h4 key={index} className="tituloSala">{reserva.sala}</h4>
                <p className="fecha">{reserva.fecha} °  Desde las  {reserva.horaInicio} Hasta las {reserva.horaFin}</p>
                <span className="horas">Horas:  {reserva.cantidadHoras}</span>
                <span className="total-precio">Precio total: {reserva.precioTotal}</span>
            </div>
        ))
    }

    </div>
    </div>
);

}
export default Reservas;