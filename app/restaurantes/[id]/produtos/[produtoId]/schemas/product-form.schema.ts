import { z } from "zod";

export const productSchema = z.object({
  size: z.string().min(1, "Escolha um tamanho"),
  accompaniments: z
    .array(z.string())
    .min(1, "Escolha pelo menos 1 acompanhamento")
    .max(2, "Escolha no máximo 2 acompanhamentos"),
  extras: z.array(z.string()).max(2, "Escolha no máximo 2 extras").optional(),
  cutlery: z.string().min(1, "Escolha um talher"),
  drinks: z.record(z.number()).optional(),
  observation: z.string().max(200, "Máximo de 200 caracteres").optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;
