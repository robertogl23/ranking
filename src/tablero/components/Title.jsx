import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const Title = ({title}) => {
    return (
    <Box sx={{display:'flex', height:'3rem',justifyContent:'center',alignItems:'center'}}>
        <Typography variant="h5" component="h5">
            {title}
        </Typography>
    </Box>
    )
}

export default Title
