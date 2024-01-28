import { useLocation } from "react-router-dom";

const GameOver = () => {
  const location = useLocation();
  return (
    <div>
      <h1 className="gameoverheading">Congratulations</h1>
      <div>
        <h2 className="resultdisplay">Winner is {location.state} </h2>
      </div>
    </div>
  );
};

export default GameOver;
