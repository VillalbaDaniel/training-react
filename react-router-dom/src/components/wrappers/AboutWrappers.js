// import './AboutWrappers.css';
import { Outlet } from "react-router-dom";
import SubMenu from "../layout/navigation/SubMenu";

function AboutWrappers() {
  return (
    <section>
      <SubMenu></SubMenu>
      <Outlet></Outlet>
    </section>
  );
}

export default AboutWrappers;
