import "../styles.css";

export default function () {
  return (
    <div>
      <footer className="footer">
        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title font">Dobavljači</h2>

            <ul class="nav__ul">
              <li>
                <a href="http://www.vrtko.hr/index.php">Vrtko</a>
              </li>

              <li>
                <a href="https://organica-vita.com/">Ogranica Vita</a>
              </li>

              <li>
                <a href="https://opg-buric.business.site/">OPG Buric</a>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title font">Kontakt</h2>

            <ul class="nav__ul">
              <li>
                <a href="https://goo.gl/maps/XNnR1BVRcMw5BcbKA">Adresa</a>
              </li>

              <li>
                <a href="/">Broj mobitela</a>
              </li>

              <li>
                <a href="/">Email</a>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title font">Mediji</h2>

            <ul class="nav__ul">
              <li>
                <a href="">Instagram</a>
              </li>

              <li>
                <a href="">Facebook</a>
              </li>

              <li>
                <a href="">TikTok</a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="legal">
          <p>Napravila Nora Soldo, 2022., kao stranicu za cvjećarnicu</p>

          <div class="legal__links">
            <span>Sva prava zadržana</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
