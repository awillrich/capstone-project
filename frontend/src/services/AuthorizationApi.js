export default function AuthorizationApi() {
  var formdata = new FormData();
  formdata.append("grant_type", "password");
  formdata.append("client_id", process.env.REACT_APP_CLIENT_ID);
  formdata.append("client_secret", process.env.REACT_APP_CLIENT_SECRET);
  formdata.append("username", "vcummings@example.org");
  formdata.append("password", "password");

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  console.log("id", process.env.REACT_APP_CLIENT_ID);
  console.log("secret", process.env.REACT_APP_CLIENT_SECRET);

  let serverResponse = fetch(
    "http://127.0.0.1:8000/oauth/token",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log("result", result))
    .catch((error) => console.log("error", error));

  console.log("serverResponse", serverResponse);

  return serverResponse;
}
