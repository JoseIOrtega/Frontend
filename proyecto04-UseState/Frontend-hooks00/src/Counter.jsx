
function Counter({conteo, establecer}) {
    return (
        <div>
            <p>Has hecho clic {conteo} veces</p>
            <button onClick={() => establecer(conteo + 1)}>Incrementar</button>
            <button onClick={() => establecer(conteo - 1)}>Decrementar</button>
            <hr />
        </div>
    );
}
export default Counter;



