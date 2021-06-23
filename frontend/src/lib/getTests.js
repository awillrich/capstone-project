export default function getTests(period, pagination, page=null) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access_token'));

    let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    }; 

    //console.log(pagination)

    let requestURL = process.env.REACT_APP_BACKEND + "tests"
    if(page != null) {
        const found = pagination.find(element => element.label == page);
        //console.log('found', found)
        if(found !== undefined) {
            requestURL = found.url
        }
    }

    if(localStorage.getItem('access_token') !== null && localStorage.getItem('access_token') !== 'undefined') {
        return fetch(requestURL, requestOptions)
        .then(response => response.json())
    } else {
        return null;
    }
}