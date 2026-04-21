import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
};

export function FormField({
  label,
  hint,
  error,
  required = false,
  children
}: FormFieldProps) {
  return (
    <label className="block space-y-2.5">
      <span className="text-sm font-semibold tracking-[-0.01em] text-ink">
        {label} {required ? <span className="text-bronze">*</span> : null}
      </span>
      {children}
      {error ? (
        <span className="block text-sm text-[#A2462D]">{error}</span>
      ) : hint ? (
        <span className="block text-sm leading-6 text-muted">{hint}</span>
      ) : null}
    </label>
  );
}
