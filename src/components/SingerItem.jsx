const SingerItem = ({ name, image }) => {
  const handleClick = () => {
    alert("Please log in to access this feature.");
  };

  return (
    <div
      onClick={handleClick}
      className="group relative min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#1F1F1F] transition-all"
    >
      <div className="relative">
        <img
          className="rounded-full w-full aspect-square object-cover"
          src={image}
          alt={name}
        />
      </div>

      <p className=" mt-2 mb-1 text-base">{name}</p>
      <p className="text-[#B3B3B3] text-sm">Artist</p>
    </div>
  );
};

export default SingerItem;
