import { useContext, useEffect, useState } from "react"
import RankingContext from "../../ranking/context/RankingContext"

const useFilterType = ({type}) => {
    const {rankingState} = useContext(RankingContext)
    const [data, setData] = useState()

    useEffect(() => {
       const dataFilter = rankingState?.data?.filter(d => d.reto === type)
       const dataSort = dataFilter?.sort((a,b)=> {
            if(a.puntos < b.puntos){
                return 1;
            }
            if(a.puntos > b.puntos){
                return -1
            }
            return 0
        })
       setData(dataSort)
    }, [type,rankingState])
    return {
        data
    }
}

export default useFilterType
