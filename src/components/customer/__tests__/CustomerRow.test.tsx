import { render, screen } from "@testing-library/react";
import { Customer } from "../../../api/customers/schema";
import { titleCase } from "../../../utils/string";
import { CustomerRow, UNKNOWN_USER_CHAR } from "../CustomerRow";

describe("<CustomerRow/>", () => {
  it("should use first letter as avatar initial when present", () => {
    render(<CustomerRow customer={customer()} />);

    expect(screen.getByText(customer().name[0])).toBeInTheDocument();
  });

  it("should default to defined unknown character when name empty", () => {
    render(<CustomerRow customer={customer({ name: "" })} />);

    expect(screen.getByText(UNKNOWN_USER_CHAR)).toBeInTheDocument();
  });

  it("should render role and name", () => {
    const testCustomer = customer();
    render(<CustomerRow customer={testCustomer} />);

    expect(screen.getByText(testCustomer.name)).toBeInTheDocument();
    expect(screen.getByText(titleCase(testCustomer.role))).toBeInTheDocument();
  });
});

function customer(overrides: Partial<Customer> = {}): Customer {
  return {
    name: "Bob",
    id: "1",
    role: "ADMIN",
    email: "email",
    ...overrides,
  };
}

export {};
