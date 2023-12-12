import Headers from "./components/Header";
import Keyboard from "./components/Keyboard";
// import './App.css';

function App() {
  return (
    <div className="h-screen lg:w-3/12 shadow-xl relative mx-auto lg:rounded-3xl bg-slate-200">
      <Headers />
      <Keyboard />
    </div>
  );
}

export default App;
