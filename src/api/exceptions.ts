export class ApiKeyNotProvidedException extends Error {
  constructor() {
    super(
      "Missing AWS Api Key - please review documentation on how to provide"
    );
    this.name = "ApiKeyNotProvidedException";
    Object.setPrototypeOf(this, ApiKeyNotProvidedException.prototype);
  }
}

export const SCHEMA_VALIDATION_FAILURE_MESSAGE =
  "Failed to validate response against provided schema - please review veracity";

export class SchemaValidationFailureException extends Error {
  constructor() {
    super(SCHEMA_VALIDATION_FAILURE_MESSAGE);
    this.name = "SchemaValidationFailure";
    Object.setPrototypeOf(this, SchemaValidationFailureException.prototype);
  }
}
