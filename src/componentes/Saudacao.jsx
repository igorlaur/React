import React, {Component} from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome,
        sobrenome: this.props.sobrenome

    }

    constructor(props) {
        super(props) // Tenho que chamar para manter compatibilidade

        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
        this.setSobrenome = this.setSobrenome.bind(this)
    }

    setTipo(e){
        this.setState({ tipo: e.target.value })
    }

    setNome(e){ // Chamo a função
        this.setState({ nome: e.target.value })
    }

    setSobrenome(e){
        this.setState({ sobrenome: e.target.value })
    }


    render(){ /* onChange que faz eu poder alterar as funções */
        const { tipo, nome, sobrenome } = this.state
        return (
            <div>
                <h1>{tipo} {nome} {sobrenome}</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} /> 
                <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome} /> 
                <input type="text" placeholder="Sobrenome..." value={sobrenome} onChange={e => this.setSobrenome(e)} />
            </div>
        )
    }
}