"use client";

import { useMemo, useState } from "react";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import {
  emptyInquiryValues,
  inquirySchema,
  productTypeOptions,
  type InquiryFormData
} from "@/lib/inquiry";
import { cn } from "@/lib/utils";

type InquiryFormVariant = "inquiry" | "price" | "callback";

type InquiryFormProps = {
  variant?: InquiryFormVariant;
  productDefault?: InquiryFormData["productType"];
  className?: string;
};

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

type FieldErrors = Partial<Record<keyof InquiryFormData, string>>;

const contentByVariant: Record<
  InquiryFormVariant,
  {
    title: string;
    description: string;
    submitLabel: string;
    inquiryType: InquiryFormData["inquiryType"];
    microcopy: string;
  }
> = {
  inquiry: {
    title: "Оптовый запрос",
    description:
      "Заполните форму, чтобы получить ответ по объёму, условиям отгрузки и возможному сроку поставки.",
    submitLabel: "Отправить оптовый запрос",
    inquiryType: "Оптовый запрос",
    microcopy:
      "Чем точнее вы укажете тип продукции, объём и размеры, тем быстрее менеджер подготовит рабочий ответ."
  },
  price: {
    title: "Запрос прайса",
    description:
      "Подходит для стандартной номенклатуры, когда нужно быстро получить ориентир по цене и понять формат дальнейшей работы.",
    submitLabel: "Запросить прайс",
    inquiryType: "Запрос прайса",
    microcopy:
      "Прайс удобнее всего выдавать после понимания категории продукции и примерного объёма закупки."
  },
  callback: {
    title: "Запрос обратного звонка",
    description:
      "Если удобнее обсудить задачу голосом, оставьте контакты и кратко опишите, что требуется рассчитать.",
    submitLabel: "Заказать звонок",
    inquiryType: "Обратный звонок",
    microcopy:
      "Контакты нужны только для связи по вашему B2B-запросу. Форма не используется для розничной рассылки."
  }
};

function getInitialValues(
  variant: InquiryFormVariant,
  productDefault?: InquiryFormData["productType"]
): InquiryFormData {
  return {
    ...emptyInquiryValues,
    inquiryType: contentByVariant[variant].inquiryType,
    productType: productDefault ?? emptyInquiryValues.productType
  };
}

