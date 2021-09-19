import { useEffect, useState } from "react"
// import RankingContext from "../context/RankingContext"
import GetUserScore from "../services/GetUserScore"

const useGetData = () => {
    // const {dispatch} = useContext(RankingContext)
    const [data, setData] = useState()
    useEffect(() => {
        GetUserScore()
        .then(respuesta => setData(respuesta))
    },[])

    return {
        data
    }
}

export default useGetData
