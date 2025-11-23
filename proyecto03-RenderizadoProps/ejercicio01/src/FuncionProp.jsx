function FuncionProp({user,mensaje}) {
    return (
        <div>
            {user.map((u)=>(
                <div>
                    <button onClick={mensaje}>{u.nombre}</button>
                    <br />
                </div>
               
            ))}
        </div>
    )
}   
export default FuncionProp