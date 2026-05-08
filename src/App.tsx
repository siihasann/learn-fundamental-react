import "./App.css";
import Home from "./pages";

function App() {
  const value = false;
  return (
    <>
      <section>
        <Home />
        {value ? "This is true" : "This is false"}
      </section>
    </>
  );
}

export default App;
