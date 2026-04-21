"use client";

import type { InquiryFormData } from "@/lib/inquiry";
import { InquiryForm } from "@/components/forms/inquiry-form";

type RequestCallbackFormProps = {
  productDefault?: InquiryFormData["productType"];
};

export function RequestCallbackForm({ productDefault }: RequestCallbackFormProps) {
  return <InquiryForm productDefault={productDefault} variant="callback" />;
}
