const Navbar = () => {
  return (
    <nav className="bg-secondary sticky top-0 w-full p-10 z-10 border-b border-text-shadow ">
      <div className="flex justify-between mx-0">
        <h1 className="mb-0">Amin Salamatin</h1>
        <ul className=""flex flex-col space-y-10 my-auto sm:flex-row sm:space-y-0"">
          <li>
            <a
              href="https://www.linkedin.com/in/amin-salamatin-3b0756259/"
              target="_blank"
              className="px-4 ml-5 text-accent border-4 border-accent text-3xl rounded-md hover:border-accent-light hover:text-accent-light hover:bg-dominant-light cursor-pointer"
            >
              LinkedIn
            </a>
          </li>
            <li>
            <a
              href="https://github.com/AminSalamatin"
              target="_blank"
              className="px-4 ml-5 text-accent border-4 border-accent text-3xl rounded-md hover:border-accent-light hover:text-accent-light hover:bg-dominant-light cursor-pointer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
