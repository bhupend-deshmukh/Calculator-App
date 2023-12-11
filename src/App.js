import Headers from "./components/Header";
import Keyboard from "./components/Keyboard";
import TypingEffect from "./components/effect/TypingEffect";
import logo from "./logo.svg";
// import './App.css';

function App() {
  return (
    <div className="App h-screen bg-slate-200 ">
      <Headers />
      <Keyboard />
    </div>
  );
}

export default App;
