import { useState } from "react"
import "./date-counter.css"

const DateMsg = ({ count }) => {
    const date = new Date()
    const options = {
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        day: '2-digit',
    };
    const day = date.setDate(date.getDate() + count)
    const formattedDate = new Date(day).toLocaleDateString("pt-BT", options)
    const singularPlural = count === 1 || count === -1 ? "dia" : "dias"

    return (
        <span>
            {
                count > 0
                ? `${count} ${singularPlural} à partir de hoje será ${formattedDate}`
                : count < 0
                ? `${Math.abs(count)} ${singularPlural} atrás era ${formattedDate}`
                : `Hoje é ${formattedDate}`
            }
        </span>
    )
}

const DateCounter = () => {
    const [interval, setInterval] = useState(1)
    const [count, setCount] = useState(0)

    const decrementInterval = () => setInterval(i => (i === 1 ? i : i - 1))
    const incrementInterval = () => setInterval(i => i + 1)
    const decrementCount = () => setCount(c => c - interval)
    const incrementCount = () => setCount(c => c + interval)

    return (
        <div className="container">
            <div className="count">
                <button onClick={ decrementInterval } >-</button>
                <h2>Interval: {interval}</h2>
                <button onClick={ incrementInterval } >+</button>
            </div>
            <div className="count">
                <button onClick={ decrementCount } >-</button>
                <h2>Contagem: {count}</h2>
                <button onClick={ incrementCount } >+</button>
            </div>
            <DateMsg count={count} />
        </div>
    )
}

export { DateCounter }