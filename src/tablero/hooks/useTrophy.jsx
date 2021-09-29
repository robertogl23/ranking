import { useCallback } from "react";

const useTrophy = ({lugar,puntos}) => {
        
    const drawTrophy = () => lugar > 0 && lugar <=3;

    const getColor = useCallback(() => (
        lugar === 1 ? '#fff834' :
        lugar === 2 ? '#a9a9a9' : '#95510a'
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
