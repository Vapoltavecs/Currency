import Home from "./pages/home";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
