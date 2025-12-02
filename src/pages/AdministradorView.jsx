import React from "react";
import Dashboard from "../components/admin/Dashboard";
import "../styles/Administrador.css"
import { useState} from "react";


function AdministradorView () {
    const [status, setStatus] = useState(1)
    console.log(status)
  

     return(
        <div className="admin">
            <Dashboard />
            <div className="adminView">
            <div className="Options">
            <button className="option resumen" onClick= {()=>setStatus(1)} style={{backgroundColor: status === 1 ? 'white' : 'transparent'}}>Resumen</button>
            <button className="option reserva" onClick={()=>setStatus(2)} style={{backgroundColor: status === 2 ? 'white': 'transparent'}} >Reservas</button>
            <button className="option reporte" onClick={()=>setStatus(3)} style={{backgroundColor: status === 3 ? 'white': 'transparent'}} >Reportes</button>
            </div>
                </div>

              <div className="modulos">

                <div className="resumenModule" style={{display : status === 1 ? 'flex' : 'none'}}>
                    <p>hello</p>
                </div>
                <div className="reservaModule" style={{display: status=== 2 ? 'flex' : 'none'}}>
        <p>no</p>
                </div>
                <div className="reporteModule"style={{display: status === 3 ? 'flex' : 'none'}} >
                <p>si</p>
                </div>
                </div>
               
        </div>
     );
}
export default AdministradorView;