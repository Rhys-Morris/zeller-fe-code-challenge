export const validResponseFixture = {
  listZellerCustomers: {
    items: [
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
    ],
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
