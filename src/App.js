import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux"

function App() {
	const counter=useSelector(state=>state.counter);
	console.log(counter);

	return (
	     <div>
	         <h1>Counter App</h1>
		     <h3>counter : { counter }</h3>
	      </div>
  );
}


export default App;
