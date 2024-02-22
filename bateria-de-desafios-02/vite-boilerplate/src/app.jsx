//DATECOUNTER
// import { DateCounter } from "./css/date-counter"
// const App = () => <DateCounter />


//STEPS
// import { Steps } from "./css/steps"
// const App = () => <Steps />

//FLASHCARDS
// import { Flashcards } from "./css/flashcards" 
// const App = () => <Flashcards />

//ACCORDION
// import { Accordion } from "./css/accordion"
// const App = () => <Accordion />

//BURGAO-DO-ZE
// import { Header } from "./css/Header"
// import { Menu } from "./css/Menu"
// import { Footer } from "./css/Footer"
// import "./css/burgao-do-ze.css"

// const App = () => {
//     return (
//         <div className="container">
//             <Header />
//             <Menu />
//             <Footer />
//         </div>
//     )
// }

import './app.css'
const App = () => {
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(e.target.elements)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Idade:
          <select name='age'>
            <option value="17">17 anos</option>
            <option value="18">18 anos</option>
            <option value="19">19 anos</option>
          </select>
        </label>
  
        <label>
          Nome da Mãe:
          <input name='motherName' placeholder="Escreve aqui" />
        </label>
  
        <button>Enviar</button>
      </form>
    )
  }
  
  export { App }