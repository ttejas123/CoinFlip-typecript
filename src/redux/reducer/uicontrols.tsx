import { AnyAction } from 'redux'
const SUCCESSFULL_SHOT_MODEL = 'playground/uicontrols/SUCCESSFULL_SHOT_MODEL';

const initialState = {
    successfullShot: false
};

export default (state = initialState, action:AnyAction) => {
    switch (action.type) {
      case SUCCESSFULL_SHOT_MODEL:
        return { ...state, successfullShot: !state.successfullShot };
      default:
        return state;
    }
};

export const toggleSuccessfullShotModel = () => ({
    type: SUCCESSFULL_SHOT_MODEL,
});
