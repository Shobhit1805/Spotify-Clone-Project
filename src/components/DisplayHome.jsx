import Navbar from "./Navbar"
import { albumsData, songsData, singerData } from "../assets/Data"
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"
import SingerItem from "./SingerItem"

const DisplayHome = () => {
  return (
  <div className="h-full overflow-y-auto pl-10 pt-5">
    <div className="mb-5">
        <h1 className="mt-5 font-bold text-2xl">Trending songs</h1>
        <div className="flex overflow-auto">
      {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id}
        image={item.image}/>))}
        </div>
    </div>

  <div className="mb-5">
        <h1 className="mt-5 font-bold text-2xl mb-3">Popular artists</h1>
        <div className="flex overflow-auto">
      {singerData.map((item,index)=>(<SingerItem key={index} name={item.name} id={item.id}
        image={item.image}/>))}
        </div>
    </div>      

    <div className="mb-5 ">
        <h1 className="mt-5 font-bold text-2xl mb-3">Featured Charts</h1>
        <div className="flex overflow-auto">
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id}
        image={item.image}/>))}
        </div>
    </div>

  </div>
  )
}

export default DisplayHome