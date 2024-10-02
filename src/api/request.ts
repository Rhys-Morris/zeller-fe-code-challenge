import { BASE_AWS_GRAPHQL_URL } from "./aws";
import { ApiKeyNotProvidedException } from "./exceptions";

export async function postQuery(query: string) {
  const apiKey = process.env.REACT_APP_AWS_API_KEY;

  if (!apiKey) {
    throw new ApiKeyNotProvidedException();
  }

  const response = fetch(BASE_AWS_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({ query }),
  });
  return (await response).json();
}
