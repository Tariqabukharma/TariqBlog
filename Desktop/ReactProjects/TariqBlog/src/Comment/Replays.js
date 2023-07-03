import { useState } from "react";
import { Replay } from "./Replay";
export function Replays() {
  const [replay, setReplay] = useState("");
  const [replays, setReplays] = useState([]);

  function handleAddReplay(e) {
    e.preventDefault();
    if (!replay) return;
    setReplays([
      ...replays,
      {
        id: crypto.randomUUID(),
        replay: replay,
        date: new Date().toISOString(),
      },
    ]);
    setReplay("");
  }

  return (
    <>
      {replays.map((replay) => {
        return (
          <div className="ui comments" key={replay.id}>
            <div className="comment">
              <div className="content ">
                <Replay
                  replay={replay}
                  replays={replays}
                  setReplays={setReplays}
                />
              </div>
            </div>
          </div>
        );
      })}

      <form className="ui-input" onSubmit={handleAddReplay}>
        <input
          className="form-replay"
          value={replay}
          onChange={(e) => setReplay(e.target.value)}
          type="text"
          placeholder="Replay..."
        />
        <button onClick={handleAddReplay}>Reply</button>
      </form>
      <hr />
    </>
  );
}
