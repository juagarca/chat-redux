import { FETCH_MESSAGES } from '../actions';

export default function(state = null, action) {
  console.log("aki");
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    default:
      return state;
  }
}
