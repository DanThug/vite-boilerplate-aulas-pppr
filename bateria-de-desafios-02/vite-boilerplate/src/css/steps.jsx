import { useState } from "react"
import "./steps.css"

const steps = [
    { 
      id: crypto.randomUUID(), 
      description: "Entender o problema do cliente" 
    },
    {
      id: crypto.randomUUID(),
      description: "Desenvolver a solução do problema",
    },
    {
      id: crypto.randomUUID(),
      description: "Repetir até o cliente ficar feliz e encher seu 🍑 de dinheiro",
    }
  ]

const ToggleButton = ({ onClickToggle, showContainer }) => (
    <div className="container-close">
        <button onClick={ onClickToggle } className="close">{ showContainer ? "Fechar" : "Abrir" }</button>
    </div>
)

const Step = ({ range, activeStep }) =>
    range.map(item => <div key={ item } className={ item === activeStep ? "active" : ""}>{ item }</div>)

const Steps = () => {
    const [showContainer, setShowContainer] = useState(true)

    const { start, end, range } = {
        start: steps.findIndex(step => step) + 1,
        end: steps.length,
        get range() { return [...Array(end + 1).keys()].slice(1) }
    }

    const [activeStep, setActiveStep] = useState(start)
    
    const handlePreviousButton = () =>
        setActiveStep(activeStep => activeStep - 1 < start ? activeStep : activeStep - 1)

    const handleNextButton = () =>
        setActiveStep(activeStep => activeStep + 1 > end ? activeStep : activeStep + 1)

    const handleCloseButton = () => {
        setShowContainer(() => !showContainer)
    }

    return (
        <>
            <ToggleButton onClickToggle={ handleCloseButton } showContainer={ showContainer } />
            {
                showContainer && (
                    <div className="steps fade-in">
                        <div className="numbers">
                            <Step range={ range } activeStep={ activeStep } />
                        </div>
                        <div className="message">
                            Passo {activeStep}: {steps[activeStep - 1].description}
                        </div>
                        <div className="buttons">
                            <button onClick={ handlePreviousButton }>Anterior</button>
                            <button onClick={ handleNextButton }>Próximo</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export { Steps }