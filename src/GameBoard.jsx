import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import GameOver from "./GameOverpage";

const initial_gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, activePlayer, getWinningPlayerName }) {
  const [gameboard, setgameboard] = useState(initial_gameBoard);
  const navigate = useNavigate();

  function updateGameBoard(rowIndex, colIndex) {
    console.log("active player player symbol " + activePlayer.playerName);
    // console.log(rowIndex + " " + colIndex + " " + activePlayerSymbol);
    if (gameboard[rowIndex][colIndex] === null) {
      setgameboard((prevGameBoard) => {
        const updatedBoard = [
          ...prevGameBoard.map((innerArray) => [...innerArray]),
        ];
        updatedBoard[rowIndex][colIndex] = activePlayer.playerSymbol;

        return updatedBoard;
      });

      onSelectSquare();
    }
  }

  function redirectToGameOverPage(playerSymbol) {
    const winningPlayerName = getWinningPlayerName(playerSymbol);
    console.log("winning player " + winningPlayerName);
    navigate("/gameover", { state: winningPlayerName });
  }

  useEffect(() => {
    console.log("active player is here " + activePlayer.playerSymbol);
    // check if any of the rows contain just X or O
    for (let column = 0; column < 3; column++) {
      if (
        gameboard[0][column] !== null &&
        gameboard[0][column] === gameboard[1][column] &&
        gameboard[1][column] === gameboard[2][column]
      ) {
        redirectToGameOverPage(gameboard[0][column]);
        // console.log("player" + gameboard[0][column] + "won");
      }
    }

    // check if any of the columns contain just X or O
    for (let rows = 0; rows < 3; rows++) {
      if (
        gameboard[rows][0] !== null &&
        gameboard[rows][0] === gameboard[rows][1] &&
        gameboard[rows][1] === gameboard[rows][2]
      ) {
        console.log("Player" + gameboard[rows][0] + "won");
        redirectToGameOverPage(gameboard[rows][0]);
      }
    }

    // check if any of the diagonals contain just X or O
    if (
      gameboard[0][0] !== null &&
      gameboard[0][0] === gameboard[1][1] &&
      gameboard[1][1] === gameboard[2][2]
    ) {
      console.log("someone won by diagonal");
      redirectToGameOverPage(gameboard[0][0]);
    }
    if (
      gameboard[0][2] !== null &&
      gameboard[0][2] === gameboard[1][1] &&
      gameboard[1][1] === gameboard[2][0]
    ) {
      console.log("Player" + activePlayer.playerSymbol + "won");
      redirectToGameOverPage(gameboard[0][2]);
    }
  }, [gameboard]);

  return (
    <ol className="grid-container">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex} className="row">
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className="list">
                {/* <p>
                  {rowIndex} {colIndex}
                </p> */}
                {/* <p>{colIndex}</p>
                <p>{gameboard[rowIndex][colIndex]}</p> */}
                <button
                  onClick={() => updateGameBoard(rowIndex, colIndex)}
                  className="boardButton"
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
