//import { useState } from "react";

function ContadorFuncaoComEstado({ valor, setValor }) {
  //const [valor, setValor] = useState(0);

  function incrementar() {
    setValor(valor + 1);
  }

  return (
    <div className="contador-card">
      <h2>Contador (Função com Estado)</h2>
      <p>Valor: {valor}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default ContadorFuncaoComEstado;

