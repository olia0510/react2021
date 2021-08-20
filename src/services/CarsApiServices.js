const saveCars = (car) => {
fetch('http://195.72.146.25/api/v1/cars', {
    method: 'GET',
    body: JSON.stringify(car),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
}
export {saveCars}