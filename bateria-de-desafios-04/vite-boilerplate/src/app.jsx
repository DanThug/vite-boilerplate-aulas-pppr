import { useState } from 'react'
import './app.css'

const items = [
    {
        id: crypto.randomUUID(),
        name: "Anilha",
        total: 8,
        checked: false,
        createAt: '22/02/2024, 22:55:34'
    },
    {
        id: crypto.randomUUID(),
        name: "Presilha",
        total: 4,
        checked: false,
        createAt: '22/02/2024, 20:15:22'
    },
    {
        id: crypto.randomUUID(),
        name: "Barra",
        total: 7,
        checked: false,
        createAt: '21/02/2024, 18:52:19'
    }
]
const App = () => {
    const [storage, setStorage] = useState(items)
    const addItem = obj => setStorage(s => [...s, obj])
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }
    const date = new Date().toLocaleTimeString("pt-BR", options)

    const handleSubmit = e => {
        e.preventDefault()
        
        const { total, name } = e.target.elements
        const obj = {
            id: crypto.randomUUID(),
            name: name.value,
            total: total.value,
            checked: false,
            createAt: date
        }

        addItem(obj)
    }

    const toggleCheckbox = () => {
        
    }

    const clearStorage = () => setStorage([])

    const handleOrderBy = e => {
        if (e.target.value === "alphabetic") {
            setStorage(s => [...s.sort((a, b) => a.name.localeCompare(b.name))])
            return
        }

        if (e.target.value === "recent") {
            setStorage(s => [...s.sort((a, b) => a.createAt.localeCompare(b.createAt))])
            return
        }
    }

    return (
        <div className="container">
            <header>
                <div>
                    <img src="../assets/logo-espaco-mulher.png" alt="logo-espaco-mulher" />
                    </div>
                <div>
                    <h2>Espaço Mulher</h2>
                </div>
            </header>

            <nav>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span>
                            O que você precisa guardar?
                        </span>
                    </div>
                    <div>
                        <select name="total" id="">
                            {
                                [...Array(11).keys()].slice(1)
                                .map(index => <option key={index} value={index}>{index}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <input name="name" placeholder='Manda aqui' />
                    </div>
                    <div>
                        <button onClick={addItem}>Adicionar</button>
                    </div>
                </form>
            </nav>

            <main>
                <section>
                    <div className="items">
                        {
                            storage.map(({id, name, total, checked, createAt}) => (
                                <div className="item" key={id}>
                                    <input type="checkbox" onChange={toggleCheckbox} checked={checked} />
                                    <span>{total} - {name} - {createAt}</span>
                                    <button>X</button>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section>
                    <div>
                        <select onChange={handleOrderBy}>
                            <option value="recent">Ordenar por mais recentes</option>
                            <option value="storaged">Mostrar guardados</option>
                            <option value="alphabetic">Ordem Alfabética</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={clearStorage}>Limpar lista</button>
                    </div>
                </section>
            </main>

            <footer>
                <div>
                    <span>Você tem 0 itens na lista</span>
                </div>
            </footer>
        </div>
    )
}

export { App }