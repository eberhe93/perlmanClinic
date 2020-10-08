const Api = {
    postToSuccess(data){
        return fetch(`https://httpbin.org/delay/3`, {
            method: 'post',
            body: data
        })
    },
    postToError(data){
        return fetch(`https://httpbin.org/status/400`, {
            method: 'post',
            body: data
        })
    }
    }

export default Api;
