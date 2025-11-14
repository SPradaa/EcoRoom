import react from "react";
import "../styles/Targets.css";

function Targets({ image, title, description, estado, capacidad, precio }) {
    const Reservar = () => {


    }
  return (
    <div className="targets">
      <div className="target-card">
        <img
          src={image}
          alt="Imagen de referncia De la sala"
          className="target-image"
        />
        <h4 className="target-title">{title}</h4>
        <p className="target-description">{description}</p>
        <p
          className="target-estado"
          style={{
            color: estado === "Disponible" ? "white" : "black",
            backgroundColor: estado === "Disponible" ? "#00a63e" : "#fa0015c2",
          }}
        >
          {estado}
        </p>
        <p className="capacidad">Capacidad: {capacidad} personas</p>
          <hr/>
        <p className="precio">Desde:<span className="precio-sala">{precio}</span></p>
        <button className="reservar-button" onClick={Reservar}>Reservar Ahora</button>
      </div>

          <div className="sala-info">
            <div className="sala-titulo">
                <h3>{title}</h3>
                <p className="reserva-text">Completa los Detalles de tu Reserva</p>
                <div className="reserva-form">
                <label>Fecha:
                <input type="date" className="reserva-input" /></label>
                <label>Capacidad: 
                <input type="number" min="1" className="reserva-input" readOnly value={capacidad} /></label>
                <label>Hora de Inicio: 
                <input type="time" className="reserva-input" /></label> 
                <label>Hora de Fin: 
                <input type="time" className="reserva-input" /></label>
                </div>
                

            </div>
          </div>

    </div>
  );
}
export default Targets;
