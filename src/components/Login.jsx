import React from "react";

const Login = () => {
  // twitch API query variables
  const client_id = "oma0uv782386bjhvjlwsjd6vxmwmux";
  // const force_verify = true;
  const redirect_uri = "http://localhost:3000/twitch";
  const scope = ["user:read:email"];
  const state = "51f5362c9098097a8b57d6a9fd0921aa8ce97e1e75021fa22dbbfa2ecf97b0b9b3b1176a1a48699e8fefe4cea6420fedbc180c4768186e0eeab5eefa5072b7f42c0716feef050d72d142678f9240b8761fb6415d33d43454d01fb7133b008c88e1cffa4b228378beb0c40f97ab9115c356f6d91e920c8e0d94b75d1967b18e94279035194268d276a123849c3df38aee556cc5cac395ad5f8d398f9ba8131bf3badb87019783595e311a89c2baf8ed5278eba3ad092a5225389e7f3e1191825e4c1b38fd2111f29e07f20ccfc0deef17c82792fdc5997cbd72b5677fdfd0026fa89c79965a2ffa8f9c8eea722260832e3ce84c9d9863abeff06575833b344728fa688f13b982c2899f5cd54c510ffdf8ec86a78470f510aa6b9210b170c0d7fb192369dfc2e92dea8f82d7b5ebae3cc187c76dbc59f4625e3500ee7bf26be3ce";

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const usernameSelector = document.querySelector("#usernameInput");
    const passwordSelector = document.querySelector("#passwordInput");
    const usernameInput = usernameSelector.value;
    const passwordInput = passwordSelector.value;
    console.log(usernameInput);
    console.log(passwordInput);
  };

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
