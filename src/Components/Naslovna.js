import "../styles.css";
import cvijet from "../slike/sunflower.png";
import Cvijece from "./Cvijece";
import Slika from "./Slika";
import PolaPola from "./Polapola";
import Obrnuto from "./Obrnuto";
import Stupci from "./Stupci";

export default function () {
  return (
    <div>
      <div className="bg">
        <img src={cvijet} className="slika1" alt="cvijet" />
        <p className="font tekst1"> cvijet sa raskršća</p>
      </div>
      <Cvijece></Cvijece>
      <Slika></Slika>
      <Stupci></Stupci>
      <PolaPola></PolaPola>
      <Obrnuto></Obrnuto>
    </div>
  );
}
