import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/miyinari22.png",
    nombre: "Tilino",
    puesto: "Tilin",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://vocadb.net/Album/CoverPicture/33702?v=10",
    nombre: "Yan Xi",
    puesto: "MUTA",
    fav: true
  }]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#a6d157",
      colorSecundario: "#f0f8e2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#ff8a29",
      colorSecundario: "#ffeedf"
    }
  ])

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) =>{
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) =>{
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar Color de equipo
  const actualizarColor = (color, id)=>{

    const equiposActualizados = equipos.map((equipo) =>{
      
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador = {registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo) => <Equipo 
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
      }
      
      <Footer/>

    </div>
  );
}

export default App;
