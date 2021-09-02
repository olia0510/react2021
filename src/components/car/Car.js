export default function Car({value, deleteCar, editCar}) {

    let {id, model, year, price} = value;

    return(
        <div>
            <p>{model} - {year}.</p>
            <p>ID : {id}. Price : {price}</p>
            <button onClick={ () => {editCar(value)} }>Edit</button>
            <button onClick={ () => {deleteCar(value)} }>Delete</button>
            <hr/>
        </div>
    );
}
