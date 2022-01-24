import Container from "./Container";
import styles from "./HomeSections.module.css";
import Button from "./Button";

const HomeSections = (props) => {
  return (
    <Container className={`${styles.containers}`}>
      <h2 className={styles.topic}>{props.heading}</h2>
      <div className={styles.content}>
        <p className={styles.desc}>{props.description}</p>
        <Button link={props.link} className={styles.button}>
          Learn More
        </Button>
      </div>
    </Container>
  );
};

export default HomeSections;
