import h from "../utils/headers";

const TechnicalExperience = () => {
  const label = "border-2 px-2 mx-2 font-bold";

  return (
    <>
      <h1 className={h[1]+"text-left"}>Technical Experience</h1>
      <ul className="flex">
        <li className={label}>Java</li>
        <li className={label}>JavaScript</li>
      </ul>
    </>
  );
};

export default TechnicalExperience;
