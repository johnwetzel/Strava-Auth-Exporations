import React from "react";

const { REACT_APP_CLIENT_ID } = process.env;
const redirectUrl = "http://localhost:3000/redirect";
const scopesRequested =
  "read,read_all,profile:write,activity:read,activity:write";

const handleLogin = () => {
  window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scopesRequested}`;
};

const Home = () => {
  return (
    <div>
      <h1>What are you training for?</h1>
      <button onClick={handleLogin}>Connect with Strava</button>
    </div>
  );
};

export default Home;
