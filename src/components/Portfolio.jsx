const Portfolio = () => {
  return (
    <div className="text-left mb-20">
      <h1>Portfolio</h1>
      <ul className="flex flex-wrap text-2xl">
        <a href="">
          <li className="label hover:bg-dominant-light cursor-pointer">
            <h3>Name</h3>
            <p>Description</p>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Portfolio;
