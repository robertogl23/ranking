import { useCallback } from "react";

const useTrophy = ({lugar,puntos}) => {
        
    const drawTrophy = () => lugar > 0 && lugar <=3;

    const getColor = useCallback(() => (
        lugar === 1 ? '#ffeb3b' :
        lugar === 2 ? '#bdbdbd' : '#8d6e63'
    ),[lugar])
        

    const getColorText = useCallback(() => (
        puntos === 0 || lugar > 3 ? '#000' : '#fff'
    ),[puntos,lugar]);


    return {
        getColor,
        drawTrophy,
        getColorText,
    }
}

export default useTrophy
