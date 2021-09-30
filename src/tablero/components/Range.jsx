import Box from './Box';
import { Typography } from '@mui/material';
import styled from '@emotion/styled'

const BgColor = styled.div`
    background: #009688;
    padding:6px;
    border-radius: 4px;
`;

const Range = ({score}) =>  (
    <Box line={false} width="40%" >
        <BgColor>
            <Typography 
                variant="body2" 
                component="header" 
                color={"#fff"}
            >
                {score}
            </Typography> 
        </BgColor>
    </Box>
);

export default Range;