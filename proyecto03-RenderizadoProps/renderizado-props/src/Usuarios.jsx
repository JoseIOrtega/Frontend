function Usuarios({user}){
    return( 
        <div>
            {user.map((u)=>(
                <p>{u.nombre} {u.Direccion}</p>
            ))}
        </div>
    )
}
export default Usuarios