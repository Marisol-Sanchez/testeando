const MiPrimerComponente = ({curso, usuario, 
    saludo, tomarValor}) => {
  


tomarValor(22)


    //console.log(typeof props)
    return (
    <>
        <div> {curso} </div>
        <h2> {usuario ? "Es usuario" : "no es usuario"} </h2>
        <h3> {saludo} </h3>
    </>
    )
}

export default MiPrimerComponente