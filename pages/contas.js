import { useState } from "react"

function Contas() {
    return (
        <div>
            <h1>Contas</h1>
            <Valor />
        </div>
    )
}

function Valor() {
    const [valor,setValor] = useState(0);

    function adicionaValor() {
        setValor(valor+1);
    }

    return  (
        <div>
            <div >
                <div>Valor:</div>
                <input></input>
            </div>
            <button onClick={adicionaValor}>Adicionar</button>
        </div>
    )
}


function Contador() {
    const [contador,setContador] = useState(1);

    function adicionaContador() {
        setContador(contador+1);
    }

    return  (
        <div>
            <div>{contador}</div>
            <button onClick={adicionaContador}>Adicionar</button>
        </div>
    )
}

export default Contas
