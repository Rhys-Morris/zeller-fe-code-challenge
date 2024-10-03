import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomerService } from "../api/customers/service";
import { validCustomersFixture } from "../api/__test__/responseFixtures";
import App from "../App";

const adminCustomerCount = validCustomersFixture.filter(
  (customer) => customer.role === "ADMIN"
).length;
const managerCustomerCount = validCustomersFixture.filter(
  (customer) => customer.role === "MANAGER"
).length;

describe("<App/>", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render and load customers", async () => {
    setup();

    await waitFor(() => {
      expect(screen.getAllByTestId("customerRow").length).toBe(
        adminCustomerCount
      );
    });
  });

  it("should switch between customer lists when radio is clicked", async () => {
    setup();

    await userEvent.click(screen.getByLabelText("Manager"));

    await waitFor(() => {
      expect(screen.getAllByTestId("customerRow").length).toBe(
        managerCustomerCount
      );
    });

    await userEvent.click(screen.getByLabelText("Admin"));

    await waitFor(() => {
      expect(screen.getAllByTestId("customerRow").length).toBe(
        adminCustomerCount
      );
    });
  });

  it("should switch wording of list header based on selected role", async () => {
    setup();

    expect(screen.getByText("Admin Users")).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText("Manager"));

    expect(screen.getByText("Manager Users")).toBeInTheDocument();
  });
});

function setup() {
  const spy = jest.spyOn(CustomerService, "getCustomers");
  spy.mockResolvedValue(validCustomersFixture);

  renderComponent();

  expect(spy).toHaveBeenCalledTimes(1);
}

function renderComponent() {
  render(<App />);
}
