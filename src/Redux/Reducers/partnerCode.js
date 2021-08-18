import { PARTNER_CODE } from "../Actions/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case PARTNER_CODE:
            return {
                ...state,
                code: action.payload
            };
        default:
            return state;
    }
}
