import http from "./http-common.js";

class QAService {
    saveUserResponse(data) {
        return http.post('/base/SaveUserResponse', data);
    }

    getSchoolInformation(schoolId) {
        return http.get(`base/GetSchoolInformation?schoolId=${schoolId}`);
    }

    getNocGroup(nocCode) {
        return http.get(`/base/GetNocGroup?nocCode=${nocCode}`);
    }

    getProgramRecommendations(email) {
        return http.get(`/base/GetProgramRecommendations?profileEmail=${email}`);
    }

    getCrsRecommendations(email) {
        return http.get(`/base/GetCrsRecommendations?profileEmail=${email}`);
    }

    getCrsPoints(email) {
        return http.get(`/base/GetCrsPoints?profileEmail=${email}`);
    }

    SavePartnerClient(data) {
        return http.post('/base/SavePartnerClient', data);
    }
}

export default new QAService();
