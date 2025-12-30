import TextoEstilizado from './componentes/texto-estilizado/texto-estilizado.jsx'
import Button from './componentes/button/button.jsx'

function App() {

  return (
    <>
      <TextoEstilizado texto='Ola mundo!' color='blue' />
      <TextoEstilizado />

      <Button label='Clique aqui'/>
    </>
  )
}

export default App
