

const uuidGenerator = () => {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const opds = "http://opds.mml2.net:2202";
let uuid = uuidGenerator();
const initialState = {
    opds: opds,
    uuid: uuid
}


export const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_OPDS':
            return { ...state, opds: action.payload.opds };
            break;
        case 'UPDATE_UUID':
            return {...state, uuid: action.payload.uuid };
        default:
          return state
    }
}