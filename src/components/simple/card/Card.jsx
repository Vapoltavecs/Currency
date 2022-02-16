import { string } from "prop-types";

const Card = ({ base_ccy, buy, ccy, sale }) => {
  return (
    <div className="drop-shadow-xl bg-white mt-10 m-1 p-9 rounded-lg w-full">
      <div>Price: {buy}</div>
      <div>Base ccy: {base_ccy} </div>
      <div>Ccy: {ccy}</div>
      <div>Sale:{sale}</div>
      <a
        href="/"
        className="bg-teal-900 p-5 white text-white rounded-lg mt-5 block text-center font-normal ease-out duration-300 hover:bg-sky-700 "
      >
        Change this valute
      </a>
    </div>
  );
};

Card.propTypes = {
  base_ccy: string,
  buy: string,
  ccy: string,
  sale: string,
};

export { Card };
