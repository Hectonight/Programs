import data from "./data";
import Program from "./Programs";

function App(): JSX.Element {
  const elements: JSX.Element[] = data.map((dat, index) => (
    <Program
      key={index}
      name={dat.name}
      website={dat.website}
      shadow_color={dat.shadow_color}
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
