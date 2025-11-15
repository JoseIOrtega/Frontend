function Listanombres({usuarios}){
    return(
        <div>
            {usuarios.map((u)=>(
                <p>{u}</p>
            ))}
        </div>
    )
}
export default Listanombres