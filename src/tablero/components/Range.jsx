import Box from './Box';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const BgColor = styled.div`
  background: #363636;
  border-radius: 4px;
  width: 85%;
  height: 20px;
`;

const BgRange = styled.div`
  width: ${(props) => (props.score > 100 ? 100 : props.score)}%;
  height: 100%;
  ${(props) => props.score > 0 && 'background: #10b956'};
  border-radius: 4px;
  padding: 4px 2px;
  animation-name: animation;
  animation-duration: 4s;
  animation-fill-mode: both;

  @keyframes animation {
    0% {
      width: 0%;
    }
  }
`;

const Range = ({ score }) => (
  <Box line={false} width="40%">
    <BgColor>
      <BgRange className="f center" score={score}></BgRange>
    </BgColor>
    <Typography
      variant="body2"
      component="header"
      color={'#fff'}
      sx={{
        position: 'absolute',
      }}>
      {score}
    </Typography>
  </Box>
);

export default Range;
