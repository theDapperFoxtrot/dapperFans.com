import React from "react";

const Login = () => {
  // twitch API query variables
  const client_id = "oma0uv782386bjhvjlwsjd6vxmwmux";
  const force_verify = true;
  const redirect_uri = "http://localhost:3000/twitch";
  const scope = ["user:read:email"];

  return (
    <>
      <div className="container">
        <h1 aria-required="true">Login</h1>
        <a href={`https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`}>Connect with Twitch</a>
      </div>
    </>
  );
};

export default Login;
