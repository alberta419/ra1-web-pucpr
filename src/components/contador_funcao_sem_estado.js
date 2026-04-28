function ContadorFuncaoSemEstado(props) {
  return (
    <div className="contador-card">
      <h2>Contador (Função sem Estado)</h2>
      <p>Valor: {props.valor}</p>
      <button>Incrementar</button>
    </div>
  );
}

export default ContadorFuncaoSemEstado;


