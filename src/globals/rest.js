import axios from "axios";

const instance2 = axios.create({
	baseURL: "http://3.35.222.88:8080",
});

instance2.interceptors.request.use(function (config) {
    // TODO 전처리
    return config;
});

instance2.interceptors.response.use(
    function (response) {
        // TODO 후처리 (성공)
        return Promise.resolve(response);
    },

    function (error) {
        // TODO 후처리 (실패)
        return Promise.reject(error);
    }
);

export default instance2;
