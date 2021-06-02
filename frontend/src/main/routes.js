import React from 'react'
import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'
import ConsultaLancamentos from '../views/lancamentos/consulta_lancamentos'

import {Route, Switch, HashRouter } from 'react-router-dom'

function Routes(){
  return(
    <HashRouter>
      <Switch>
        <Home path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro-usuarios" component={CadastroUsuario} />
        <Route path="/consulta-lancamentos" component={ConsultaLancamentos } />
      </Switch>
    </HashRouter>
  )
}

export default Routes