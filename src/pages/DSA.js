import Heading from "../components/Heading";
import DSAData from "../data/DSAData";
import ResourceList from "../components/ResourceList";

const DSA = () => {
  return (
    <>
      <Heading>DSA Resources</Heading>
      <ResourceList info={DSAData()} />
    </>
  );
};

export default DSA;
