import Link from "next/link";

import { Container } from "@/components/ui/container";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Хлебные крошки"
      className="border-b border-white/10 bg-[rgba(8,17,14,0.94)]"
    >
      <Container>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 py-4 text-sm text-white/58">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li className="flex items-center gap-2" key={`${item.label}-${index}`}>
                {item.href && !isLast ? (
                  <Link className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "font-medium text-white" : undefined}>
                    {item.label}
                  </span>
                )}
                {!isLast ? <span aria-hidden="true">/</span> : null}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
