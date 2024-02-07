const Footer = () => {
    const handleButton = () => console.log("Direcionando para fazer pedido...")
    const currentTime = new Date().toLocaleTimeString("pt-BR")
    const closeTime = "21:59:00"

    return (
        <div className="footer">
            {
                currentTime < closeTime
                ? (
                    <>
                        <span>
                            "Tamo aberto até as 22h. Vem visitar a agente ou faça seu pedido online."
                        </span>
                        <div className="order">
                            <button className="btn" onClick={handleButton }>Fazer pedido</button>
                        </div>
                    </>
                )
                : "Vamo abrir amanhã as 12h"
            }
        </div>
    )
}

export { Footer }