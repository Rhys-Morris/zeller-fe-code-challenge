export class ApiKeyNotProvidedException extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "ApiKeyNotProvidedException";
    Object.setPrototypeOf(this, ApiKeyNotProvidedException.prototype);
  }
}
