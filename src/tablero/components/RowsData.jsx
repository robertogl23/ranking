import { useContext } from 'react';
import RankingContext from '../../ranking/context/RankingContext';
import Row from './Row';
import RowsLoading from './RowsLoading';

const RowsData = ({ data }) => {
  const {rankingState} = useContext(RankingContext);
  const {isLoading} = rankingState;
  return (
    <>
      {!data || isLoading ? (
        <RowsLoading />
      ) : (
        data?.map((dataUser, i) => (
          <Row key={dataUser.id} dataUser={dataUser} i={i} />
        ))
      )}
    </>
  );
};

export default RowsData;
