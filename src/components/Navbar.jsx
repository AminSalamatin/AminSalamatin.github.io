const Navbar = () => {
  return (
    <nav className="bg-secondary sticky top-0 w-full p-10 z-10 border-b border-text-shadow ">
      <div className="max-w-[50vw] flex justify-between mx-auto">
        <h3 className="mb-0">Amin Salamatin</h3>
        <ul className="flex">
          <list>
            <a
              href=""
              className="px-4 ml-5 text-accent border-4 border-accent text-3xl rounded-md hover:border-accent-light hover:text-accent-light hover:bg-dominant-light cursor-pointer"
            >
              LinkedIn
            </a>
          </list>
          <list>
            <a
              href=""
              className="px-4 ml-5 text-accent border-4 border-accent text-3xl rounded-md hover:border-accent-light hover:text-accent-light hover:bg-dominant-light cursor-pointer"
            >
              Resume
            </a>
          </list>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
