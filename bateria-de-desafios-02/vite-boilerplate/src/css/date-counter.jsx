import "./date-counter.css"

const data = [
    {
        id: crypto.randomUUID(),
        name: "Intervalo",
        value: 1
    },
    {
        id: crypto.randomUUID(),
        name: "Contagem",
        value: 0
    }
]

const Counter = ({ name, value }) => {
    const handleCounter = e => {
        const signal = e.target.dataset.js
        console.log(`Clicou no ${ signal } do ${ name }`)
    }
    return (
        <div className="count">
            <button onClick={ handleCounter } data-js="menos">-</button>
            <h2>{ name }: {value}</h2>
            <button onClick={ handleCounter } data-js="mais">+</button>
        </div>
    )
}

const DateCounter = () => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    const date = new Date().toLocaleDateString("pt-BR", options)

    return (
        <div className="container">
            {
                data.map(({ id, name, value }) => <Counter key={id} name={name} value={value} />)
            }
            <span>{`Hoje é ${date}`}</span>
        </div>
    )
}

export { DateCounter }