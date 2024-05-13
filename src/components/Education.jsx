import h from "../utils/headers";

const Education = () => {
    const label = "border 2 px-2 mx-2";
  
    return (
      <div className="text-left">
        <h1 className={h[1]}>Education</h1>
        <ul className="flex">
          <li className={label}><h3 className={h[3]}>Name</h3><p>Description</p></li>
          <li className={label}><h3 className={h[3]}>Name</h3><p>Description</p></li>
        </ul>
      </div>
    );
  };
  
  export default Education;