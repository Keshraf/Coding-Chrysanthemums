import Heading from "../components/Heading";
import ResourceList from "../components/ResourceList";
import MLData from "../data/MLData";

const ML = () => {
  return (
    <>
      <Heading>ML Resources</Heading>
      <ResourceList info={MLData()} />
    </>
  );
};

export default ML;
