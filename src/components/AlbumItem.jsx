import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="group relative min-w-[200px] p-3 px-4 cursor-pointer hover:bg-[#1F1F1F] transition-all"
    >
      <div className="relative">
        <img className="rounded w-full h-auto" src={image} alt={name} />
      </div>

      <p className="mt-2 mb-1 text-base">{name}</p>
      <p className="text-[#B3B3B3] text-sm">
        {desc.length > 40 ? `${desc.slice(0, 40)}...` : desc}
      </p>
    </div>
  );
};

export default AlbumItem;
