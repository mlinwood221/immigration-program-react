// mapStateToProps
export const getQAInput = (store, qId) => store.qAnswers[`Q${qId}`] ? store.qAnswers[`Q${qId}`].Text : '';

export const getQASelect = (store, qId) => store.qAnswers[`Q${qId}`] ? store.qAnswers[`Q${qId}`].answerCode : '';


export const getStore = (store) => store;

export const getQAGroup = (store, groupId) => store.qAnswers[`Q${groupId}`] ? [ ...store.qAnswers[`Q${groupId}`] ] : [];

export const getQASingle = (store, qId) => store.qAnswers[`Q${qId}`] ? store.qAnswers[`Q${qId}`] : '';

// extraSelectors
export const getQAEmail = (store) => store.qAnswers.Q3 ? store.qAnswers.Q3 : "";

export const getQARequest = (requestBody, store, qId) => store.qAnswers[`Q${qId}`]
                                    && requestBody.push({ ...store.qAnswers[`Q${qId}`], ProfileEmail: getQAEmail(store) });
