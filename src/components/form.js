import {saveCars} from "../services/CarsApiServices";


    export default function form() {

        let onFormSubmit = (c) => {
            console.log('form submit');
            console.log(o.target.id.value);
            console.log(o.target.model.value);
            console.log(o.target.price.value);
            console.log(o.target.year.value);
            let carToSave = {id: o.target.id.value, model: o.target.model.value, price: o.target.price.value, year: o.target.year.value}
     console.log(carToSave)
            saveCars(carToSave)
      return (
        <div>


        </div>
      );
    }
}