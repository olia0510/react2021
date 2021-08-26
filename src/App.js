import {useReducer} from "react";

const  reducer = (state = 0, action) => {

  switch (action) {
    case '+':
      return state + 10;
    case '-':
      return state - 2;
    default:
      return state
  }

}
export default function App() {

  let [state, dispatch] = useReducer(reducer);
  console.log(state);

  return (
    <div>
    <h1>{state}</h1>
      <button onClick={() => dispatch('+')}/>
      <button onClick={() => dispatch('-')}/>

    </div>
  );
}


