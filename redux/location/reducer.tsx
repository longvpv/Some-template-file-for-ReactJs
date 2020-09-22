import LocationState from "../../@types/appTypes/locationState";
import { actionTypes } from './actions';


const initializeState: LocationState = {
  locations: []
}

export default function reducer(state = initializeState, action: any) {
  switch (action.type) {

    case actionTypes.SET_LOCATIONS:
      return {
        ...state,
        locations: action.locations
      }

    default:
      return state;
  }
}