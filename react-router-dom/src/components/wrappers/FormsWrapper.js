// import './FormsWrapper.css';
import { Outlet } from 'react-router-dom';

function FormsWrapper() {
  return (
    <section style={{
        backgroundColor:"#eaf1ec",
        padding:"1rem",
        color:"#282828"
    }}>
        <Outlet context={"Hello World!!"}></Outlet>
    </section>
  );
}

export default FormsWrapper;
