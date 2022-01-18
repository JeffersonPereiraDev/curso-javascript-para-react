import CardGame from "../CardGame"
import "./style.css";


function CardFrontBack(){
    window.cardFrontBack = {}
    window.cardFrontBack.HandleClick = (event) =>{
        const $origin = event.target;
        const $cardFrontBack = $origin.closest(".card-front-back");
        $cardFrontBack.classList.toggle("-active");
    }

    return /*html*/`
        <article class = "card-front-back" onclick = "cardFrontBack.HandleClick(event)">
            <div class = "card -front">
                ${CardGame()}
            </div>
            <div class = "card -back">
                ${CardGame("logo-javascript", "logo da alura")}
            </div>
        </article>

    `
}

export default CardFrontBack;