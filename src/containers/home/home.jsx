import { func } from "prop-types";
import Cards from "../../components/ordinary/Cards";
import { useFetch } from "../../core/hooks/useFetch";
import Spinner from '../../components/simple/spinner'

const HomeContainer = ({ getWeathersCards }) => {
  const [isLoading, cards] = useFetch(null, getWeathersCards, () =>
    console.log("error then getting cards")
  );
  return !isLoading ?  <Cards cards={cards} /> : <Spinner />;
};

HomeContainer.propTypes = {
  getWeathersCards: func,
};

export { HomeContainer };
