import { useEffect, useState } from "react";
import { Customer, Role, VALID_CUSTOMER_ROLES } from "../api/customers/schema";
import { CustomerService } from "../api/customers/service";

type CustomersByRole = Map<Role, Customer[]>;

export const useCustomers = () => {
  const [customersByRole, setCustomersByRole] =
    useState<CustomersByRole>(initEmptyRoleMap);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    CustomerService.getCustomers()
      .then((customers) =>
        setCustomersByRole(associateCustomersByRole(customers))
      )
      .catch((e: unknown) => {
        if (e instanceof Error) {
          console.error(e.message);
        }
        setIsError(true);
      });
  }, []);

  return {
    customersByRole,
    isError,
  };
};

function associateCustomersByRole(customers: Customer[]): CustomersByRole {
  return customers.reduce<CustomersByRole>((map, customer) => {
    const currentList = map.get(customer.role) ?? [];
    currentList.push(customer);
    map.set(customer.role, currentList);
    return map;
  }, initEmptyRoleMap());
}

function initEmptyRoleMap() {
  return VALID_CUSTOMER_ROLES.reduce<CustomersByRole>((map, role) => {
    map.set(role, []);
    return map;
  }, new Map());
}
