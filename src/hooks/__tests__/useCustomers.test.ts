import { renderHook, waitFor } from "@testing-library/react";
import { CustomerService } from "../../api/customers/service";
import {
  SchemaValidationFailureException,
  SCHEMA_VALIDATION_FAILURE_MESSAGE,
} from "../../api/exceptions";
import { validCustomersFixture } from "../../api/__test__/responseFixtures";
import { silenceExpectedConsoleError } from "../../setupTests";
import { useCustomers } from "../useCustomers";

const MOCKED_CUSTOMERS = validCustomersFixture;

describe("useCustomers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should set customersByRole correctly when data is successfully fetched", async () => {
    jest
      .spyOn(CustomerService, "getCustomers")
      .mockResolvedValue(MOCKED_CUSTOMERS);

    const expectedCustomersByRole = new Map([
      ["ADMIN", MOCKED_CUSTOMERS.filter((c) => c.role === "ADMIN")],
      ["MANAGER", MOCKED_CUSTOMERS.filter((c) => c.role === "MANAGER")],
    ]);

    const { result } = renderHook(() => useCustomers());

    await waitFor(() => {
      expect(result.current.customersByRole).toEqual(expectedCustomersByRole);
    });

    await waitFor(() => {
      expect(result.current.isError).toBe(false);
    });
  });

  it("should set isError to true when data fetching fails", async () => {
    silenceExpectedConsoleError(SCHEMA_VALIDATION_FAILURE_MESSAGE);

    jest
      .spyOn(CustomerService, "getCustomers")
      .mockRejectedValue(new SchemaValidationFailureException());

    const expectedCustomersByRole = new Map([
      ["ADMIN", []],
      ["MANAGER", []],
    ]);

    const { result } = await renderHook(() => useCustomers());

    await waitFor(() => {
      expect(result.current.customersByRole).toEqual(expectedCustomersByRole);
    });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
  });
});
