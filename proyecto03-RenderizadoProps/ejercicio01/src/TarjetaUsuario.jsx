function TarjetaUsuario({user}) {
    return (
        <div>
            {user.map((u)=>(
                <p>{u.nombre} {u.edad} {u.ciudad}</p>
            ))}
        </div>
    )
}           
export default TarjetaUsuario