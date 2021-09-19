const RankingReducer = ( state, action ) => {
    switch (action.type) {
        case "setData":
            return {
                ...state,
                data: action.payload
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