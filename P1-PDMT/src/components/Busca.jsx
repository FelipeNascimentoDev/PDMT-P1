import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import axios from 'axios'

export class Busca extends Component {

    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        this.setState({
            termoDeBusca: event.target.value
        })
    }

    onFormSubmit = async (event) => {
        event.preventDefault() // evita que o envio do formulário recarregue a página web

        const { termoDeBusca } = this.state

        if (!termoDeBusca || termoDeBusca.length !== 8 || isNaN(termoDeBusca)) {
            alert('Por favor, digite um CEP válido com 8 dígitos numéricos.')
            return
        }

        try {
            const resposta = await axios.get(`https://viacep.com.br/ws/${termoDeBusca}/json/`)
            const data = resposta.data

            if (data.erro) {
                alert('CEP não encontrado.')
                return
            }

            this.props.onBuscaRealizada(data)

            console.log(data)
        } catch (error) {
            alert('Erro ao buscar o CEP. Verifique sua conexão ou tente novamente mais tarde.')
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                    <InputText
                        className='w-full'
                        placeholder={this.props.dica}
                        maxLength={8}
                        onChange={this.onTermoAlterado}
                        value={this.state.termoDeBusca}
                    />
                    <br />
                    <Button
                        className='mt-3'
                        label='OK'
                        outlined
                    />
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    dica: 'Digite um CEP'
}

export default Busca