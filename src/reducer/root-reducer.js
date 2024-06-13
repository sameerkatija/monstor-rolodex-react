import { combineReducers } from "redux";
import { monsterReducer } from "./monstors/monstor-reducer";

const rootReducers = combineReducers({
  monRed: monsterReducer,
});

export default rootReducers;
