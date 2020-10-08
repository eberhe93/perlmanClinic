const Api = {
    postToSuccess(data){
        fetch(`https://httpbin.org/delay/3`, {
            method: 'post',
            body: data
        }).then(response => response.json()).then(data=>console.log(data))
    },
    postToError(data){
        fetch(`https://httpbin.org/status/400`, {
            method: 'post',
            body: data
        }).then(response => {
            if (response.status === 400) {
                throw new Error('your error message here');
            }
            return response.json();
        })
        .then(json => {
            // handle response 
            console.log(json)
        })
        .catch(ex => {
            // handle errors here
            console.log(ex)

        });
    }
    }

export default Api;
