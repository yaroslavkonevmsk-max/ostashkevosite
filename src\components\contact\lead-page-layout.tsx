import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type LeadPageLayoutProps = {
  aside: ReactNode;
  form: ReactNode;
};

export function LeadPageLayout({ aside, form }: LeadPageLayoutProps) {
  return (
    <section className="section-space">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <aside className="space-y-6">{aside}</aside>
          <div>{form}</div>
        </div>
      </Container>
    </section>
  );
}
