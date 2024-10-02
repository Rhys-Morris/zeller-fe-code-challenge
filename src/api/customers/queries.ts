export const AllCustomersQuery = /* GraphQL */ `
  query ListZellerCustomers {
    listZellerCustomers {
      items {
        email
        id
        name
        role
      }
    }
  }
`;
