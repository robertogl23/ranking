import Box from './Box';
import { Typography } from '@mui/material';

const Range = ({score}) =>  (
    <Box line={false} >
        <Typography variant="body2" component="header">
            {score}
        </Typography> 
    </Box>
);

export default Range;