import { useEffect, useState } from "react";
import { Customer, Role, VALID_CUSTOMER_ROLES } from "../api/customers/schema";
import { CustomerService } from "../api/customers/service";

type CustomersByRole = Map<Role, Customer[]>;

// Normally I'd delegate to a library e.g. tanstack-query to manage request state and client caching.
// Since this is a very small toy app with only 5 customers I've opted to keep it basic.
export const useCustomers = () => {
  const [customersByRole, setCustomersByRole] =
    useState<CustomersByRole>(initEmptyRoleMap);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    CustomerService.getCustomers()
      .then((customers) => {
        const byRole = associateCustomersByRole(customers);
        setCustomersByRole(byRole);
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          console.error(e.message, e.stack);
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
