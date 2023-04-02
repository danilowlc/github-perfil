import { useState } from 'react'
import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import RepoList from './components/RepoList'

function App() {

  // const nome = 'Danilo'

  // function retornaNome() {
  //   return nome
  // }

  // const pessoa = {
  //   nome: 'Ana Paula'
  // }

  // let isDia = true
  // let isNoite = true

  // const [formIsVisible, serFormIsVisible] = useState(true)

  const [nameUser, setNameUser] = useState('')

  return (
    <>
      {/* <h1>Olá React</h1>
      <h2>Olá mundo</h2> */}
      <>
        {/* <h3>
          Olá, {retornaNome()}
        </h3>
        <h3>
          Olá, {pessoa.nome}
        </h3>
        <h3>
          {isDia ? 'Bom dia' : 'Boa tarde'}
        </h3>
        <h3>
          {isNoite && 'Boa noite'}
        </h3> */}
      </>
      {/* {formIsVisible && (
        <Formulario />
        )}
      <button onClick={() => serFormIsVisible(!formIsVisible)} type='button'>Toggle form</button> */}
      <input type="text" onBlur={(e) => setNameUser(e.target.value)} />

      {nameUser.length > 4 && (
        <>
          <Perfil nameUser={nameUser} />
          <RepoList nameUser={nameUser} />
        </>
      )}

    </>




  )
}

export default App
