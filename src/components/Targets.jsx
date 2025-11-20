import React, { useEffect, useState } from "react";
import "../styles/Targets.css";

function Targets({ image, title, description, estado, capacidad, precio }) {
  const [modal, setModal] = useState(false);
  const [inicio, setInicio] = useState("");
  const [fin, setFin] = useState("");
  const [reserva, SetReseva] = useState(0);
  const [precioTotal, SetPrecioTotal] = useState(0);
  const [advertencia, setAdvertencia] = useState("");
  const [fecha, setFecha] = useState("");
  const guardarReserva = () => {
    setAdvertencia(""); // limpiar errores previos

    if (!fecha || !inicio || !fin) {
      setAdvertencia("Por favor, completa todos los campos de la reserva.");
      return;
    }

    const nuevaReserva = {
      sala: title,
      fecha,
      capacidad,
      horaInicio: inicio,
      horaFin: fin,
      cantidadHoras: reserva,
      precioTotal: precioTotal,
    };

    const reservasPrevias = JSON.parse(localStorage.getItem("reservas")) || [];

    reservasPrevias.push(nuevaReserva);

    localStorage.setItem("reservas", JSON.stringify(reservasPrevias));

    console.log("Guardando:", reservasPrevias);

    alert("Reserva confirmada con éxito.");
    setModal(false);
  };

  useEffect(() => {
    const NumInicio = parseInt(inicio);
    const NumFin = parseInt(fin);

    if (!inicio || !fin) return;

    if (
      isNaN(NumInicio) ||
      isNaN(NumFin) ||
      NumInicio > NumFin ||
      NumInicio === NumFin
    ) {
      setAdvertencia("Por favor, selecciona horas válidas.");
      SetPrecioTotal(0);
      SetReseva(0);
      return;
    }

    const horas = NumFin - NumInicio;
    SetPrecioTotal(horas * precio);
    SetReseva(horas);
    setAdvertencia("");
  }, [inicio, fin, precio]);

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
        <hr />
        <p className="precio">
          Desde:<span className="precio-sala">${precio}</span>
        </p>
        <button className="reservar-button" onClick={() => setModal(true)}>
          Reservar Ahora
        </button>
      </div>

      <div
        className="sala-info"
        style={{ display: modal ? "flex" : "none" }}
        onClick={(e) => setModal(false)}
      >
        <div className="sala-titulo" onClick={(e) => e.stopPropagation()}>
          <h3 name="tituloSala">{title}</h3>
          <p className="reserva-text">Completa los Detalles de tu Reserva</p>
          <div className="reserva-form">
            <label>
              Fecha:
              <input
                type="date"
                className="reserva-input"
                name="fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </label>
            <label>
              Capacidad:
              <input
                type="number"
                min="1"
                className="reserva-input"
                readOnly
                value={capacidad}
              />
            </label>
            <label>
              Hora de Inicio:
              <select
                className="reserva-input"
                value={inicio}
                onChange={(e) => setInicio(e.target.value)}
                name="horaInicio"
              >
                <option value="">Selecciona una hora</option>
                <option value="00">00:00</option>
                <option value="01">01:00</option>
                <option value="02">02:00</option>
                <option value="03">03:00</option>
                <option value="04">04:00</option>
                <option value="05">05:00</option>
                <option value="06">06:00</option>
                <option value="07">07:00</option>
                <option value="08">08:00</option>
                <option value="09">09:00</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
                <option value="22">22:00</option>
                <option value="23">23:00</option>
              </select>
            </label>
            <label>
              Hora de Fin:
              <select
                className="reserva-input"
                value={fin}
                onChange={(e) => setFin(e.target.value)}
                name="horaFin"
              >
                <option value="">Selecciona una hora</option>
                <option value="00">00:00</option>
                <option value="01">01:00</option>
                <option value="02">02:00</option>
                <option value="03">03:00</option>
                <option value="04">04:00</option>
                <option value="05">05:00</option>
                <option value="06">06:00</option>
                <option value="07">07:00</option>
                <option value="08">08:00</option>
                <option value="09">09:00</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
                <option value="22">22:00</option>
                <option value="23">23:00</option>
              </select>
            </label>
          </div>
          <div className="Info-Adicional">
            <p className="Advertencia">{advertencia}</p>
            <div className="Resumen-Reserva">
              <p>Cantidad De Horas Reservadas :</p>
              <p name="cantidadHoras">{reserva} horas</p>{" "}
            </div>
            <div className="Resumen-Reserva">
              <p>Precio Total De La Reserva :</p>
              <p name="precioTotal">${precioTotal}</p>
            </div>

            <hr style={{ background: "green" }} />
            <div className="Score">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="#65a30d"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path d="M31 43s-13 1-20-7S4 4 4 4s24-1 32 5s6 23 6 23" />
                  <path d="M44 44s-11.18-8.449-18-16s-10-15-10-15m10 15l1-13m-1 13l-10-1" />
                </g>
              </svg>
              <p>EcoRoom Score:</p>{" "}
              <span className="calificacion">100/100</span>
            </div>
          </div>
          <div className="acciones-Modal">
            <button className="cerrar" onClick={() => setModal(false)}>
              Cerrar
            </button>

            <button className="confirmar-reserva" onClick={guardarReserva}>
              Confirmar Reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Targets;
