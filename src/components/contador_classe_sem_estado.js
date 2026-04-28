import React, { Component } from "react";

class ContadorClasseSemEstado extends Component {
  render() {
    return (
      <div className="contador-card">
        <h2>Contador (Classe sem Estado)</h2>
        <p>Valor: {this.props.valor}</p>
        <button>Incrementar</button>
      </div>
    );
  }
}

export default ContadorClasseSemEstado;


