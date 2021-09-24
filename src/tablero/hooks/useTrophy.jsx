import { useCallback } from "react";

const useTrophy = ({indice,puntos}) => {
        
    const drawTrophy = useCallback(() => (
        indice > 0 && indice <=3
    ),[indice]);

    const getColor = useCallback(() => (
        indice === 1 ? '#fff834' :
        indice === 2 ? '#a9a9a9' : '#95510a'
    ),[indice])
        
    const getDisplayScore = useCallback(() => (
        puntos === 0 ? '--' : indice
    ),[puntos,indice]);

    const getColorText = useCallback(() => (
        puntos === 0 || indice > 3 ? '#000' : '#fff'
    ),[puntos,indice]);


    return {
        getColor,
        drawTrophy,
        getColorText,
        getDisplayScore,
    }
}

export default useTrophy
