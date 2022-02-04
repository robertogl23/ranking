const RankingReducer = (state, action) => {
  switch (action.type) {
    //
    // ESTABLECIONDO DATA FILTRADA POR RETO
    //

    case 'SET_RESULTADOS':
      return {
        ...state,
        data: action.payload?.respuesta?.data,
        ia: action.payload?.IA,
        cs: action.payload?.CS,
        ad: action.payload?.VJ,
        dataOriginal: action.payload?.ad,
        isLoading: false,
      };

    //
    // PUEDE QUE SE BORRE ESTE ESTADO :C
    //

    case 'isLoading':
      return {
        ...state,
        isLoading: action.payload,
      };

    //
    // ESTABLECIENDO DATA ENCONTRADA POR EL USUARIO
    //

    case 'setDataEncontrada':
      return {
        ...state,
        [action.payload?.reto]: action.payload?.data,
      };

    //
    // RESTABLECIENDO DATA ORIGINAL
    //

    case 'resetData':
      return {
        ...state,
        [action.payload?.reto]: action.payload?.data,
      };

    //
    // CAMBIANDO DE RETO SELECCIONADO
    //

    case 'changeReto':
      return {
        ...state,
        reto: action.payload?.reto,
        dataOriginal: action.payload?.dataOriginal,
      };

    //
    // ESTABLECIENDO TEXTO ESCRITO POR EL USUARIO
    //

    case 'setText':
      return {
        ...state,
        text: action.payload,
      };

    default:
      return state;
  }
};
export default RankingReducer;
