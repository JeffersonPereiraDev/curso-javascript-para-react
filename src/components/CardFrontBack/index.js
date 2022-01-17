import CardGame from "../CardGame"

function CardFrontBack(){
    return /*html*/`
        <article class = "card-front-back">
            ${CardGame()}
            ${CardGame("logo-javascript", "logo da alura")}
        </article>

    `
}

export default CardFrontBack;