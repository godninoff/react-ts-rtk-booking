import Header from "./components/Header";
import "./App.css";
import Filter from "./components/Filter";
import Hotels from "./components/Hotels";
import mock from "./utils/mock.json";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Filter />
      <div className="hotel-cards">
        {mock.map((item) => (
          <div className="hotel-item" key={item.id}>
            <Hotels {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
