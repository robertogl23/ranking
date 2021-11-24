import styles from '../css/tablero.module.css';
import Skeleton from '@mui/material/Skeleton';
import { Divider } from '@mui/material';
import StyledBox from './StyledBox';

const Row = () => (
  <>
    <div className={`${styles.colums}`}>
      <StyledBox line={true} width={'40%'} className="f center">
        <Skeleton
          variant="text"
          animation="pulse"
          height={19}
          width={'60%'}
          sx={{ bgcolor: '#70707071' }}
        />
      </StyledBox>
      <StyledBox line={true} width={'100%'} className="f center">
        <Skeleton
          variant="text"
          animation="pulse"
          height={19}
          width={'80%'}
          sx={{ bgcolor: '#70707071' }}
        />
      </StyledBox>
      <StyledBox line={true} width={'39.7%'} className="f center">
        <Skeleton
          variant="text"
          animation="pulse"
          height={19}
          width={'60%'}
          sx={{ bgcolor: '#70707071' }}
        />
      </StyledBox>
    </div>
    <Divider />
  </>
);

const RowsLoading = () => {
  return (
    <div>
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default RowsLoading;
