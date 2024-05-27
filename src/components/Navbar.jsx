const Navbar = () => {
  return (
    <nav className="bg-secondary sticky top-0 w-full p-10 z-10 border-b border-text-shadow ">
      <div className="max-w-[70vw] flex justify-between mx-auto">
        <h1 className="mb-0">Amin Salamatin</h1>
        <ul className="flex my-auto">
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
              href="/Amin_Salamatin_CV_EN.pdf"
              target="_blank"
              className="px-4 ml-5 text-accent border-4 border-accent text-3xl rounded-md hover:border-accent-light hover:text-accent-light hover:bg-dominant-light cursor-pointer"
            >
              CV
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
