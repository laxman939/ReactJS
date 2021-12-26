import "./App.css";
import BrowserRouter from "./Routers/BrowserRouter";
import HashRouter from "./Routers/HashRouter";
import MemoryRouter from "./Routers/MemoryRouter";

function App() {
  return (
    <>
      <h1>MemoryRouter</h1>
      <div>
        <MemoryRouter />
      </div>
      <h1>BrowserRouter</h1>
      <div>
        <BrowserRouter />
      </div>
      <h1>HashRouter</h1>
      <div>
        <HashRouter />
      </div>
    </>
  );
}

export default App;
