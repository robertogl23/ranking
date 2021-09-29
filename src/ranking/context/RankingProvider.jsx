import { LinearProgress } from "@mui/material"
import { useEffect, useReducer } from "react"
import useSortData from "../../tablero/hooks/useSortData"
import useGetData from "../hooks/useGetData"
import RankingContext from "./RankingContext"
import RankingReducer from "./RankingReducer"

const INITIAL_STATE = {
    isLoading:true,
    data:[],
    ia:[],
    cs:[],
    ad:[],
    dataOriginal:[],
    reto:'',
    text:'',
    isErrorApi: false,
}

const RankingProvider = ( { children } ) => {
    const [ rankingState, dispatch ] = useReducer( RankingReducer, INITIAL_STATE );
    const { data } =  useGetData();

    useEffect(() => {
        dispatch({type:'setData',payload:data})
    }, [data]);
    
    return (
        <RankingContext.Provider value={{rankingState,dispatch}}>
            {rankingState.isLoading && <LinearProgress color="secondary" />}
            { children }
        </RankingContext.Provider>
    )
}

export default RankingProvider
