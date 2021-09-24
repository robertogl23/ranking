const RankingReducer = ( state, action ) => {
    switch (action.type) {
        case "setData":
            return {
                ...state,
                data: action.payload,
                ia: action.payload?.filter(d => d.reto === "inteligencia artificial"),
                cs: action.payload?.filter(d => d.reto === "ciberseguridad"),
                ad: action.payload?.filter(d => d.reto === "análisis de datos")
            }
        case "isLoading":
            return {
                ...state,
                isLoading: action.payload
            }
    
        default:
            return state;
    }
}
export default RankingReducer;