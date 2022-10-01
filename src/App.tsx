import Header from "./components/Header";
import React from "react";
import "./App.css";
import Filter from "./components/Filter";
import Hotels from "./components/Hotels";

interface HotelCardProps {
  image: string;
  alt: string;
  name: string;
  price: number;
  seats: number;
}

const App: React.FC = () => {
  const [hotel, setHotel] = React.useState<Array<HotelCardProps>>([]);

  return (
    <div className="App">
      <Header />
      <Filter />
      <Hotels hotel={hotel} />
    </div>
  );
};

export default App;
