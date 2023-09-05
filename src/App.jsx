import MiPrimerComponente from "./components/MiPrimerComponente"

const App = () => { 

  const curso = "React JS"
  const saludo = "Bienvenidos !!!!"

  const tomarValor = (valor) => {
    alert(`el valor es: ${valor}`)
  }
  
  return (
    <>
      
      <h1> Hola estoy probando </h1>
      
      < MiPrimerComponente 

        curso = {curso} 
        usuario = {true}
        saludo = {saludo}
        tomarValor={tomarValor}

      />


    </>
  )
}


export default App
