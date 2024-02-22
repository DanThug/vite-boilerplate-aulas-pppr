import { useState } from 'react'
import './app.css'

const items = [
    {
        id: 1,
        name: "Anilha",
        total: 8,
        checked: false
    },
    {
        id: 2,
        name: "Presilha",
        total: 4,
        checked: false
    },
    {
        id: 3,
        name: "Barra",
        total: 7,
        checked: false
    }
]
const App = () => {
    const [storage, setStorage] = useState(items)
    const handleSubmit = e => {
        e.preventDefault()
        
        const { total, item } = e.target.elements
        console.log(e.target.elements)
        // setStorage(s => [...s, {
        //     id: 4,
        //     name: item.value,
        //     total: total.value,
        //     checked: false
        // }])
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
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div>
                        <input name="item" placeholder='Manda aqui' />
                    </div>
                    <div>
                        <button>Adicionar</button>
                    </div>
                </form>
            </nav>

            <main>
                <section>
                    <div>
                        <ul>
                            {storage.map(({id, name}) => <li key={id}>{name}<button>X</button></li>)}
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <select name="" id="">
                            <option value="Ordernar">Ordenar por mais recentes</option>
                        </select>
                    </div>
                    <div>
                        <button>Limpar lista</button>
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