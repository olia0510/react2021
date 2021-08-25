// import {createRef, useState} from "react";
// import {saveCars} from "../services/CarsApiServices";
//
// export default function Form() {
//
//
//
//     let onFormSubmit = (e) => {
//         e.preventDefault();
//         console.log('form submit')
//         console.log(e.target.model.value);
//         console.log(e.target.year.value);
//         let carToSave = {model: e.target.model.value, year: e.target.year.value}
//         console.log(carToSave);
//         saveCars(carToSave);
//     };
//     return (
//     <div>
//           <form onSubmit={onFormSubmit}>
//             <input type="text" name={'model'} placeholder='model'/>
//             <input type="year" name={'year'} placeholder='year'/>
//             <button>save</button>
//          </form>
//     </div>
//   );
// }









// import {saveCars} from "../services/CarsApiServices";
//
//
//     export default function Form() {
//
//         let onFormSubmit = (c) => {
//             o.preventDefault();
//             console.log('form submit');
//             console.log(o.target.id.value);
//             console.log(o.target.model.value);
//             console.log(o.target.price.value);
//             console.log(o.target.year.value);
//             let carToSave = {id: o.target.id.value, model: o.target.model.value, price: o.target.price.value, year: o.target.year.value}
//      console.log(carToSave)
//             saveCars(carToSave)
//       return (
//         <div>
//             <form onSubmit={onFormSubmit}>
//                 <input type={'number'} name={'id'} pleceholder={'id'}/>
//                 <input type={'model'} name={'model'} pleceholder={'model'}/>
//                 <input type={'price'} name={'price'} pleceholder={'price'}/>
//                 <input type={'year'} name={'year'} placeholder={'year'}/>
//                 <button>save</button>
//             </form>
//
//         </div>
//       );
//     }
// }