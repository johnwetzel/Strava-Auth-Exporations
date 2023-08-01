import { combineReducers } from "redux";

const setUserReducer = (tokens = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    default:
      return tokens;
  }
};

const setAthleteStatsReducer = (user = null, action) => {
  if (action.type === "SET_USER_STATS") {
    return action.payload;
  }
  return user;
};

const setActivitiesReducer = (activities = null, action) => {
  if (action.type === "SET_USER_ACTIVITIES") {
    return action.payload;
  }
  return activities;
};

export default combineReducers({
  returnTokens: setUserReducer,
  user: setAthleteStatsReducer,
  activities: setActivitiesReducer,
});
