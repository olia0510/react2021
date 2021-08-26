let url = 'https://jsonplaceholder.typicode.com/users'
const getUsers = () => fetch(url)
    .then(value => value.json())

    export {getUsers};

// const saveCars = (car) => {
// fetch('http://91.201.233.14/api/v1/cars', {
//     method: 'POST',
//     body: JSON.stringify(car),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }
// export {saveCars}
export class saveCars {
}