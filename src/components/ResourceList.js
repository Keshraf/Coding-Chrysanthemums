import ResourceItem from "./ResourceItem";
import styles from "./ResourceList.module.css";

const ResourceList = (props) => {
  return (
    <div className={styles.layout}>
      {props.info.map((data) => {
        return (
          <ResourceItem
            name={data.name}
            author={data.author}
            type={data.type}
            key={data.id}
            link={data.link}
          />
        );
      })}
    </div>
  );
};

export default ResourceList;
