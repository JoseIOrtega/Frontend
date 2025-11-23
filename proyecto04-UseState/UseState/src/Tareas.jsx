import {useState} from 'react';
function Tareas(){
    const [tareas,setTareas]=useState([]);
    const [nueva,setNueva]=useState("");
    function agregarTarea(){
        setTareas([...tareas,nueva]);
    }
    return(
        <div>
            <hr />
            <h2>Lista tareas</h2>
            <input type="text" onChange={(event)=>setNueva(event.target.value)}></input>
            <button onClick={()=>agregarTarea()}>Agregar Tarea al Arreglo</button>
            <ul>
                {
                tareas.map((t)=>(
                    <li>{t}</li>
                ))
            }
            </ul>
            
        </div>
    )
}
export default Tareas;