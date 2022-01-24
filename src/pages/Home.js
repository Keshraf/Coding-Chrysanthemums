import HomeSections from "../components/HomeSections";
import Heading from "../components/Heading";

const Home = () => {
  const sectionInfo = [
    {
      id: "s1",
      heading: "Machine Learning",
      description:
        "Machine learning (ML) is the study of computer algorithms that can improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence.",
      link: "/machine-learning",
    },
    {
      id: "s2",
      heading: "Data Structures and Algorithms",
      description:
        "A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem.",
      link: "/data-structures",
    },
    {
      id: "s3",
      heading: "Website Development",
      description:
        "Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
      link: "/web-dev",
    },
  ];

  return (
    <div>
      <Heading>Superpositions Chennai</Heading>
      {sectionInfo.map((section) => {
        return (
          <HomeSections
            heading={section.heading}
            description={section.description}
            link={section.link}
            key={section.id}
          />
        );
      })}
    </div>
  );
};

export default Home;
