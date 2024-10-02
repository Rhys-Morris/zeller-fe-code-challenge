import { CustomerResponseSchema } from "../customers/schema";
import { SCHEMA_VALIDATION_FAILURE_MESSAGE } from "../exceptions";
import { validateApiResponse } from "../schemaValidation";
import {
  invalidResponseFixture,
  invalidResponseFixtureAbsentField,
  invalidResponseFixtureNonValidRole,
  validResponseFixture,
} from "./responseFixtures";

describe("api validation", () => {
  it("should error when missing required fields", () => {
    expect(() =>
      validateApiResponse(
        CustomerResponseSchema,
        invalidResponseFixtureAbsentField
      )
    ).toThrow(SCHEMA_VALIDATION_FAILURE_MESSAGE);
  });

  it("should error when role not in valid set", () => {
    expect(() =>
      validateApiResponse(
        CustomerResponseSchema,
        invalidResponseFixtureNonValidRole
      )
    ).toThrow(SCHEMA_VALIDATION_FAILURE_MESSAGE);
  });

  it("should error when schema is invalid", () => {
    expect(() =>
      validateApiResponse(CustomerResponseSchema, invalidResponseFixture)
    ).toThrow(SCHEMA_VALIDATION_FAILURE_MESSAGE);
  });

  it("should return response when valid", () => {
    expect(
      validateApiResponse(CustomerResponseSchema, validResponseFixture)
    ).toEqual(validResponseFixture);
  });
});
