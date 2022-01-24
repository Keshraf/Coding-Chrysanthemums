import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Home from "../assets/home.png";
import ML from "../assets/aperture.png";
import GitHub from "../assets/github.png";
import DSA from "../assets/layers.png";
import Web from "../assets/compass.png";
import Container from "./Container";

const Navigation = (props) => {
  return (
    <Container className={`${props.className} ${styles.container}`}>
      <ul className={styles.list}>
        <li className={styles.outerIconHome} id="Home">
          <Link to="/">
            <img src={Home} alt="Home"></img>
          </Link>
        </li>
        <li className={styles.outerIconML} id="ml">
          <Link to="/machine-learning">
            <img src={ML} alt="Machine Learning" />
          </Link>
        </li>
        <li className={styles.outerIconDSA} id="dsa">
          <Link to="/data-structures">
            <img src={DSA} alt="Data Structures and Algorithms" />
          </Link>
        </li>
        <li className={styles.outerIconWeb} id="web">
          <Link to="/web-dev">
            <img src={Web} alt="Web Development" />
          </Link>
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.outerIconGit} id="git">
          <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums">
            <img src={GitHub} alt="GitHub" />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Navigation;
