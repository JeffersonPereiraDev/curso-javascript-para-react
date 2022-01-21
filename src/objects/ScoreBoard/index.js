import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import PlayerVersus from "../../components/PlayerVersus";
import "./style.css";

function ScoreBoard(){
    return /*html*/`
        <header class = "score-board">
            ${ArrowDown()}
            ${PlayerName("Player1")}
            ${PlayerScore(1)}
            ${PlayerVersus()}
            ${PlayerScore(2)}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default ScoreBoard