import { z } from "zod";
import { FormActionInterface } from "./FormActionBase";

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: "Name is requred." })
    .trim()
    .min(2, "Please enter a valid name.")
    .max(50),
  email: z
    .string({ required_error: "Email is requred." })
    .email("Must be a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Please enter a message containing at least 10 characters.")
    .max(500),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;

export default async function SendEmailFormAction(
  values: ContactFormSchemaType
): Promise<FormActionInterface<ContactFormSchemaType>> {
  const contactForm = contactFormSchema.safeParse(values);

  if (!contactForm.success) {
    return {
      success: contactForm.success,
      errors: contactForm.error,
    };
  }

  const url = new URL("https://formspree.io/f/xrbgowvw");

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      Accept: "application/json",
    },
  });

  if (response.status !== 200 && response.status !== 201) {
    throw new Error(
      "Something wrong happened and we were not able to save send contact form data.Something wrong happened and we were not able to save send contact form data."
    );
  }

  return {
    success: contactForm.success,
    errors: null,
  };
}
