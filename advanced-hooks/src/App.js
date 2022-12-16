// import './App.css';
import StringModifier from "./components/StringModifier";
import StringReader from "./components/StringReader";
import StringProvider from "./store/StringProvider";

function App() {
  return (
    <StringProvider>
        <StringReader></StringReader>
        <StringModifier></StringModifier>
    </StringProvider>
  );
}

export default App;
