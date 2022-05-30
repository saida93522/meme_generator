import Navbar from "./components/Navbar";
import Inputs from "./components/Inputs";
import Button from "./components/Button";

import "./App.css";

function App() {
  return (
    <div className="App container min-w-full">
      <header className="App-header shadow-2xl h-16 p-2">
        <Navbar />
      </header>
      <main className="pt-6 h-screen bg-white p-2 max-w-lg md:max-w-4xl mx-auto">
        <Inputs />
        <Button />
      </main>
    </div>
  );
}

export default App;
