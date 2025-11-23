import { useState } from 'react'; 
import Counter from './Counter.jsx'
import CounterDinamico from './CounterDinamico.jsx'

export function App() {
  const [count, setCount] = useState(0);
  
  const [countValor, setCountValor] = useState(0);
  const [valor, setValor] = useState(0);
  return (
    <div>
      <Counter conteo={count} establecer={setCount}></Counter>
      <CounterDinamico valor={valor} setValor={setValor} countValor={countValor} setCountValor={setCountValor}></CounterDinamico>
    </div>
  )
}
