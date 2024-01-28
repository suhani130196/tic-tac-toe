import { useEffect, useState } from "react";
import Header from "./Header";
import Player from "./Player";
import { Routes, Route } from "react-router-dom";
import GameBoard from "./GameBoard";
import GameOver from "./GameOverpage";
import HomePage from "./HomePage";

function Tic_Tac_Toe_App() {
  const player1 = {
    playerName: "Player 1",
    playerSymbol: "X",
  };
  const player2 = {
    playerName: "Player 2",
    playerSymbol: "O",
  };
  // const player2 = (

  // );
  const [activePlayer, setActivePlayer] = useState(player1);

  function updateGameBoard() {
    console.log("update game board called");
    setActivePlayer((currentPlayer) =>
      currentPlayer.playerSymbol == player1.playerSymbol ? player2 : player1
    );
  }

  function gameContainer() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div id="game-container">
          <ol id="playerContainer">
            <Player
              playerName={player1.playerName}
              playerSymbol={player1.playerSymbol}
              isActive={() => {
                console.log(
                  "active player is " +
                    activePlayer.playerSymbol +
                    " player1 is " +
                    player1.playerSymbol
                );
                return activePlayer.playerSymbol === player1.playerSymbol;
              }}
            />
            <Player
              playerName={player2.playerName}
              playerSymbol={player2.playerSymbol}
              isActive={() => {
                console.log(
                  "active player is " +
                    activePlayer.playerSymbol +
                    " player2 is " +
                    player2.playerSymbol
                );
                return activePlayer.playerSymbol === player2.playerSymbol;
              }}
            />
          </ol>

          <GameBoard
            onSelectSquare={updateGameBoard}
            activePlayer={activePlayer}
            getWinningPlayerName={(playerSymbol) => {
              return playerSymbol === player1.playerSymbol
                ? player1.playerName
                : player2.playerName;
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={gameContainer()} />
        <Route path="/gameover" element={<GameOver />} />
      </Routes>
    </div>
  );
}

export default Tic_Tac_Toe_App;
