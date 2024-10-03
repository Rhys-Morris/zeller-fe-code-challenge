import { useState } from "react";
import { Role } from "./api/customers/schema";
import { CustomerRow } from "./components/customer/CustomerRow";
import { RoleRadios } from "./components/RoleRadios";
import { useCustomers } from "./hooks/useCustomers";
import { titleCase } from "./utils/string";
import styles from "./App.module.css";

function App() {
  const { customersByRole, isError } = useCustomers();
  const [selectedRole, setSelectedRole] = useState<Role>("ADMIN");
  const customers = customersByRole.get(selectedRole) ?? [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionContainer}>
        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>User Types</h2>
          <RoleRadios
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
          />
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>
            {titleCase(selectedRole)} Users
          </h2>
          {customers.map((customer) => (
            <CustomerRow customer={customer} key={customer.id} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
