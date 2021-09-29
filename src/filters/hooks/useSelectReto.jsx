import { useContext, useState } from 'react'
import RankingContext from '../../ranking/context/RankingContext';
import useSearchName from './useSearchName';

const useSelectReto = () => {
    const [reto,SetReto] = useState('');
    const {rankingState, dispatch} = useContext(RankingContext);
    const {resetData,searchName} = useSearchName();

    const getReto = (value) => (
        value === 10 ? 'ad' :
        value === 20 ? 'cs' : 'ia'
    )

    const handleChange = (event) => {
        resetData()
        const text = event.target.value
        const data = rankingState[getReto(text)]
        dispatch({
            type:"changeReto",
            payload: {
                reto:getReto(text),
                dataOriginal: data
            }
        })
        SetReto(text);
        //searchName(rankingState.text,data)
        //searchName(rankingState.text)
    };

    return {
        reto,
        handleChange
    }
}

export default useSelectReto
