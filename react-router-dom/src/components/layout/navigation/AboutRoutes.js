// import './AboutRoutes.css';
import { Routes, Route } from "react-router-dom";
import About from "../../../views/About";
import AboutWrappers from "../../wrappers/AboutWrappers";
import NotFound from "../../../views/NotFound";
import NewAbout from "../../../views/NewAbout";

function AboutRoutes() {
  return (
    <Routes>
      <Route element={<AboutWrappers />}>
        <Route index element={<About />} />
        <Route path="id" element={<About />} />
        <Route path="new" element={<NewAbout />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AboutRoutes;
