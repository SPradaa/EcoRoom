import React from "react";
import Logo from '../assets/images/Logo.png';
import '../styles/Navbar.css'
import { useNavigate } from "react-router-dom";



function Navbar ({nombre}){
    const navigate = useNavigate();
const cerrar = () => {
    navigate('/', { replace: true });
};


    return(
        <header className="header">
            <nav className="nav">
                <div className="logs">
            <div className="contend-logo"><img src={Logo} alt="Logo Empresarial" className="image-logo" /></div>
            <p className="title">EcoRoom</p>
            </div>
            <div className="perfil-close">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"/></svg>
                <p>{nombre}</p>
                <button  className="Close" onClick={cerrar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h6.403v1H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h6.404v1zm10.846-4.461l-.702-.72l2.319-2.319H9.192v-1h8.887l-2.32-2.32l.702-.718L20 12z"/></svg>
                    Salir
                </button>
            </div>
            </nav>
        </header>
    );

}
export default Navbar;