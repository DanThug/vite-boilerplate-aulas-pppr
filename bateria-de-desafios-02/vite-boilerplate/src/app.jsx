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
import { Header } from "./css/Header"
import { Menu } from "./css/Menu"
import { Footer } from "./css/Footer"
import "./css/burgao-do-ze.css"

const App = () => {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

export { App }