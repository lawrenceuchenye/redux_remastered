import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from "react-redux"

function App() {
	const counter=useSelector(state=>state.counter);
	const dispatch=useDispatch();

	const Increment=()=>{
		dispatch({ type:"INC" });
	}

	const Decrement=()=>{
		dispatch({ type:"DEC" });
	}

	return (
	     <div>
	         <h1>Counter App</h1>
		     <h3>counter : { counter }</h3>
		     <div>
		          <button onClick={Increment}>
		             Increase
		            </button>
		           <button onClick={Decrement}>
		             Decrease
		             </button>
		       </div>
	      </div>
  );
}


export default App;
