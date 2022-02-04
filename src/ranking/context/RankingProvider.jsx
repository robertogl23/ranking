import { LinearProgress } from '@mui/material';
import { useReducer } from 'react';
import RankingContext from './RankingContext';
import RankingReducer from './RankingReducer';

const INITIAL_STATE = {
  isLoading: true,
  data: [],
  ia: [],
  cs: [],
  ad: [],
  dataOriginal: [],
  reto: 'ad',
  text: '',
  isErrorApi: false,
};

const RankingProvider = ({ children }) => {
  const [rankingState, dispatch] = useReducer(RankingReducer, INITIAL_STATE);
  return (
    <RankingContext.Provider value={{ rankingState, dispatch }}>
      {rankingState.isLoading && <LinearProgress color="secondary" />}
      {children}
    </RankingContext.Provider>
  );
};

export default RankingProvider;
