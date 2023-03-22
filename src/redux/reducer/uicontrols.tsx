import { AnyAction } from 'redux'
const TOKEN_SELECTOR_MODEL = 'playground/uicontrols/TOKEN_SELECTOR_MODEL';
const SELECTED_TOKEN_DATA = 'playground/uicontrols/SELECTED_TOKEN_DATA';

const initialState = {
    tokenSelectorModel: false,
    selectedTokenData: ""
};

export default (state = initialState, action:AnyAction) => {
    switch (action.type) {
      case TOKEN_SELECTOR_MODEL:
        return {...state, tokenSelectorModel: !state.tokenSelectorModel}
      case SELECTED_TOKEN_DATA:
        return {...state, selectedTokenData: action.payload}
      default:
        return state;
    }
};

export const toggleTokenSelectorModel = () => ({
  type: TOKEN_SELECTOR_MODEL,
});

export const selectTokenData = (payload:'eth' | 't#') => ({
  type: SELECTED_TOKEN_DATA,
  payload: payload
});
