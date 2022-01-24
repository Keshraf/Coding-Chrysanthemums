import Heading from "../components/Heading";
import ResourceList from "../components/ResourceList";
import WebData from "../data/WebData";
const WebDev = () => {
  return (
    <>
      <Heading>Web Resources</Heading>
      <ResourceList info={WebData()} />
    </>
  );
};

export default WebDev;
