import Mensaje from "./Mensaje.jsx";
import Variable from "./Variable.jsx";
import Nombre from "./Nombre.jsx";
import Usuarios from "./Usuarios.jsx";

function App(){
  const lista=[
    {nombre:"Alexandra", Direccion:"Calle 0000"},
    {nombre:"Alexandra2", Direccion:"Calle 1111"},
  ]; 
  return(
    <div>
      <Mensaje></Mensaje>
      <Variable a={5} b={13} resultado={16}></Variable>
      <Nombre name={"Juanito Perez"}></Nombre>
      <Nombre name={"Faber Castellano"}></Nombre>
      <Usuarios user={lista}></Usuarios>
    </div>
  )
}
export default App
