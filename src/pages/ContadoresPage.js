import ContadorFuncaoComEstado from "../components/contador_funcao_com_estado";
import ContadorFuncaoSemEstado from "../components/contador_funcao_sem_estado";
import ContadorClasseComEstado from "../components/contador_classe_com_estado";
import ContadorClasseSemEstado from "../components/contador_classe_sem_estado";

export default function ContadoresPage({ valor, setValor }) {
  return (
    <div>
      <h1>Contadores</h1>

      <h2>Com estado (interativos)</h2>
      <div className="contadores-grid">
        <ContadorFuncaoComEstado valor={valor} setValor={setValor} />
        <ContadorClasseComEstado valor={valor} setValor={setValor} />
      </div>

      <h2>Sem estado (apenas exibição)</h2>
      <div className="contadores-grid">
        <ContadorFuncaoSemEstado valor={valor} />
        <ContadorClasseSemEstado valor={valor} />
      </div>
    </div>
  );
}

