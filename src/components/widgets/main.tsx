import ImageCard from "../card";
import bg from "./../../assets/img/bg.jpg";

const MainContent = () => {
  return (
    <main className="mt-[46px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ImageCard img={bg} id={1} />
      <ImageCard img={bg} id={1} />
      <ImageCard img={bg} id={1} />
    </main>
  );
};

export default MainContent;
