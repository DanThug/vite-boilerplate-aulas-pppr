import { useState } from "react"
import "./accordion.css"

const faqsList = [
    {
      id: crypto.randomUUID(),
      title: "Quem é a maior celebridade do mundo dos games no BR?",
      answer: "A apresentadora Ana Maria Braga. Joga 3h pra desocupar a cabeça.",
      signal: "+"
    },
    {
      id: crypto.randomUUID(),
      title: "Onde fica a europa da américa do sul?",
      answer: "Argentina. BR vive como rei em Buenos Aires.",
      signal: "+"
    },
    {
      id: crypto.randomUUID(),
      title: "Qual é a grande oportunidade para desenvolvedores BR?",
      answer: "Aproveitar a alta demanda pra ganhar em dólar ou euro.",
      signal: "+"
    },
  ]

const Faq = ({ index, title, answer, signal }) => {
  const [shouldShow, setShouldShow] = useState(false)
  const [toggleClass, setToggleClass] = useState(false)
  const handleItemToggle = () => {
    setShouldShow(shouldShow => !shouldShow)
    setToggleClass(toggleClass => toggleClass = toggleClass ? "" : "active")
  }
  return (
      <div onClick={ handleItemToggle } className={ `item ${toggleClass}` }>
          <div className="number">{ index + 1 }</div>
          <div className="title">{ title }</div>
          <div className="icon">{ signal }</div>
            { shouldShow && <div className="content-box">{ answer }</div>}
      </div>
  )
}

const Accordion = () => {
  return (
      <div className="accordion">
          {
              faqsList.map(({ id, title, answer, signal }, index) =>
                <Faq
                  key={ id }
                  index={ index }
                  title={ title }
                  signal={ signal }
                  answer={ answer }
                />)
          }
      </div>
  )
}

export { Accordion }