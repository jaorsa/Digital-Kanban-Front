import "./StationCard.css";

const StationCard = () => {
  return (
    <div className="station-container">
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="java">Java</h2>
              <p className="java">
                Java is a className-based, object-oriented programming language
                that is designed to have as few implementation dependencies as
                possible.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>01</h2>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="python">Python</h2>
              <p className="python">
                Python is an interpreted, high-level and general-purpose
                programming language.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>02</h2>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="cSharp">C#</h2>
              <p className="cSharp">
                C# is a general-purpose, multi-paradigm programming language
                encompassing static typing, strong typing, lexically scoped and
                component-oriented programming disciplines.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>03</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationCard;
