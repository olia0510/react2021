// let homeIp = 'http://195.72.146.25/api/v1/cars';
// let officeIp = 'http://192.168.1.253/api/v1/cars';
let reserveIp = 'http://91.201.233.14/api/v1/cars';

let actualIp = reserveIp;

let getCarsAPI = () => {
    return fetch(actualIp)
        .then(value => value.json());
}

let postCarAPI = (car) => {
    return fetch(actualIp, {
        method: 'Post',
        body: JSON.stringify(car),
        headers: {'Content-type': 'application/json; charset=UTF-8',}
    })
        .then(() => getCarsAPI());
}

let patchCarAPI = (car) => {
    return fetch( actualIp + '/' + car.id, {
        method: 'PATCH',
        body: JSON.stringify(car),
        headers: {'Content-type': 'application/json; charset=UTF-8',}
    } )
        .then(() => getCarsAPI());
}

// let putCarAPI = (car) => {
//     return fetch( actualIp + '/' + car.id, {
//         method: 'PUT',
//         body: JSON.stringify(car),
//         headers: {'Content-type': 'application/json; charset=UTF-8',}
//     } )
//         .then(response => response.json());
// }

let deleteCarAPI = (car) => {
    return fetch( actualIp + '/' + car.id, {method: 'DELETE'} );
    // .then(response => response.json());   // Кривой ответ от сервера? json() не может расшифровать.
}

export {getCarsAPI, postCarAPI, patchCarAPI, deleteCarAPI};


