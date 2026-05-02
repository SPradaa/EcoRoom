import React from "react";
import "../../styles/ResumenModule.css";
import { useEffect , useState} from "react";
import Graphics from "./Graphics";
function ResumenModule() {
    const [datos, setDatos]= useState([])
    const [totalHoras, SetTotalHoras] = useState(0)
    useEffect(()=>{
        const ResevasLocales =localStorage.getItem('reservas');
        

        if(ResevasLocales){
            try{
           const DatosReservas = JSON.parse(ResevasLocales);
           setDatos(DatosReservas)
        }catch (error){
            console.log('Los datos no se ha podido recuperar', error)

        }}
    },[])


    useEffect(()=>{
      const TotalHorasCalculadas = datos.reduce((suma, reservaActual) =>{
        const horasTotal = parseInt(reservaActual.cantidadHoras) || 0;

        return suma + horasTotal;

      },0)
      SetTotalHoras(TotalHorasCalculadas);
    },[datos])

  return (
    <div className="ResumenModule">
      <div className="moduleEstadistic">
        <section className="cardEstadistic">
            <p className="infoEstadistic">Total Reservas:</p>
              <p className="dateEstadistic">{datos.length}</p>
        </section>

        <section className="cardEstadistic">
                      <p className="infoEstadistic">Total Horas Reservadas </p>
              <p className="dateEstadistic">{totalHoras}</p>
        </section>

        <section className="cardEstadistic">
               <p className="infoEstadistic">EcoScore: </p>
              <p className="dateEstadistic">{(datos.length)/100} / 100</p>
        </section>
      </div>

      <div className="GraphicModule">
        <Graphics
        salas={datos}
        horas={totalHoras}/>
      </div>
    </div>
  );
}
export default ResumenModule;
