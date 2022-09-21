import data from "./data";
import Program from "./Programs";
import shuffle from "./Shuffle";

function App(): JSX.Element {
  const elements: JSX.Element[] = shuffle(data).map((dat, index) => (
    <Program
      key={index}
      name={dat.name}
      img={dat.img}
      website={dat.website}
    ></Program>
  ));

  return (
    <div className="App">
      <h1>Programs</h1>
      <div className="Elements">{elements}</div>
    </div>
  );
}

export default App;
