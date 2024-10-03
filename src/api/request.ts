import { ApiConfigurationNotProvidedException } from "./exceptions";

export async function postQuery(query: string) {
  const apiKey = process.env.REACT_APP_AWS_API_KEY;
  const apiEndpoint = process.env.REACT_APP_AWS_QUERY_ENDPOINT;

  if (!apiKey || !apiEndpoint) {
    throw new ApiConfigurationNotProvidedException();
  }

  const response = fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({ query }),
  });
  return (await response).json();
}
