const Header = () => {
  return (
    <header className="bg-red-500 h-[100px] px-6 flex flex-row justify-between">
      <div className="flex items-center gap-4">
        {/* <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
      /> */}
        LOGO
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-slate-400 rounded-lg px-2 py-1">
          Envie seu grupo
        </button>
        <button className="bg-slate-400 rounded-lg px-2 py-1">Favoritos</button>
      </div>
    </header>
  );
};

export default Header;
