// import './About.css';
import { useParams } from "react-router-dom";

function About() {
  const {id} = useParams();
  console.log(id);
  return (
    <>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quo.</p>
      {id && <p>Id: {id} </p>}
    </>
  );
}

export default About;
