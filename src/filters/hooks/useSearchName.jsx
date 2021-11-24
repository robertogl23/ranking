import { useContext } from 'react';
import RankingContext from '../../ranking/context/RankingContext';

const useSearchName = () => {
  const { rankingState, dispatch } = useContext(RankingContext);

  const searchName = (word, data) => {
    const dataEncontrada = data?.filter(
      (dato) => dato.nombre.toUpperCase().indexOf(word.toUpperCase()) > -1
    );

    dispatch({
      type: 'setDataEncontrada',
      payload: {
        reto: rankingState.reto,
        data: dataEncontrada,
      },
    });
  };

  const resetData = () => {
    dispatch({
      type: 'resetData',
      payload: {
        reto: rankingState.reto,
        data: rankingState.dataOriginal,
      },
    });
  };

  const handleChange = (e) => {
    const text = e.target.value;
    const data = rankingState.dataOriginal;
    dispatch({
      type: 'setText',
      payload: text,
    });
    text === '' ? resetData() : searchName(text, data);
  };

  return {
    handleChange,
    searchName,
    resetData,
  };
};

export default useSearchName;
