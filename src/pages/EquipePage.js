import Equipe from "../components/Equipe";

export default function EquipePage() {
  return (
    <div>
      <h1>Nossa Equipe</h1>

      <Equipe
        nome="Douglas Henrique do Prado"
        cargo="Desenvolvedor Back-end"
        idade={23}
        linkedin="douglas-prado"
        github="douglasprado"
      />
      <Equipe
        nome="Pedro Henrique Hara Bialy"
        cargo="Desenvolvedor Front-end"
        idade={20}
        linkedin="pedro-bialy"
        github="pedrobialy"
      />
      <Equipe
        nome="Ryan D'Oliveira Lopes Figueredo"
        cargo="Desenvolvedor Full Stack"
        idade={23}
        linkedin="ryanfigueredo"
        github="ryanfigueredo"
      />
      <Equipe
        nome="Yasmim Egidio de Oliveira"
        cargo="Designer e Front-end"
        idade={18}
        linkedin="yasmin-oliveira"
        github="alberta419"
      />
    </div>
  );
}
