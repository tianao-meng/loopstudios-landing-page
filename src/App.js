import Creations from "./components/Creations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Interactive from "./components/Interactive";
import CreationsMobile from "./components/CreationsMobile";

function App() {
  return (
    <div className="App">
      <Header />
      <Interactive />
      <Creations />
      <CreationsMobile />
      <Footer />
    </div>
  );
}

export default App;
