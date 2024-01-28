import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [showRules, setShowrules] = useState(false);
  const navigate = useNavigate();

  const toggleRules = () => {
    setShowrules(!showRules);
  };
  return (
    <div className="HomePageContainer">
      <h2 className="HomePageHeading">Welcome To Tic Tac Toc</h2>
      <p>Click below to read rules.</p>
      <button className="HomeButton" onClick={toggleRules}>
        How To Play
      </button>
      <button className="HomeButton" onClick={() => navigate("/game")}>
        Start
      </button>

      {showRules ? (
        <div>
          <ol className="RulesContent">
            <li>
              2 players are required for the game. The player with X starts the
              game.
            </li>
            <li>
              The first player must place their mark on any of the 9 squares on
              the grid. Then, the second player has a turn to place their mark
              on the grid. Each player must continue to take 1 turn at a time to
              place their marks until all the squares are full or until one of
              the players gets 3 of their marks in a straight line that is
              vertical, horizontal, or diagonal.{" "}
            </li>
            <li>Click on start to start playing.</li>
          </ol>
        </div>
      ) : null}
    </div>
  );
};

export default HomePage;
