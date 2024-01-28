import { useLocation } from "react-router-dom";

const GameOver = () => {
  const location = useLocation();
  return (
    <div>
      <h1 className="gameoverheading">Game Over</h1>
      <h2 className="resultdisplay">Winner is {location.state} </h2>
    </div>
  );
};

export default GameOver;
