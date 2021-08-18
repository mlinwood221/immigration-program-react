import { QA_UPDATE_CODE, QA_RESET } from "../Actions/actionTypes";

const initialState = { };

export default function(state = initialState, action) {
    switch (action.type) {
        case QA_UPDATE_CODE:
            return {
                ...state,
                ...action.payload
            };
        case QA_RESET:
            return { };
        default:
            return state;
    }
}
