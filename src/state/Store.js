import { createStore } from "redux";
import { counterReducer } from "./CounterState";

export const Store = createStore(counterReducer)


 