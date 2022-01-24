import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/machine-learning">Machine Learning</Link>
      </li>
      <li>
        <Link to="/data-structures">Data Structures and Algorithms</Link>
      </li>
      <li>
        <Link to="/web-dev">Web Development</Link>
      </li>
    </ul>
  );
};

export default Navigation;
