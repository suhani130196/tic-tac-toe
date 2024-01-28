import { useState } from "react";

const Player = ({ playerName, playerSymbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingPlayerName, setEditingPlayerName] = useState("");
  const [playername, setPlayerName] = useState(playerName);

  function handleEditbutton() {
    setIsEditing(true);
    setEditingPlayerName(playername);
  }

  function handleSavebutton() {
    console.log("Harshit: Editing player name: " + editingPlayerName);
    setIsEditing(false);
    setPlayerName(editingPlayerName);
  }

  return (
    <div className="playerdetails">
      {isEditing == false ? (
        <div
          style={
            isActive()
              ? { color: "Yellow", fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
        >
          <span className="playername">{playername}</span>
          <span className="playerSymbol">{playerSymbol}</span>

          <button className="edit_save_button" onClick={handleEditbutton}>
            Edit
          </button>
        </div>
      ) : (
        <div className="Pdetail">
          <input
            className="player_name_input"
            defaultValue={playername}
            type="text"
            onChange={(e) => setEditingPlayerName(e.target.value)}
          ></input>
          <button className="edit_save_button" onClick={handleSavebutton}>
            Save
          </button>
        </div>
      )}
      &nbsp;
      {/* <span className="playerSymbol">{playerSymbol}</span> */}
    </div>
  );
};
export default Player;
