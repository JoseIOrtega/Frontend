function Mensaje({edad}){
    return(
        <div>
            {edad > 18 ? <h3>Es mayor de edad</h3> : <h3>Es menor de edad</h3>}
        </div>
    )
}                                                   
export default Mensaje