import Clinicas from "./Clinicas";
import Medicos from "./Medicos";
import Pacientes from "./Pacientes";


function App() {
  return (
    <div>
      <table>
          <tr>
              <td style={{ border: "1px solid black", padding: "5px" }}> 
                <Clinicas></Clinicas>
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                <Medicos></Medicos>
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                <Pacientes></Pacientes>
              </td>
          </tr>
      </table>
    </div>
  )
}
export default App
