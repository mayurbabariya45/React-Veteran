import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  selectedMenuItemId: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_MENU_ITEM_ID:
      return {
        ...state,
        selectedMenuItemId: action.payload,
      };
    default:
      return state;
  };
};
