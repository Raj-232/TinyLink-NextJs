import { z } from "zod";

export const CODE_REGEX = /^[A-Za-z0-9]{6,8}$/;

export const createLinkSchema = z.object({
  url: z
    .string({ required_error: "URL is required" })
    .url("Enter a valid URL"),
  code: z
    .string()
    .optional()
    .transform((val) => (val?.trim() ? val.trim() : undefined))
    .refine(
      (val) => !val || CODE_REGEX.test(val),
      "Codes must be 6-8 letters or numbers"
    ),
});

