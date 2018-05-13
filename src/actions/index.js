import { CHANGE_AUTH } from "./types";

const authenticate = isLoggedIn => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};

export default authenticate;
