import Box from './Box';
import { Typography } from '@mui/material';

const Range = ({score}) =>  (
    <Box line={false} width="40%" >
        <Typography variant="body2" component="header">
            {score}
        </Typography> 
    </Box>
);

export default Range;