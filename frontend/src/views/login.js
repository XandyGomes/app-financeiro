import React from 'react'
import FormGroup from '../components/form-group'
import Card from '../components/card'

class Login extends React.Component{
    render() {
        return (
            <div className="row">
                <div className="col-md-6" style={ {position: 'relative', left: '300px'} }>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email"
                                                        id="exampleInputEmail1"
                                                        placeholder="Digite o E-mail" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password"
                                                        id="exampleInputPassword1"
                                                        placeholder="Password" />
                                            </FormGroup>
                                            <button className="btn btn-success">Entrar</button>
                                            <button className="btn btn-danger">Cadastrar</button>
                                        
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login