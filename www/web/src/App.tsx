//Componentes e propriedades

interface ButtonProps {
  title: string;
}


//Exemplo de componente

function Button(props: ButtonProps) {
  return (
    <button> {props.title} </button>

  )
}


function App() {
  return (
    <div>
      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
      <Button title="Oie" />
    </div>

  )
}

export default App
