import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { assets } from "../assets/Data"; // Ensure this has play_black_icon and pause_black_icon

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId, track, playStatus, pause } = useContext(PlayerContext);

  const isCurrentSongPlaying = track.id === id && playStatus;

  const handlePlayPause = (e) => {
    e.stopPropagation();
    if (isCurrentSongPlaying) {
      pause();
    } else {
      playWithId(id);
    }
  };

  return (
    <div
      onClick={() => playWithId(id)}
      className="group relative min-w-[200px] p-3 px-4 cursor-pointer hover:bg-[#1F1F1F] transition-all"
    >
      <div className="relative">
        <img className="rounded w-full h-auto" src={image} alt={name} />

        {/* Play/Pause Button */}
        <div
          onClick={handlePlayPause}
          className={`absolute bottom-2 right-2 bg-[#1ED760] rounded-full w-11 h-11 flex items-center justify-center transition-all duration-300
            ${isCurrentSongPlaying ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 group-hover:scale-100'}
            hover:scale-110 hover:bg-[#23fa74]`}
        >
          <img
            src={isCurrentSongPlaying ? assets.pause_black_icon : assets.play_black_icon}
            alt="play"
            className="w-5 h-5 "
          />
        </div>
      </div>

      <p className=" mt-2 mb-1 text-base">{name}</p>
      <p className="text-[#B3B3B3] text-sm">
       {desc.length > 30 ? `${desc.slice(0, 30)}...` : desc}
      </p>

    </div>
  );
};

export default SongItem;
