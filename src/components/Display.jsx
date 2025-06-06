import { Route, Routes, useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"
import { useEffect, useRef } from "react"
import { albumsData } from "../assets/Data"

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;


  useEffect(()=>{
    if(isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    }
    else{
      displayRef.current.style.background = "linear-gradient(180deg, rgba(31,31,31,1) 17%, rgba(18,18,18,1) 30%)";
    }
  })
  return (
    <div ref={displayRef} className="h-full overflow-y-auto rounded-xl" style={{background: "linear-gradient(180deg, rgba(31,31,31,1) 17%, rgba(18,18,18,1) 30%)"}}>
        <Routes>
            <Route path="/" element={<DisplayHome/>}/>
            <Route path="/album/:id" element={<DisplayAlbum/>}/>
        </Routes>
    </div>
  )
}

export default Display