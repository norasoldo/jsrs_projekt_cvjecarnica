import "../styles.css";
import nastolu from "../slike/nastolu.jpg";
import tulipan from "../slike/tulipan.jpg";
import orhideja from "../slike/orhideja.jpg";
import buket from "../slike/buket.jpg";

export default function () {
  return (
    <div>
      <div className="center">
        <div className="gallery">
          <img src={buket} />

          <div className="desc">buketi za svećane prilike</div>
        </div>
        <div className="gallery">
          <img src={nastolu} />

          <div className="desc">aranžmani i prodaja na veliko</div>
        </div>
        <div className="gallery">
          <img src={tulipan} />

          <div className="desc">sviježe ubrano sa hrvatskih farma</div>
        </div>
        <div className="gallery">
          <img src={orhideja} />

          <div className="desc">raznovrsno cvijeće u pitaru</div>
        </div>
      </div>
    </div>
  );
}
