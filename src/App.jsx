import "./App.scss";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <div>Demo App Vite</div>
      <img src="./images/code.png" alt="images" />

      <div>
        First employee: {data.employees[0].firstName}{" "}
        {data.employees[0].lastName}
      </div>
      <div>
        Second employee: {data.employees[1].firstName}{" "}
        {data.employees[1].lastName}
      </div>
    </div>
  );
}

export default App;
