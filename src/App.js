import './App.css';
import {useState} from "react"
/* import useTemperatura from './hooks/useTemperatura';

function App() {
  const {mayorACero, setGrados} = useTemperatura();
  const handleChange = (e) => {
    setGrados(e.target.value)
  }

  return (
    <>
    <div className="App" style={{marginTop: 20}}>
      <input type="number" placeholder="Ingrese temp. en °C" onChange={(e)=> handleChange(e)}/>
      <p>{mayorACero}</p>
    </div>
    </>
  );
} */



function App() {
  const [numero, setNumero] = useState(0)
  const [resultado, setResultado] = useState(0)

  const handleChange = (e) => {
    setNumero(e.target.value)
  }

  const handleClick = () => {
    setResultado(parseInt(numero) + parseInt(resultado))
    setNumero(0)
  }

  return (
    <>
    <div className="App" style={{marginTop: 20}}>
      <input value={numero} type="number" placeholder="Ingrese un número" onChange={(e)=>handleChange(e)}/>
      <button onClick={()=>handleClick()}>+</button>
      <p>Resultado: {resultado}</p>
    </div>
    </>
  );
}

export default App;
