import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Header from "./Components/Header";
import Naslovna from "./Components/Naslovna";
import Footer from "./Components/Footer";
import Class from "./Components/Class";

export default function App() {
  return (
    <div className="App">
      <Class></Class>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Naslovna />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}
