// TODO: add and export your own actions
const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';


export default function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}
