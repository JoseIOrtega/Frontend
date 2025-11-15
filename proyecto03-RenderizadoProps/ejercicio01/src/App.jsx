import Saludo from "./Saludo.jsx"
import Nombre from "./Nombre.jsx"
import Listanombres from "./Listanombres.jsx"
import Mensaje from "./Mensaje.jsx"
import TarjetaUsuario from "./TarjetaUsuario.jsx"
import ListaUsuarios from "./ListaUsuarios.jsx"
import FuncionProp from "./FuncionProp.jsx"

function App() {
  const nombres=["José","María","Pedro"]
  const usuarios=[
    {nombre:"Carlos",edad:19,ciudad:"Cali"},
    {nombre:"Victor",edad:17,ciudad:"Popayán"},
    {nombre:"Andres",edad:25,ciudad:"Medellin"}
  ]
  const lista=["Ana","Luis","Sofia"]
  
  function mostrarMensaje(){
    alert("¡Hola! Este es un mensaje desde una función en App.jsx")
  }
  return (
      <div>
        <Saludo></Saludo>
        <Nombre name="Luciana"></Nombre>
        <Listanombres usuarios={nombres}></Listanombres>
        <Mensaje edad={19}></Mensaje> 
        <TarjetaUsuario user={usuarios}></TarjetaUsuario>
        <ListaUsuarios ListaNombres={lista}></ListaUsuarios>
        <FuncionProp user={usuarios} mensaje={mostrarMensaje}></FuncionProp>
      </div>
  )
}

export default App
