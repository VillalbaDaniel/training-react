import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  let today = new Date(Date.now()).toLocaleDateString();

  return (
    <div className="main">
      <Welcome userName="Laura" today={today}></Welcome>
      <Welcome userName="Jane" today={today}></Welcome>
      <Welcome userName="Work" today={today}></Welcome>
    </div>
  );
}

export default App;