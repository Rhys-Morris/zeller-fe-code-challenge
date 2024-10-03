// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

export function silenceExpectedConsoleError(error: string) {
  const originalError = console.error.bind(console.error);
  console.error = (msg) =>
    !msg.toString().includes(error) && originalError(msg);
}

silenceExpectedConsoleError(
  "Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`"
);
