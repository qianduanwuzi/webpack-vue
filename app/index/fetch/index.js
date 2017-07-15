import axios from 'axios'

let fetch = {
    fetchGet(url, param) {
        return axios.get(url, {
            params: { param }
        })
            .then(res => res.data)
    },
    fetchPost(url, param) {
        return axios.post(url, param)
            .then(res => res.data)
    },
    fetchPut(url, param) {
        return axios.put(url, param)
            .then(res => res.data)
    },
    fetchDelete(url, param) {
        return axios.delete(url, param)
            .then(res => res.data)
    }

}

export default fetch