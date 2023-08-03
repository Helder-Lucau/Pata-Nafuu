import "../style/App.css";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <section>
        <Home />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
