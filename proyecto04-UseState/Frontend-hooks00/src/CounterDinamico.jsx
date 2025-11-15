
function CounterDinamico({valor, setValor, countValor, setCountValor}) {
    return (
        <div>
            <p>Valor dinamico {valor}</p>
            <p>Has hecho clic {countValor} veces</p>
            <input type="number" value={valor} onChange={(e) => setValor(Number(e.target.value))}/>   
            <button onClick={() => setCountValor(countValor + valor)}>Incrementar por valor</button>
            <button onClick={() => setCountValor(countValor - valor)}>Decrementar por valor</button>
            <button onClick={() => setCountValor(0)}>Reiniciar</button>
            <hr />
        </div>
    );
}
export default CounterDinamico;



