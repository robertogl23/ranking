import { Typography } from "@mui/material"
import Box from './Box';

const FullName = ({name}) => {
    return (
        <Box width="100%" >                   
            <Typography variant="body2" component="header">
                {name}
            </Typography>
        </Box>
    )
}

export default FullName
