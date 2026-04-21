import { z } from "zod";

export const productTypeOptions = [
  "Планкен / строганная доска",
  "Имитация бруса",
  "Доска пола",
  "Профиль по чертежу",
  "Несколько позиций"
] as const;

export const inquiryTypeOptions = [
  "Оптовый запрос",
  "Запрос прайса",
  "Обратный звонок"
] as const;

export const inquirySchema = z.object({
  inquiryType: z.enum(inquiryTypeOptions),
  companyName: z
    .string()
    .trim()
    .min(2, "Укажите название компании.")
    .max(120, "Слишком длинное название компании."),
  contactPerson: z
    .string()
    .trim()
    .min(2, "Укажите контактное лицо.")
    .max(100, "Слишком длинное имя."),
  phone: z
    .string()
    .trim()
    .min(7, "Укажите телефон.")
    .max(30, "Слишком длинный телефон."),
  email: z
    .string()
    .trim()
    .email("Укажите корректный email.")
    .max(120, "Слишком длинный email."),
  productType: z.enum(productTypeOptions),
  volume: z.string().trim().max(120, "Слишком длинное значение."),
  dimensions: z.string().trim().max(160, "Слишком длинное значение."),
  comments: z.string().trim().max(1000, "Комментарий слишком длинный."),
  website: z.string().max(0).optional().default("")
});

export type InquiryFormData = z.infer<typeof inquirySchema>;

export const emptyInquiryValues: InquiryFormData = {
  inquiryType: "Оптовый запрос",
  companyName: "",
  contactPerson: "",
  phone: "",
  email: "",
  productType: "Планкен / строганная доска",
  volume: "",
  dimensions: "",
  comments: "",
  website: ""
};
