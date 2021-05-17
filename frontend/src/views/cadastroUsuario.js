import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'

class CadastroUsuario extends React.Component{
  state = {
    nome: '',
    email: '',
    senha: '',
    senhaRepeticao: ''
  }
  
  cadastrar = () =>{
    console.log(this.state)
  }

  cancelar = () =>{
    this.props.history.push('/login')
  }

  render(){
    return (
      <div className="container">
        <Card title="Cadastro de Usuário">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Nome: *" htmlFor= "inputNome">
                      <input type="text"
                      className="form-control"
                      id="inputNome"
                      name="nome"
                      onChange={e => this.setState({nome: e.target.value})} />
                </FormGroup>

                <FormGroup label="Email: *" htmaFor="inputEmail">
                      <input type="email"
                        className="form-control"
                        id="inputEmail"
                        name="email"
                        onChange={e => this.setState({email: e.target.value})} />
                </FormGroup>

                <FormGroup label="Senha: *" htmaFor="inputSenha">
                      <input type="password"
                        className="form-control"
                        id="inputSenha"
                        name="senha"
                        onChange={e => this.setState({senha: e.target.value})} />
                </FormGroup>

                <FormGroup label="Repita a Senha: *" htmaFor="inputRepitaSenha">
                      <input type="password"
                        className="form-control"
                        id="inputRepitaSenha"
                        name="senha"
                        onChange={e => this.setState({senhaRepeticao: e.target.value})} />
                </FormGroup>

                    <button onClick={this.cadastrar} type="button" className="btn btn-success">
                      <i className="pi pi-save"></i> Salvar</button>
                    <button onClick={this.cancelar} type="button" className="btn btn-danger">
                      <i className="pi pi-times"></i> Voltar</button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}
export default withRouter(CadastroUsuario)