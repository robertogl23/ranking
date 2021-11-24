import { Typography, Tooltip } from '@mui/material';
import StyledBox from './StyledBox';

const FullName = ({ name, carrera }) => (
  <StyledBox line={true} width={'100%'} className="f center f-start">
    <Tooltip title={`Grupo: ${carrera}`}>
      <Typography variant="body2" component="header" marginLeft={'.6rem'}>
        {name}
      </Typography>
    </Tooltip>
  </StyledBox>
);

export default FullName;
