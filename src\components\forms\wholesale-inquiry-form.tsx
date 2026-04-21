"use client";

import type { InquiryFormData } from "@/lib/inquiry";
import { InquiryForm } from "@/components/forms/inquiry-form";

type WholesaleInquiryFormProps = {
  productDefault?: InquiryFormData["productType"];
};

export function WholesaleInquiryForm({ productDefault }: WholesaleInquiryFormProps) {
  return <InquiryForm productDefault={productDefault} variant="inquiry" />;
}
