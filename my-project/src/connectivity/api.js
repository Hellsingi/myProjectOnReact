export async function login(username, password) {
  const url = "There need url";

  const requestConfig = {
    method: "POST",
    mode: "cors",
    header: {
      "Content-Type": "aplication/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  };

  const response = await fetch(url, requestConfig);

  const data = response.json();

  if(response.status === 200) {
      return data;
  }

  // throw to be implemented soon)
}
