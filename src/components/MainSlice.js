import axios from "axios";

const initialState = {
  contactCollection: [],
  hasMore: true,
  loading: true
}


export default function MainReducer(state = initialState, action) {
  switch (action.type) {
    case 'getPassengersList': {
      var setHasMore
      if (action.payload !== undefined) {
        setHasMore = action.payload.length !== 0 ? true : false
      } else {
        setHasMore = false
      }
      return {
        ...state,
        hasMore: setHasMore,
        contactCollection: state.hasMore !== true ? state.contactCollection : state.contactCollection.concat(action.payload)
      };
    }
    default:
      return state
  }
}

// Thunk function


export function getPassengersList({ page }) {
  return async function getPassengersForCardsThunk(dispatch, getState) {
    const params = { page: page,size:10 }
    const response = await axios.get('https://api.instantwebtools.net/v1/passenger', { params: params })
    if (response) {
      dispatch({ type: 'getPassengersList', payload: response.data.data })
    }
  }
}





