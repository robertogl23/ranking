import { Container } from '@mui/material';
import Tableros from '../tablero/Tableros';
import RankingProvider from './context/RankingProvider';

const Ranking = () => (
  <RankingProvider>
    <Container>
      <Tableros />
    </Container>
  </RankingProvider>
);

export default Ranking;
