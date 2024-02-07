import "./steps.css"

const Steps = () => {
    const handlerButton = e => console.log(e.target.textContent)
    const arrayLength = 3
    const arrayRange = [...Array(arrayLength + 1).keys()].slice(1)
    const activeItem = 1

    return (
        <>
            <div className="container-close">
                <button onClick={ handlerButton } className="close">Fechar</button>
            </div>
            <div className="steps">
                <div className="numbers">
                    {
                        arrayRange.map(item =>
                            (item === activeItem
                                ? <div key={ item } className="active">{ item }</div>
                                : <div key={ item }>{ item }</div>
                            )
                        )
                    }
                </div>
                <div className="message">
                    Passo 1: Entender o problema do cliente
                </div>
                <div className="buttons">
                    <button onClick={ handlerButton }>Anterior</button>
                    <button onClick={ handlerButton }>Próximo</button>
                </div>
            </div>
        </>
    )
}

export { Steps }