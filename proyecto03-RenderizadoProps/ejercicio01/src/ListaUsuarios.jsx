function ListaUsuarios({ListaNombres}){
    return(
        <ul>
            {ListaNombres.map((nombre)=>(
                <li>{nombre}</li>
            ))}
        </ul>
    )
}       
export default ListaUsuarios