import { useState, useEffect } from "react"

const Formulario = () => {

    const [materiaA, setmateriaA] = useState(0)
    const [materiaB, setmateriaB] = useState(0)
    const [materiaC, setmateriaC] = useState(0)
    const [nome, setNome] = useState('Olá')

    useEffect(() => {
        console.log('O estado nome mudou')
    }, [nome])

    useEffect(() => {
        console.log('O estado mateira mudou para: ' + materiaA)
    }, [materiaA])

    useEffect(() => {
        console.log('O componete iniciou')
    }, [])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3
        
        if (media >= 7) {
            return (
                <p>{nome} sua nota é {media}, voce foi aprovado</p>
            )
        } else {
            return (
                <p>{nome} sua nota é {media}, voce foi reprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota materia A" onChange={event => setmateriaA(parseFloat(event.target.value))} />
            <input type="number" placeholder="Nota materia B" onChange={event => setmateriaB(parseFloat(event.target.value))} />
            <input type="number" placeholder="Nota materia C" onChange={event => setmateriaC(parseFloat(event.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario
