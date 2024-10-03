import { useState } from "react";
import { Role } from "./api/customers/schema";
import { CustomerRow } from "./components/customer/CustomerRow";
import { RoleRadios } from "./components/RoleRadios";
import { useCustomers } from "./hooks/useCustomers";
import { titleCase } from "./utils/string";
import "./App.module.css";

function App() {
  const { customersByRole, isError } = useCustomers();
  const [selectedRole, setSelectedRole] = useState<Role>("ADMIN");
  const customers = customersByRole.get(selectedRole) ?? [];

  console.log(customersByRole);

  return (
    <div>
      <div>
        <section>
          <h2>User Types</h2>
          <RoleRadios
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
          />
        </section>
        <section>
          <h2>{titleCase(selectedRole)} Users</h2>
          {customers.map((customer) => (
            <CustomerRow customer={customer} key={customer.id} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
