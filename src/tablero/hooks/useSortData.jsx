import { useEffect, useState,useCallback } from "react"

const useSortData = ({data}) => {
    const [sortData, setData] = useState()

    
    const dataSort = useCallback(() =>
        data?.sort((a,b) => 
            a.puntos < b.puntos  ?  1  :
            a.puntos > b.puntos  ? -1  : 0
    ),[data]);

    useEffect(() => {       
        setData(dataSort());
    }, [dataSort])

    return {
        sortData
    }
}

export default useSortData
