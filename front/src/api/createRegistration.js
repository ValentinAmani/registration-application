import host from "./host";

export async function createRegistration({
  firstName,
  name,
  phoneNumber,
  emailAddress,
}) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: firstName,
      name: name,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
    }),
  };

  const response = await fetch(`${host}/registration/create`, requestOptions);

  return response.json();
}
