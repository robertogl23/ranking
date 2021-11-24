import StyledBox from './StyledBox';

const Box = ({ width = '100%', line = true, children }) => (
  <StyledBox line={line} width={width} className="f center">
    {children}
  </StyledBox>
);

export default Box;
