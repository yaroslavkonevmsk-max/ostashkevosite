import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";

type InternalLinkItem = {
  title: string;
  description: string;
  href: string;
};

type InternalLinksSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: InternalLinkItem[];
};

export function InternalLinksSection({
  eyebrow = "Смежные разделы",
  title,
  description,
  items
}: InternalLinksSectionProps) {
  return (
    <nav
      aria-label="Смежные разделы сайта"
      className="section-space border-y border-white/10 bg-[linear-gradient(180deg,#08110E,#10211A)]"
    >
      <Container>
        <SectionHeading
          description={description}
          eyebrow={eyebrow}
          title={title}
          tone="inverted"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <Surface className="flex h-full flex-col justify-between p-6" key={item.href} tone="dark">
              <div className="space-y-3">
                <h3 className="type-h3 text-white">{item.title}</h3>
                <p className="text-[0.99rem] leading-7 text-white/68">{item.description}</p>
              </div>
              <div className="mt-6">
                <Link
                  className="text-sm font-semibold text-[#9FD2B5] transition hover:text-white"
                  href={item.href}
                >
                  Перейти в раздел
                </Link>
              </div>
            </Surface>
          ))}
        </div>
      </Container>
    </nav>
  );
}
