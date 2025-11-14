import React from "react";
import Logo from "../assets/images/Logo.png";
import "../styles/Login.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  let emailUser = "Santiago@gmail.com";
  let PassUser = "santiago12345";
  let EmailAdmin = "Administrador@gmail.com";
  let PassAdmin = "adminpass123";

  const navigate = useNavigate();

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const[mostrarRegistro, setMostrarRegistro] = useState(false);

  const agregarCorreo = (e) => {
    SetEmail(e.target.value);
  };

  const AgregarPassword = (e) => {
    SetPassword(e.target.value);
  };
  const cargarUsuario = () => {
    SetEmail(emailUser);
    SetPassword(PassUser);
  };
  const cargarAdministrador = () => {
    SetEmail(EmailAdmin);
    SetPassword(PassAdmin);
  };

  const compararCredenciales = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Campos vacios");
      return;
    }

    if (email === emailUser && password === PassUser) {
      navigate("/Usuarios");
    } else if (email === EmailAdmin && password === PassAdmin) {
      navigate("/Administrador");
    } else {
      navigate("/Error");
    }
  };

  return (
    
    <div className="Principal-login">
      <div className="login"
      style={{display: mostrarRegistro ? 'none': 'flex'}}
      >
        <div className="logo">
          <section className="Contend-logo">
            <img src={Logo} alt="Logo Empresarial" className="image-logo" />
          </section>
        </div>

        <div className="title-login">
          <h3 className="Title-page">EcoRoom</h3>
          <p className="description-page">
            Sistema Inteligente De Gestion de Espacio Disponible
          </p>
        </div>

        <div className="form-login">
          <label className="title-email">Correo</label>
          <input
            type="email"
            className="inputs"
            value={email}
            onChange={agregarCorreo}
            placeholder=" Ingrese su Email"
            required
          />
          <label className="title-pass">Contraseña</label>
          <input
            type="Password"
            className="inputs"
            value={password}
            onChange={AgregarPassword}
            placeholder="Ingrese su contraseña"
            required
          />
          <button className="submit" onClick={compararCredenciales}>
            Iniciar Sesión
          </button>
        </div>

        <div className="demostracion">
          <p>Cuentas de Demostracion</p>
          <div className="options">
            <button className="user-type" onClick={cargarUsuario}>
              Usuario
            </button>
            <button className="user-type" onClick={cargarAdministrador}>
              Administrador
            </button>
          </div>
          <div className="cambio">
            <button className="Link-cambio" 
            onClick={() =>setMostrarRegistro(true)}
            >
              ¿No tienes Cuenta? Registrate
            </button>
          </div>
        </div>
      </div>
      <div className="link-registro"
      style={{display: mostrarRegistro ? 'flex':'none'}}
      >
        <div className="logo">
          <section className="Contend-logo">
            <img src={Logo} alt="Logo Empresarial" className="image-logo" />
          </section>
        </div>

        <div className="title-login">
          <h3 className="Title-page">EcoRoom</h3>
          <p className="description-page">
            Únete a EcoRoom y comienza a reservar espacios sostenibles
          </p>

          <div className="form-registros">
            <label htmlFor="nombre">Nombre</label>
            <input type="text"
            className="registro-inputs"
            placeholder="Ingrese su Nombre" />

            <label htmlFor="correo">Correo</label>
            <input className="registro-inputs"
            type="email"
            placeholder="Ingrese Por Favor Su Correo"
            />
             
            <label htmlFor="passwors">Contraseña</label>
            <input type="password"
            className="registro-inputs"
            placeholder="Ingrese POr favor su contraseña" />

             <label htmlFor="passwors">Confirmar Contraseña</label>
            <input type="password"
            className="registro-inputs"
            placeholder="Ingrese De Nuevo Su contraseña" />
        
            <button className="Registrarme">Registrarme</button>

          </div>

          <div className="link cambio">
             <button className="Link-cambio"
               onClick={() =>setMostrarRegistro(false)}
             >
              Ya tengo Una Cuenta - Inciar Sessión
            </button>
          </div> 
        </div>
      </div>
    </div>
  );
}
export default Login;
