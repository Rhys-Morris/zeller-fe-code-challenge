import { ZodType } from "zod";
import { SchemaValidationFailureException } from "./exceptions";

export function validateApiResponse<T>(
  schema: ZodType<T>,
  response: unknown
): T {
  const { success, data } = schema.safeParse(response);

  if (success) {
    return data;
  } else {
    throw new SchemaValidationFailureException();
  }
}
