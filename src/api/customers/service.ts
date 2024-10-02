import { postQuery } from "../request";
import { AllCustomersQuery } from "./queries";

export class CustomerService {
  static async getCustomers() {
    const result = postQuery(AllCustomersQuery);
    return result;
  }
}
