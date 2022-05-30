import "../styles.css";
import flowerbox from "../slike/flowerbox.jpg";

export default function () {
  return (
    <div>
      <div className="div2">
        <img src={flowerbox} />
        <div className="div3">
          <p className="tekst4">
            Neodlučni ste koju biljku uzeti? Probajte našu mjesečnu pretplatu!
            Pretplatničke kutije za biljke su nedavno porasle u popularnosti jer
            je ludost za kućnim biljkama uzela maha. Pretplata na biljke također
            je odličan poklon za voljene osobe. Dostupne su različite vrste
            pretplatničkih kutija za biljke u raznim specijalitetima i rasponima
            cijena, što može predstavljati izazov odabrati jednu.
          </p>
        </div>
      </div>
    </div>
  );
}
