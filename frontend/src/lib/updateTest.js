export default function updateTest(test) {
  let ignore = ["created_at", "updated_at", "deleted_at"];
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer " + localStorage.getItem("access_token")
  );

  let parameters = "";
  for (const [key, value] of Object.entries(test)) {
    if (value != null && !ignore.includes(key)) {
      parameters += key + "=" + value + "&";
    }
  }
  parameters = parameters.substr(0, parameters.length - 1);

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    process.env.REACT_APP_BACKEND + "tests/" + test.id + "?" + parameters,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log("result", result))
    .catch((error) => console.log("error", error));
}
