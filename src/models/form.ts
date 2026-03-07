import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(1, "El nombre es requerido"),
    email: z.email("Correo no permitido").min(1, "El correo es obligatorio"),
    password: z.string().min(1, "La contraseña tiene que tener 6 caracteres"),
    confirmPassword: z
      .string()
      .min(1, "La confirmación tiene que tener 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
export type FormValues = z.infer<typeof formSchema>;
