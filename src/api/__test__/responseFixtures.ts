import { Customer, CustomerResponse } from "../customers/schema";

export const validCustomersFixture: Customer[] = [
  {
    id: "1",
    name: "Darth Vader",
    email: "darth@thedarkside.com",
    role: "ADMIN",
  },
  {
    id: "2",
    name: "Luke Skywalker",
    email: "luke@thelightside.com",
    role: "MANAGER",
  },
  {
    id: "3",
    name: "Kylo Ren",
    email: "kylo@cantdecide.com",
    role: "ADMIN",
  },
];

export const validResponseFixture: CustomerResponse = {
  listZellerCustomers: {
    items: validCustomersFixture,
  },
};

export const invalidResponseFixtureAbsentField = {
  listZellerCustomers: {
    items: [
      {
        id: "1",
        name: "Batman",
        email: "brucewayne@waynefoundation.com",
      },
    ],
  },
};

export const invalidResponseFixtureNonValidRole = {
  listZellerCustomers: {
    items: [
      {
        id: "1",
        name: "Batman",
        email: "brucewayne@waynefoundation.com",
        role: "DIFFERS",
      },
    ],
  },
};

export const invalidResponseFixture = {
  somethingDifferentWhoops: "boom",
};
