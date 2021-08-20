import {saveCars} from "../services/CarsApiServices";


    export default function form() {

        let onFormSubmit = (c) => {
            o.preventDefault();
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
            <form onSubmit={onFormSubmit}>
                <input type={'number'} name={'id'} pleceholder={'id'}/>
                <input type={'model'} name={'model'} pleceholder={'model'}/>
                <input type={'price'} name={'price'} pleceholder={'price'}/>
                <input type={'year'} name={'year'} pleceholder={'year'}/>
                <button>save</button>
            </form>

        </div>
      );
    }
}