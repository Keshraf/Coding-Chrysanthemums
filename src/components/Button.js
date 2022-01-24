import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <Link to={props.link} className={`${props.className} ${styles.button}`}>
      {props.children}
    </Link>
  );
};

export default Button;
