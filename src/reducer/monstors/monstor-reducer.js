import MONSTERS_ACTION_TYPES from "./monstor-type";

const INITIAL_STATE = {
  monsters: [],
  search: "",
};

export const monsterReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case MONSTERS_ACTION_TYPES.GET_ALL_MONSTERS:
      return { ...state, monsters: payload };
    case MONSTERS_ACTION_TYPES.SEARCH_MONSTER:
      return { ...state, search: payload };
    default:
      return state;
  }
};
