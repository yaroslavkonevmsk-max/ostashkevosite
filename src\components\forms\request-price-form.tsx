"use client";

import type { InquiryFormData } from "@/lib/inquiry";
import { InquiryForm } from "@/components/forms/inquiry-form";

type RequestPriceFormProps = {
  productDefault?: InquiryFormData["productType"];
};

export function RequestPriceForm({ productDefault }: RequestPriceFormProps) {
  return <InquiryForm productDefault={productDefault} variant="price" />;
}
