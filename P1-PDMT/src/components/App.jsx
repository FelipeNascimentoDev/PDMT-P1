import React from 'react'
import Busca from './Busca'
import LocalidadeLista from './LocalidadeLista'
import GraficoPizza from './GraficoPizza'
import 'primereact/resources/themes/viva-dark/theme.css'

class App extends React.Component {
  state = {
    resultadoBusca: null,
    listaDeEstados: []
  }

  onBuscaRealizada = (termo) => {
    this.setState({ resultadoBusca: termo })
  }

  atualizarEstadosBuscados = (listaDeEstados) => {
    this.setState({ listaDeEstados })
  }

  render() {
    return (
      <div className='grid justify-content-center'>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          <LocalidadeLista
            dados={this.state.resultadoBusca}
            onEstadosAtualizados={this.atualizarEstadosBuscados}
          />
        </div>
        <div className="col-12" style={{marginLeft: '400px'}}>
          <GraficoPizza estadosBuscados={this.state.listaDeEstados} />
        </div>
      </div>
    )
  }
}

export default App