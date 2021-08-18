import { QA_UPDATE_CODE, QA_RESET, PARTNER_CODE } from "./actionTypes";

export const updateAnswer = (obj) => ({
    type: QA_UPDATE_CODE,
    payload: obj
});

export const resetAnswers = () => ({
    type: QA_RESET
});

export const setPartnerCode = (code) => ({
    type: PARTNER_CODE,
    payload: code
})