import StyledRange from './StyledRange';
import Box from './Box';

const Range = ({score}) =>  (
    <Box line={false} >
        <StyledRange  score={score}/>
    </Box>
);

export default Range;