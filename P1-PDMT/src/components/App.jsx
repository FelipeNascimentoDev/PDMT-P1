// rafce
import React from 'react'
import Busca from './Busca'
import LocalidadeLista from './LocalidadeLista'
import 'primereact/resources/themes/viva-dark/theme.css';
class App extends React.Component {

  state = {
    resultadoBusca: null
  }

  onBuscaRealizada = (dados) => {
    this.setState({ resultadoBusca: dados })
  }

  render(){
    return (
      <div className='grid justify-content-center'>
          <div className="col-12">
            <Busca
              onBuscaRealizada={this.onBuscaRealizada} />
          </div>
          <div className="col-12">
            <LocalidadeLista
              dados={this.state.resultadoBusca} />
          </div>
      </div>
    )
  }
}

export default App