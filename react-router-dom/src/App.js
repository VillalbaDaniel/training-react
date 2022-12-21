import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/navigation/NavBar";
import Aside from "./components/layout/navigation/Aside";
import Mainroutes from "./components/layout/navigation/MainRoutes";

function App() {
  return (
    <>
      <header>
        <h1>React Router DOM</h1>
        <NavBar></NavBar>
      </header>
      <main>
        <aside>
          <Routes>
            <Route path="/blog" element={<Aside />}>
            <Route path=":id" element={<Aside />}></Route>
            </Route>
          </Routes>
        </aside>
        <div className="container">
        <Mainroutes/>
        </div>
      </main>
    </>
  );
}

export default App;
