
import { createStore } from "redux"

const reducersFn=(state={ counter:10 },action)=>{
	return state;
}

const store=createStore(reducersFn)

export default store;
