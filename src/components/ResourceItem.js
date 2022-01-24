import styles from "./ResourceItem.module.css";
import Container from "./Container";
import Url from "../assets/link.png";
import Video from "../assets/youtube.png";
import Doc from "../assets/book.png";
import Git from "../assets/github-1.png";
import Org from "../assets/briefcase.png";

const ResourceItem = (props) => {
  const type = props.type;
  let icon = Url;
  if (type === "link") {
    icon = Url;
  } else if (type === "video") {
    icon = Video;
  } else if (type === "doc") {
    icon = Doc;
  } else if (type === "org") {
    icon = Org;
  } else if (type === "git") {
    icon = Git;
  }

  let finalIcon = <img src={icon} alt="type" className={styles.icon} />;

  return (
    <Container className={styles.container}>
      <a href={props.link} className={styles.layout}>
        {finalIcon}
        <div className={styles.text}>
          <h2 className={styles.topic}>{props.name}</h2>
          <h3 className={styles.author}>{props.author}</h3>
        </div>
      </a>
    </Container>
  );
};

export default ResourceItem;
