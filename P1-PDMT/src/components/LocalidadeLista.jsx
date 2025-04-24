import React, { Component } from 'react'
import { Card } from 'primereact/card'

export class LocalidadeLista extends Component {
  state = {
    consultas: []
  }

  componentDidUpdate(prevProps) {
    if (this.props.dados && this.props.dados !== prevProps.dados) {
      this.setState((prevState) => ({
        consultas: [this.props.dados, ...prevState.consultas]
      }))
    }
  }

  render() {
    const { consultas } = this.state

    return (
      <div className="card-div" style={{ width: '300px', height: '200px' }}>
        {consultas.map((item, index) => (
          <Card key={index} title={item.cep} style={{ margin: '20px' }}>
            <div className="card-text">
              <p>{item.logradouro}</p>
              <p>{item.bairro}</p>
              <p>{item.localidade} - {item.uf}</p>
            </div>
          </Card>
        ))}
      </div>
    )
  }
}

export default LocalidadeLista