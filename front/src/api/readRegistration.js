import host from "./host";

export async function readRegistration() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${host}/registration/read`, requestOptions);

  return response.json();
}