export function InquiryForm({
  variant = "inquiry",
  productDefault,
  className
}: InquiryFormProps) {
  const content = contentByVariant[variant];
  const [values, setValues] = useState<InquiryFormData>(() =>
    getInitialValues(variant, productDefault)
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: ""
  });

  const isCompact = useMemo(() => variant === "callback", [variant]);

  function updateField<K extends keyof InquiryFormData>(field: K, value: InquiryFormData[K]) {
    setValues((current) => ({
      ...current,
      [field]: value
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined
      }));
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = inquirySchema.safeParse(values);

    if (!parsed.success) {
      const nextErrors: FieldErrors = {};

      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof InquiryFormData;
        if (!nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      });

      setErrors(nextErrors);
      setFormState({
        status: "error",
        message: "Проверьте обязательные поля формы."
      });
      return;
    }

    setFormState({ status: "submitting", message: "" });

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(parsed.data)
      });

      const data = (await response.json()) as { success: boolean; message: string };

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Не удалось отправить форму.");
      }

      setFormState({
        status: "success",
        message: data.message
      });
      setErrors({});
      setValues(getInitialValues(variant, productDefault));
    } catch (error) {
      setFormState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Не удалось отправить форму. Попробуйте ещё раз."
      });
    }
  }

  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-ink/8 bg-paper p-6 shadow-panel sm:p-8 lg:p-9",
        className
      )}
    >
      <div className="space-y-3">
        <p className="type-label">{content.title}</p>
        <h3 className="font-serif text-[2rem] leading-[1.04] tracking-heading text-ink sm:text-4xl">
          {content.description}
        </h3>
        <p className="max-w-2xl text-sm leading-6 text-muted">{content.microcopy}</p>
      </div>

      <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          className="hidden"
          name="website"
          onChange={(event) => updateField("website", event.target.value)}
          tabIndex={-1}
          type="text"
          value={values.website}
        />

        <fieldset className="grid gap-5" disabled={formState.status === "submitting"}>
          <legend className="sr-only">Контактные данные и параметры запроса</legend>

          <div className={cn("grid gap-5", isCompact ? "sm:grid-cols-2" : "sm:grid-cols-2")}>
          <FormField error={errors.companyName} label="Компания" required>
            <input
              autoComplete="organization"
              className="field-input"
              name="companyName"
              onChange={(event) => updateField("companyName", event.target.value)}
              placeholder="Название компании"
              value={values.companyName}
            />
          </FormField>

          <FormField error={errors.contactPerson} label="Контактное лицо" required>
            <input
              autoComplete="name"
              className="field-input"
              name="contactPerson"
              onChange={(event) => updateField("contactPerson", event.target.value)}
              placeholder="Имя и должность"
              value={values.contactPerson}
            />
          </FormField>

          <FormField error={errors.phone} label="Телефон" required>
            <input
              autoComplete="tel"
              className="field-input"
              inputMode="tel"
              name="phone"
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="+7 (___) ___-__-__"
              value={values.phone}
            />
          </FormField>

          <FormField error={errors.email} label="Email" required>
            <input
              autoComplete="email"
              className="field-input"
              name="email"
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="mail@company.ru"
              type="email"
              value={values.email}
            />
          </FormField>

          <FormField error={errors.productType} label="Тип продукции" required>
            <select
              className="field-select"
              name="productType"
              onChange={(event) =>
                updateField("productType", event.target.value as InquiryFormData["productType"])
              }
              value={values.productType}
            >
              {productTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            error={errors.volume}
            hint="Например: 20 м³, пробная партия, регулярный объём в месяц."
            label="Объём"
          >
            <input
              className="field-input"
              name="volume"
              onChange={(event) => updateField("volume", event.target.value)}
              placeholder="Примерный объём"
              value={values.volume}
            />
          </FormField>
          </div>

          <FormField
            error={errors.dimensions}
            hint="Укажите толщину, ширину, длину или краткую спецификацию, если они уже известны."
            label="Размеры / спецификация"
          >
            <input
              className="field-input"
              name="dimensions"
              onChange={(event) => updateField("dimensions", event.target.value)}
              placeholder="Например: 20×140×6000"
              value={values.dimensions}
            />
          </FormField>

          <FormField
            error={errors.comments}
            hint="Можно кратко описать задачу, срок, формат отгрузки или особенности нестандартного профиля."
            label="Комментарий"
          >
            <textarea
              className="field-textarea"
              name="comments"
              onChange={(event) => updateField("comments", event.target.value)}
              placeholder="Опишите задачу для менеджера"
              value={values.comments}
            />
          </FormField>
        </fieldset>

        <div className="space-y-4 pt-1">
          <Button
            className="w-full sm:w-auto"
            disabled={formState.status === "submitting"}
            size="lg"
            type="submit"
          >
            {formState.status === "submitting" ? "Отправляем..." : content.submitLabel}
          </Button>

          <div className="rounded-2xl border border-ink/8 bg-white/75 px-4 py-4">
            <p className="text-sm leading-6 text-muted">
              Отправляя форму, вы передаёте контакты только для связи по B2B-запросу.
              Поля проверяются на сервере, а форма защищена скрытым антиспам-полем.
            </p>
          </div>

          {formState.message ? (
            <div
              aria-live="polite"
              className={cn(
                "rounded-2xl border px-4 py-3 text-sm leading-6",
                formState.status === "success"
                  ? "border-accent/20 bg-accent/10 text-ink"
                  : "border-[#A2462D]/20 bg-[#A2462D]/10 text-[#7D311F]"
              )}
            >
              {formState.message}
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
