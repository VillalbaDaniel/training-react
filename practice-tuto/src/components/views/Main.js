import "./Main.css";
import Card from "./Card/Card";
import movies from "../../db/movies.json";

const Main = () => {
  return (
    <main className="main-content">
      <div className="cardContainer">
        {movies.map((movie) => {
          return <Card key={movie.id} info={movie}></Card>;
        })}
      </div>
    </main>
  );
};

export default Main;
