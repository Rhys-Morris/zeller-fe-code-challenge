import { z } from "zod";

export const VALID_CUSTOMER_ROLES = ["ADMIN", "MANAGER"] as const;

const CustomerSchema = z.object({
  email: z.string().email(),
  id: z.string(),
  name: z.string(),
  role: z.enum(VALID_CUSTOMER_ROLES),
});

export const CustomerResponseSchema = z.object({
  listZellerCustomers: z.object({
    items: z.array(CustomerSchema),
  }),
});

export type CustomerResponse = z.infer<typeof CustomerResponseSchema>;
export type Customer = z.infer<typeof CustomerSchema>;
export type Role = (typeof VALID_CUSTOMER_ROLES)[number];
