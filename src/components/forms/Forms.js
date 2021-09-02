import { useEffect, useState } from "react";
import { getCarsAPI, patchCarAPI, postCarAPI, putCarAPI } from "../../services/CarsApiServices";
import Cars from "../cars/Cars";

export default function CarForm() {
    let [formState, setFormState] = useState({model: '', year: '', price: ''});
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCarsAPI().then(value => setCars(value))
    }, []);

    let onFormInputChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    };

    let save = (event) => {
        event.preventDefault();

        let update = formState.id;

        let verificationOfValidation =
            formState.model !== ''
            && formState.model.length <= 20
            && formState.year >= 1990
            && formState.year <= 2021
            && formState.price >= 0;

        if (verificationOfValidation) {
            update
                ? patchCarAPI(formState).then(value => setCars(value))
                : postCarAPI(formState).then(value => setCars(value));

            setFormState({model: '', year: '', price: ''});
            return;
        }
        console.log('ERROR: invalid validation');
    };

    return(
        <div>
            <form onSubmit={save}>
                <input type={'text'}
                       name={'model'}
                       value={formState.model}
                       placeholder={'Write the model..'}
                       onChange={onFormInputChange}
                    // minLength={1} maxLength={20}
                />
                <input type={'text'}
                       name={'year'}
                       value={formState.year}
                       placeholder={'Write the year..'}
                       onChange={onFormInputChange}
                    // min={1990} max={2021}
                />
                <input type={'text'}
                       name={'price'}
                       value={formState.price}
                       placeholder={'Write the price..'}
                       onChange={onFormInputChange}
                    // min={0}
                />
                <input type={'submit'} name={'button'} value={'PostCar'}/>
            </form>

            <Cars setInputCarData={setFormState} cars={cars} setCars={setCars}/>
        </div>
    );
}