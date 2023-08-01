import React from "react";
import { connect } from "react-redux";

const YourDistance = ({ user, activities, returnTokens }) => {
  return (
    <div>
      <h1>Hi, {returnTokens.athlete.firstname}!</h1>
      <h1>Here are your stats for this year to date</h1>
      <h2>Run: {user.data.ytd_run_totals.distance}</h2>
      <h2>Ride: {user.data.ytd_ride_totals.distance}</h2>
      <h2>Swim: {user.data.ytd_swim_totals.distance}</h2>
      <h2>Last activity: {activities.data.name}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.activities,
    user: state.user,
    returnTokens: state.returnTokens,
  };
};

export default connect(mapStateToProps)(YourDistance);
