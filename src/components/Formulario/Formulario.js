import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor]  = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (evento) => {
        evento.preventDefault();

        let datosAenviar = {
            nombre,
            puesto, 
            foto,
            equipo
        }
        registrarColaborador(datosAenviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear al colaborador.</h2>
            <CampoTexto titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required valor={nombre} 
            actualizarValor={actualizarNombre}/>

            <CampoTexto titulo="Puesto" 
            placeholder="Ingresar titulo" 
            required valor={puesto} 
            actualizarValor={actualizarPuesto}/>

            <CampoTexto titulo="Foto" 
            placeholder="Ingrese enlace de una foto" 
            required valor={foto} 
            actualizarValor={actualizarFoto}/>

            <ListaOpciones valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}/>
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear al equipo.</h2>
            <CampoTexto titulo="Titulo" 
            placeholder="Ingresar titulo" 
            required valor={titulo} 
            actualizarValor={actualizarTitulo}/>

            <CampoTexto titulo="Color" 
            placeholder="Ingresar el color en Hexadecimal" 
            required valor={color} 
            actualizarValor={actualizarColor}/>
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario