import React from "react";
import LeftNav from "../components/simple/LeftNav";
import { Chart } from "../components/smart/graph/graph";
import HomeContainer from "../containers/home";
import api from "../core/api/index";

const Home = () => {
  const getWeatherData = () => api.home.getCards();
  return (
    <div className="flex flex-row font-mono">
      <div className="basis-1/6 ">
        <LeftNav />
      </div>
      <div className="basis-3/4 ml-5">
        <HomeContainer getWeathersCards={getWeatherData} />
        <Chart />
      </div>
    </div>
  );
};

export default Home;
