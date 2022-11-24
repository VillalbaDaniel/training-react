import "./App.css";
import Welcome from "./components/Welcome";
import Main from "./components/Main";

function App() {
  let today = new Date(Date.now()).toLocaleDateString();

  return (
    <Main>
      <Welcome userName="Laura" today={today}></Welcome>
      <Welcome userName="Jane" today={today}></Welcome>
      <Welcome userName="Work" today={today}></Welcome>
    </Main>
  );
}

export default App;