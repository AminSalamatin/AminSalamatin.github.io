const Portfolio = () => {
  return (
    <div className="text-left mb-20">
      <h1>Portfolio</h1>
      <ul className="flex flex-wrap text-2xl">
        <a
          href="https://github.com/AminSalamatin/CS2-backend.git"
          target="_blank"
        >
          <li className="label hover:bg-dominant-light cursor-pointer">
            <h3>CS2-Tracker</h3>
            <p>
            Backend repository of the CS2 project, featuring a forum, user authentication, and HLTV API integration for accessing Counter-Strike 2 game data. This backend was developed solely by me.
            </p>
            <ul className="flex text-2xl font-bold text-accent border-accent flex-wrap mt-10">
              <li className="skill">TypeScript</li>
              <li className="skill">Node.js</li>
              <li className="skill">Express</li>
              <li className="skill">MongoDB</li>
              <li className="skill">REST API</li>
              <li className="skill">GraphQL</li>
              <li className="skill">Apollo Server</li>
            </ul>
          </li>
        </a>
        <a
          href="https://github.com/AminSalamatin/ClosedAI-Fitness-Tracker.git"
          target="_blank"
        >
          <li className="label hover:bg-dominant-light cursor-pointer">
            <h3>Fitness-Tracker</h3>
            <p>
            Front-end repository of a React web app developed as a school project, featuring fitness tracking and a chatbot powered by the ChatGPT 3.5 API. I worked as part of the front-end team, primarily focusing on React component logic and integrating APIs from the backend.
            </p>
            <ul className="flex text-2xl font-bold text-accent border-accent flex-wrap mt-10">
              <li className="skill">React</li>
              <li className="skill">Vite</li>
              <li className="skill">REST API</li>
              <li className="skill">Tailwind CSS</li>
              <li className="skill">Google Firebase</li>
            </ul>
          </li>
        </a>
        <a
          href="https://github.com/AminSalamatin/WeatherNow.git"
          target="_blank"
        >
          <li className="label hover:bg-dominant-light cursor-pointer">
            <h3>WeatherNow</h3>
            <p>
            Simple Web App I developed in one day for a school project. Its main purpose is to implement an API from OpenWeather using XMLHttpRequest.
            </p>
            <ul className="flex text-2xl font-bold text-accent border-accent flex-wrap mt-10">
              <li className="skill">HTML</li>
              <li className="skill">CSS</li>
              <li className="skill">JavaScript</li>
              <li className="skill">XMLHttpRequest</li>
            </ul>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Portfolio;
