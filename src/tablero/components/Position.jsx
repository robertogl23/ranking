import { Typography } from "@mui/material"
import { memo } from "react";
import useTrophy from "../hooks/useTrophy";
import Box from './Box';
import TrophySvg from "./TrophySvg";

const Position = ({lugar,puntos}) => {
    const {
            getColor,
            drawTrophy,
            getColorText
        } = useTrophy({lugar,puntos});
    
    return (
        <Box width="40%">              
            <Typography variant="h6" 
                component="span" 
                color={getColorText()} 
                zIndex="1" 
                marginBottom={lugar > 3 ? '0' : lugar === 0 ? '0' : '14px'}
            >
                {lugar}
            </Typography>
            {drawTrophy() && (
                <TrophySvg bgColor={getColor()}/>
            )}
        </Box>
    )
}

export default memo(Position)
