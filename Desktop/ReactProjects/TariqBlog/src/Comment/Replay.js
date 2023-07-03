import { useState } from "react";
import "./style.css";

export function Replay({ replay, replays, setReplays }) {
  const [isEditing, setIsEditing] = useState(false);

  function onChangeReplay(preReplay) {
    setReplays(
      replays.map((r) => {
        if (r.id === preReplay.id) {
          return preReplay;
        } else return r;
      })
    );
  }
  function handleDeleteReplay(id) {
    setReplays(replays.filter((el) => el.id !== id));
  }

  let replayContent;

  isEditing
    ? (replayContent = (
        <div class="ui mini input">
          <input
            className="replay-edite"
            value={replay.replay}
            onChange={(e) => {
              onChangeReplay({
                ...replay,
                replay: e.target.value,
              });
            }}
          />
        </div>
      ))
    : (replayContent = <span className="form-replay">{replay.replay}</span>);

  return (
    <div className="replay" key={replay.id}>
      <div>
        <span className="avatar">
          <img
            src="https://semantic-ui.com/images/avatar/small/matt.jpg"
            alt="img"
          />
        </span>
        <div className="content">
          <span className="author">Ahmad</span>
          <div className="metadata">
            <span className="date">{replay.date}</span>
          </div>
          <div className="text">{replayContent}</div>
        </div>
      </div>

      <div className="button-com">
        <button onClick={() => setIsEditing(!isEditing)}> Edit</button>
        <button onClick={() => handleDeleteReplay(replay.id)}>Delete</button>
      </div>
    </div>
  );
}
