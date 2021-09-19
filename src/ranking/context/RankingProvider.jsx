import { LinearProgress } from "@mui/material"
import { useEffect, useReducer } from "react"
import useGetData from "../hooks/useGetData"
import RankingContext from "./RankingContext"
import RankingReducer from "./RankingReducer"
const INITIAL_STATE = {
    isLoading:true,
    data:[],
    isErrorApi: false
}
const RankingProvider = ( { children } ) => {
    const [ rankingState, dispatch ] = useReducer( RankingReducer, INITIAL_STATE );
    const { data } =  useGetData();

    useEffect(() => {
        dispatch({type:'setData',payload:data?.data})
        dispatch({type:'isLoading',payload:false})
    }, [data]);
    
    return (
        <RankingContext.Provider value={{rankingState,dispatch}}>
            {rankingState.isLoading && <LinearProgress color="secondary" />}
            { children }
        </RankingContext.Provider>
    )
}

export default RankingProvider
