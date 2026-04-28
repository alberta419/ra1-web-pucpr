import Sobre from "./Sobre";
import Sociais from "./Sociais";

function Equipe(props) {
  return (
    <div className="equipe-card">
      <Sobre
        usuario={props.nome}
        funcao={props.cargo}
        anos={props.idade}
      />

      <Sociais
        linked={props.linkedin}
        gith={props.github}
      />
    </div>
  );
}

export default Equipe;

