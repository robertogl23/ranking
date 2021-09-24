import { Typography } from "@mui/material"
import { memo } from "react";
import useTrophy from "../hooks/useTrophy";
import Box from './Box';
import TrophySvg from "./TrophySvg";

const Position = ({indice,puntos}) => {
    const {
            getColor,
            drawTrophy,
            getColorText,
            getDisplayScore,
        } = useTrophy({indice,puntos});
    
    return (
        <Box width="40%">              
            <Typography variant="h6" 
                component="span" 
                color={getColorText()} 
                zIndex="1" 
                marginBottom={indice <= 3 && "14px"}
            >
                {getDisplayScore()}
            </Typography>
            {drawTrophy() && (
                <TrophySvg bgColor={getColor()}/>
            )}
        </Box>
    )
}

export default memo(Position)
