import './App.css';
import {Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Usuarios from './pages/UsuariosView'
import Administrador from './pages/AdministradorView'
import Error from './pages/Error'

function App() {
  return (
    <Routes>
     <Route path='/' element={<Login />} />
     <Route path='/usuarios' element={<Usuarios/>} />
     <Route path='/administrador' element = {<Administrador />} />
     <Route path='*' element = {<Error />} />


      </Routes>
   
  );
}

export default App;
