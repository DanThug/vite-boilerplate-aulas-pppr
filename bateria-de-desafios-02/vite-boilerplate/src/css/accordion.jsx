import "./accordion.css"

const faqs = [
    {
      id: crypto.randomUUID(),
      title: "Quem é a maior celebridade do mundo dos games no BR?",
      answer: "A apresentadora Ana Maria Braga. Joga 3h pra desocupar a cabeça.",
    },
    {
      id: crypto.randomUUID(),
      title: "Onde fica a europa da américa do sul?",
      answer: "Argentina. BR vive como rei em Buenos Aires.",
    },
    {
      id: crypto.randomUUID(),
      title: "Qual é a grande oportunidade para desenvolvedores BR?",
      answer: "Aproveitar a alta demanda pra ganhar em dólar ou euro.",
    },
  ]

const Faq = ({ index, title, answer }) => {
    return (
        <div className="item">
            <div className="number">{ index + 1 }</div>
            <div className="title">{ title }</div>
            <div className="icone">-</div>
            <div className="content-box">{ answer }</div>
        </div>
    )
}

const Accordion = () => {
    return (
        <div className="accordion">
            {
                faqs.map(({ id, title, answer }, index) => <Faq key={ id } index={ index } title={ title } answer={ answer } />)
            }
        </div>
    )
}

export { Accordion }