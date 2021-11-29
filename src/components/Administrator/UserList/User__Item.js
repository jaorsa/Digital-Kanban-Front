import "./User__Item.css";

const User__Item = (props) => {
  return (
    <section className="wrapper">
      {/* <!-- Row title --> */}
      <main className="row title">
        <ul>
          <li>Sport</li>
          <li>Entry $</li>
          <li>
            <span className="title-hide">#</span> Entries
          </li>
          <li>Max</li>
          <li>Time</li>
        </ul>
      </main>
      {/* <!-- Row 1 - fadeIn --> */}
      <section className="row-fadeIn-wrapper">
        <article className="row fadeIn nfl">
          <ul>
            <li>
              <a href="#">NFL</a>
              <span className="small">(fadeIn)</span>
            </li>
            <li>$50</li>
            <li>12</li>
            <li>48</li>
            <li>2:00ET</li>
          </ul>
          <ul className="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
      </section>
      {/* <!-- Row 2 - fadeOut --> */}
      <section className="row-fadeOut-wrapper">
        <article className="row nfl">
          <ul>
            <li>
              <a href="#">NFL</a>
              <span className="small">(fadeOut)</span>
            </li>
            <li>$5</li>
            <li>45</li>
            <li>100</li>
            <li>3:00ET</li>
          </ul>
          <ul className="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
      </section>
      {/* <!-- Row 3 --> */}
      <article className="row nfl">
        <ul>
          <li>
            <a href="#">NHL</a>
          </li>
          <li>$50</li>
          <li>12</li>
          <li>48</li>
          <li>12:00ET</li>
        </ul>
        <ul className="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
      {/* <!-- Row 4 --> */}
      <article className="row mlb update-row">
        <ul>
          <li>
            <a href="#">MLB</a>
            <span className="small">(update)</span>
          </li>
          <li>$10</li>
          <li>
            <span className="update1">1</span>
            <span className="update2">2</span>
          </li>
          <li>10</li>
          <li>1:00ET</li>
        </ul>
        <ul className="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
      {/* <!-- Row 5 --> */}
      <article className="row mlb">
        <ul>
          <li>
            <a href="#">MLB</a>
          </li>
          <li>$5</li>
          <li>48</li>
          <li>120</li>
          <li>12:00ET</li>
        </ul>
        <ul className="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
      {/* <!-- Row 6 --> */}
      <article className="row nhl">
        <ul>
          <li>
            <a href="#">NHL</a>
          </li>
          <li>$50</li>
          <li>12</li>
          <li>48</li>
          <li>12:00ET</li>
        </ul>
        <ul className="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
      {/* <!-- Row 7 --> */}
      <article className="row nhl">
        <ul>
          <li>
            <a href="#">NHL</a>
          </li>
          <li>$50</li>
          <li>12</li>
          <li>48</li>
          <li>12:00ET</li>
        </ul>
        <ul className="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
      {/* <!-- Row 8 --> */}
      <article className="row pga">
        <ul>
          <li>
            <a href="#">PGA</a>
          </li>
          <li>$50</li>
          <li>12</li>
          <li>48</li>
          <li>11:00ET</li>
        </ul>
        <ul className="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
      {/* <!-- Row 9 --> */}
      <article className="row pga">
        <ul>
          <li>
            <a href="#">PGA</a>
          </li>
          <li>$50</li>
          <li>12</li>
          <li>48</li>
          <li>11:00ET</li>
        </ul>
        <ul className="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
      {/* <!-- Row 10 --> */}
      <article className="row pga">
        <ul>
          <li>
            <a href="#">PGA</a>
          </li>
          <li>$50</li>
          <li>12</li>
          <li>48</li>
          <li>11:00ET</li>
        </ul>
        <ul className="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
      {/* <!-- Row 11 --> */}
      <article className="row mlb">
        <ul>
          <li>
            <a href="#">MLB</a>
          </li>
          <li>$10</li>
          <li>1</li>
          <li>10</li>
          <li>1:00ET</li>
        </ul>
        <ul className="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
    </section>
  );
};

export default User__Item;
