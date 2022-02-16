import { array } from "prop-types";
import Card from "../../simple/card";

const Cards = ({ cards }) => {
  if (!cards) return null;
  return (
    <div className="flex justify-center">
      {cards.map(({ ccy, base_ccy, buy, sale }, i) => (
        <Card
          ccy={ccy}
          base_ccy={base_ccy}
          buy={buy}
          sale={sale}
          key={Math.random()}
        />
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: array,
};

export { Cards };
