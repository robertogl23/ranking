import { Typography } from "@mui/material"
import Box from './Box';

const Position = ({indice,puntos}) => (
    <Box width="40%">              
        <Typography variant="body2" component="header">
            {puntos === 0 ? '--' : indice + 1}
        </Typography>
    </Box>
)

export default Position
