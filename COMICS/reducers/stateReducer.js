const opds = "http://opds.mml2.net:2202";
const initialState = {
    opds: opds
}

export const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_OPDS':
            return { ...state, opds: action.payload.opds };
        default:
          return state
    }
}