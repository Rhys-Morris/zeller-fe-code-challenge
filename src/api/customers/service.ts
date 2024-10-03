import { postQuery } from "../request";
import { validateApiResponse } from "../schemaValidation";
import { AllCustomersQuery } from "./queries";
import { Customer, CustomerResponseSchema } from "./schema";

export class CustomerService {
  static async getCustomers(): Promise<Customer[]> {
    const result = await postQuery(AllCustomersQuery);
    console.log("RESULT", result);
    return validateApiResponse(CustomerResponseSchema, result.data)
      .listZellerCustomers.items;
  }
}
