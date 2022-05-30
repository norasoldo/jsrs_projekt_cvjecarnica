import "../styles.css";
import zuto from "../slike/zuto.jpg";

export default function () {
  return (
    <div>
      <div className="parallax">
        <img src={zuto} />
        <p className="tekst2">
          Zašto trebate cvijeće u kući? <br />
          Znanstvenici s američkog sveučilišta Kansas State University su 2008.
          godine objavili rezultate istraživanja gdje su dokazali kako su
          pacijenti čije su bolničke sobe bile ukrašene raznim biljkama pokazali
          manju razinu anksioznosti, manji unos postoperativnih lijekova, veću
          razinu zadovoljstva i nade u brži oporavak.
        </p>
      </div>
    </div>
  );
}
