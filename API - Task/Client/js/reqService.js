class Service {
    axiosGet(url) {
        return axios.get(url)
            .then(response => response.data)
    }

    axiosPost(url) {
        return axios.post(url)
            .then(response => response.data)
    }
}

export const fetchService = new Service()