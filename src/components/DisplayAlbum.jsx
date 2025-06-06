import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/Data";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id]
  const {playWithId} = useContext(PlayerContext);
  return (
    <div className="ml-5">
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Public Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
          <h4 className="text-[#B3B3B3]">{albumData.desc}</h4>
          <p className="mt-1 text-[#B3B3B3] text-sm">
            <img className="inline-block w-5 " src="vite.svg" alt="" />
            <b className="text-white"> Spotify </b>
            <b>• 1,232,123 saves </b>
            • <b>10 songs,</b>
            <span className="text-[#B3B3B3]"> about 4hr</span>   
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#B3B3B3]">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src="vite.svg" alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div onClick={() => playWithId(item.id)} key={item.id} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
          <div className="text-white text-sm md:text-[15px]">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mb-5 mr-5" src={item.image} alt={item.name} />
            <div className="inline-block">
              <div>{item.name.slice(0, 20)}</div>
              <div className="text-[#a7a7a7]">{item.desc.slice(0, 20)}</div>
            </div>
          </div>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </div>

  );
};

export default DisplayAlbum;