import { ZodType } from "zod";
import { SchemaValidationFailureException } from "./exceptions";

export function validateApiResponse<T>(
  schema: ZodType<T>,
  response: unknown
): T {
  const { success, error, data } = schema.safeParse(response);

  if (success) {
    return data;
  } else {
    console.error("Could not validate ", error.errors);
    throw new SchemaValidationFailureException();
  }
}
