import { z } from "zod";

export interface FormActionInterface<T> {
  success: boolean;
  errors: z.ZodError<T> | null;
}
