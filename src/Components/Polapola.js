import "../styles.css";
import cvijet2 from "../slike/cvijet2.jpg";

export default function () {
  return (
    <div>
      <div className="div1">
        <img src={cvijet2} />
        <div className="div2">
          <p className="tekst3">
            Ako postoji provjeren, pouzdan i jeftin način da oplemenimo naš dom
            nečim što će nam donijeti koristi više nego što smo svjesni, onda je
            to unošenjem biljaka u dom. Zanimljivo je da NASA koristi biljke na
            Međunarodnoj svemirskoj stanici kako bi poboljšala kvalitet zraka.
            Njihovi stručnjaci savjetuju da se na svakih 100 kvadrata doma
            koristi bar jedna biljka.
          </p>
        </div>
      </div>
    </div>
  );
}
