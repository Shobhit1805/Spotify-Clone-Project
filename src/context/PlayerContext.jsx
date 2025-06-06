import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/Data";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [volume, setVolume] = useState(1); // New Volume state
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekSong = (e) => {
    const clickX = e.nativeEvent.offsetX;
    const width = seekBg.current.offsetWidth;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (clickX / width) * duration;
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    audioRef.current.volume = vol;
    setVolume(vol);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && audioRef.current.duration) {
        seekBar.current.style.width =
          (audioRef.current.currentTime / audioRef.current.duration) * 100 + "%";

        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60).toString().padStart(2, "0"),
            minute: Math.floor(audioRef.current.currentTime / 60).toString().padStart(2, "0"),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60).toString().padStart(2, "0"),
            minute: Math.floor(audioRef.current.duration / 60).toString().padStart(2, "0"),
          },
        });
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        seekBg,
        seekBar,
        playStatus,
        play,
        pause,
        playWithId,
        previous,
        next,
        track,
        time,
        seekSong,
        volume,
        handleVolumeChange,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
