import "./App.css";
import Header from "./components/views/Header";
import Main from "./components/views/Main";
import MainWrapper from "./components/Wrappers/MainWrapper";

function App() {
  return (
    <MainWrapper>
      <Header></Header>
      <Main></Main>
      <footer>
        Made with &#10084; by{" "}
        <a href="https://codespaceacademy.com/">CODE SPACE team</a>
      </footer>
    </MainWrapper>
  );
}

export default App;
