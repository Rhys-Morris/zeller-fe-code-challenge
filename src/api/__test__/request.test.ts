import { postQuery } from "../request";
import { ApiConfigurationNotProvidedException } from "../exceptions";

const mockFetch = jest.fn();
global.fetch = mockFetch;

const DUMMY_KEY = "DUMMY_KEY";
const DUMMY_ENDPOINT = "DUMMY_ENDPOINT";
const DUMMY_QUERY = "DUMMY_QUERY";

describe("postQuery", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.REACT_APP_AWS_API_KEY = DUMMY_KEY;
    process.env.REACT_APP_AWS_QUERY_ENDPOINT = DUMMY_ENDPOINT;
  });

  it("should throw an exception if API configuration is not provided", async () => {
    delete process.env.REACT_APP_AWS_API_KEY;

    await expect(postQuery("test query")).rejects.toThrow(
      ApiConfigurationNotProvidedException
    );
  });

  it("should make a POST request and return the response JSON", async () => {
    const mockResponse = { data: "response data" };

    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await postQuery(DUMMY_QUERY);

    expect(fetch).toHaveBeenCalledWith(DUMMY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": DUMMY_KEY,
      },
      body: JSON.stringify({ query: DUMMY_QUERY }),
    });
    expect(result).toEqual(mockResponse);
  });

  it("should handle errors from fetch", async () => {
    mockFetch.mockRejectedValueOnce(new Error("BOOM"));

    await expect(postQuery(DUMMY_QUERY)).rejects.toThrow("BOOM");
  });
});
