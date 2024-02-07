const burgers = [
    {
      name: "Duo",
      ingredients:
        "Pão selado na manteiga, hambúrguer BOVINO de 160gr, cheddar, cebola caramelizada e molho especial",
      price: 37,
      photoName: "src/img/burgers/duo.jpg",
      soldOut: false,
    },
    {
      name: "Kids",
      ingredients:
        "Burger de blend de cogumelos e mandioca, abacaxi caramelizado, muçarela, alface, tomate e molho verde",
      price: 29,
      photoName: "src/img/burgers/kids.jpg",
      soldOut: false,
    },
    {
      name: "Master",
      ingredients:
        "Pão selado na manteiga, hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
      price: 51,
      photoName: "src/img/burgers/master.jpg",
      soldOut: false,
    },
    {
      name: "Monster",
      ingredients:
        "Pão selado na manteiga, 2x hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
      price: 47,
      photoName: "src/img/burgers/monster.jpg",
      soldOut: false,
    },
    {
      name: "Prime",
      ingredients:
        "Pão selado na manteiga, hambúrguer de CARNE DE SOL de 160gr, queijo coalho, bacon, alface, tomate, cebola roxa e melaço de cana",
      price: 43,
      photoName: "src/img/burgers/prime.jpg",
      soldOut: true,
    },
    {
      name: "Slim",
      ingredients:
        "Pão selado na manteiga, hambúrguer CUPIM de 180gr, 2 fatias de muçarela, alface, tomate, picles de cebola roxa e molho especial de alho",
      price: 27,
      photoName: "src/img/burgers/slim.jpg",
      soldOut: false,
    },
  ]

const myBurgers = burgers.map(burger => (
        {id: crypto.randomUUID(), ...burger}
    ))

const Burger = ({ name, ingredients, price, photoName, soldOut }) => {
    return (
        soldOut
        ? (
            <div className="burger sold-out">
                <img src={photoName} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>{ingredients}</p>
                    <span>CABÔ</span>
                </div>
            </div>
        )
        : (
            <div className="burger">
                <img src={photoName} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>{ingredients}</p>
                    <span>R$ {price}</span>
                </div>
            </div>
        )
    )
}

const Menu = () => {
    return (
        <>
            <div className="menu">
                <h2>CARDÁPIO</h2>
                <p>Depois de uma semana desafiadora, nada melhor do que saborear um burger onde cada mordida é um abraço, não é memo?</p>
            </div>
            <div className="burgers">
                {
                    myBurgers.map(({ id, name, ingredients, price, photoName, soldOut }) =>
                        <Burger key={id} name={name} ingredients={ingredients} price={price} photoName={photoName} soldOut={soldOut} />)
                }
            </div>
        </>
    )
}

export { Menu }