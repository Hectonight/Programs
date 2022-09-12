import data from "./data";
import Program from "./Programs";

function App(): JSX.Element {
  const elements: JSX.Element[] = data.map((dat, index) =>
    Program({ ...dat, key: index })
  );

  return <div className="App">{elements}</div>;
}

export default App;