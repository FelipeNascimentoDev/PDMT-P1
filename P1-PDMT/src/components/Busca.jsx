import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputText } from 'primereact/inputtext'
export class Busca extends Component {
    
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        console.log(event.target.value)
        this.setState({
            termoDeBusca: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault() // evita que o envio do formulário recarregue a página web
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div
                    className='flex flex-column'>

                    <InputText 
                    className='w-full' 
                    placeholder={this.props.dica}
                    maxLength={8}
                    onChange={this.onTermoAlterado}
                    value={this.state.termoDeBusca}/>
                    <br/>
                    <Button
                        className='mt-3'
                        label='OK'
                        outlined />
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    dica: 'Digite um CEP'
}

export default Busca