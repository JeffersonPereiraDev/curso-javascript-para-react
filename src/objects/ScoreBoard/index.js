import PlayerName from "../../components/PlayerName";
import PlayerVersus from "../../components/PlayerVersus";
import "./style.css";

function ScoreBoard(){
    return /*html*/`
        <header class = "score-board">
            ${PlayerName("Player1")}
            ${PlayerVersus()}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default ScoreBoard