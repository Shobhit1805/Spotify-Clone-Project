import { useContext } from "react";
import { assets } from "../assets/Data";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
    volume,
    handleVolumeChange,
    handleSeekBarDrag,
  } = useContext(PlayerContext);

  return (
    <div className="h-[10%]  bg-black flex justify-between items-center text-white px-4">
      {/* Left: Song Info */}
      <div className="hidden w-1/4 lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="song_Data" />
        <div>
          <p>{track.name}</p>
          <p className="text-[#B3B3B3] text-sm">{track.desc.slice(0, 43)}</p>
        </div>
      </div>

      {/* Center: Controls & Seek Bar */}
      <div className="flex flex-col items-center gap-1 m-auto">
        {/* Control Buttons */}
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer hover:scale-110 transition" src={assets.shuffle_icon} alt="shuffle" />
          <img onClick={previous} className="w-4 cursor-pointer hover:scale-110 transition" src={assets.prev_icon} alt="previous" />
          {playStatus ? (
            <img onClick={pause} className="w-4 cursor-pointer hover:scale-110 transition" src={assets.pause_icon} alt="pause" />
          ) : (
            <img onClick={play} className="w-4 cursor-pointer hover:scale-110 transition" src={assets.play_icon} alt="play" />
          )}
          <img onClick={next} className="w-4 cursor-pointer hover:scale-110 transition" src={assets.next_icon} alt="next" />
          <img className="w-4 cursor-pointer hover:scale-110 transition" src={assets.loop_icon} alt="loop" />
        </div>

        {/* Seek Bar */}
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{String(time.currentTime.second).padStart(2, "0")}</p>
          <div
            ref={seekBg}
            onClick={seekSong}
            onMouseDown={() => {
              const moveHandler = (ev) => handleSeekBarDrag(ev);
              const upHandler = () => {
                window.removeEventListener("mousemove", moveHandler);
                window.removeEventListener("mouseup", upHandler);
              };
              window.addEventListener("mousemove", moveHandler);
              window.addEventListener("mouseup", upHandler);
            }}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer relative h-1"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full pointer-events-none"
              style={{
                left: `calc(${seekBar.current?.style?.width || "0%"} - 6px)`,
              }}
            />
          </div>
          <p>{time.totalTime.minute}:{String(time.totalTime.second).padStart(2, "0")}</p>
        </div>
      </div>

      {/* Right: Volume and Extra Buttons */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4 hover:scale-110 transition cursor-pointer" src={assets.plays_icon} alt="plays" />
        <img className="w-4 hover:scale-110 transition cursor-pointer" src={assets.mic_icon} alt="mic" />
        <img className="w-4 hover:scale-110 transition cursor-pointer" src={assets.queue_icon} alt="queue" />
        <img className="w-4 hover:scale-110 transition cursor-pointer" src={assets.speaker_icon} alt="speaker" />
        <img className="w-4 hover:scale-110 transition cursor-pointer" src={assets.volume_icon} alt="volume" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 h-1 cursor-pointer accent-green-600"
        />
        <img className="w-4 hover:scale-110 transition cursor-pointer" src={assets.mini_player_icon} alt="mini-player" />
        <img className="w-4 hover:scale-110 transition cursor-pointer" src={assets.zoom_icon} alt="zoom" />
      </div>
    </div>
  );
};

export default Player;
