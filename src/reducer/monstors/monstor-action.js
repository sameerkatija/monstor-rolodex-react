import MONSTERS_ACTION_TYPES from "./monstor-type";

export const getAllMonsters = (monsters) => {
  return { type: MONSTERS_ACTION_TYPES.GET_ALL_MONSTERS, payload: monsters };
};

export const searchMonstor = (search) => {
  return { type: MONSTERS_ACTION_TYPES.SEARCH_MONSTER, payload: search };
};
