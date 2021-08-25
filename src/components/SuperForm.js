import {useState} from "react";
import {saveCars} from "../services/CarsApiServices";

export default function SuperForm() {
    let [formState, setFormState] = useState({model:'', price:'', year:''});

    let onFormInputChange = (e) => {
       setFormState({...formState, [e.target.name] : e.target.value})
    };

    let save = (e) => {
        e.preventDefault();
        saveCars(formState)
    };

  return (
    <div>
        <form>
            <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
            <input type="text" name={'price'} value={formState.price} onChange={onFormInputChange}/>
            <input type="text" name={'year'} value={formState.year} onChange={onFormInputChange}/>
            <input type='submit'/>
        </form>

    </div>
  );
}