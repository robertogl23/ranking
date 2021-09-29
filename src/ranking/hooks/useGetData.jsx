import { useEffect, useState } from "react"
import GetUserScore from "../services/GetUserScore"

const useGetData = () => {
    const [data, setData] = useState()

    const dataSort = (values) =>
        values?.sort((a,b) => 
            a.puntos < b.puntos  ?  1  :
            a.puntos > b.puntos  ? -1  : 0
    );

    const getLugar = (puntos,indice) => (
        puntos === 0 ? 0 : indice + 1
    );

    useEffect(() => {
        GetUserScore()
        .then(respuesta => {
            const ia = respuesta.data?.filter(d => d.reto === "inteligencia artificial")
            const cs = respuesta.data?.filter(d => d.reto === "ciberseguridad")
            const ad = respuesta.data?.filter(d => d.reto === "análisis de datos")

            const dataOrdenada = {
                ia : dataSort(ia)?.map((dato,i) => ({...dato, lugar : getLugar(dato.puntos,i)}) ),
                cs : dataSort(cs)?.map((dato,i) => ({...dato, lugar : getLugar(dato.puntos,i)}) ),
                ad : dataSort(ad)?.map((dato,i) => ({...dato, lugar : getLugar(dato.puntos,i)}) ),
                respuesta
            }

            setData(dataOrdenada)
        })
    },[])

    return {
        data
    }
}

export default useGetData
