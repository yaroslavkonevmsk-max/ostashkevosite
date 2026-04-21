import { contactMethods } from "@/lib/contact";

import { ContactMethodCard } from "@/components/contact/contact-method-card";
import { ContactActions } from "@/components/forms/contact-actions";
import { Surface } from "@/components/ui/surface";

type ContactMethodsPanelProps = {
  title?: string;
  description?: string;
  tone?: "default" | "dark";
  compact?: boolean;
};

export function ContactMethodsPanel({
  title = "Быстрые контакты",
  description,
  tone = "default",
  compact = false
}: ContactMethodsPanelProps) {
  const isDark = tone === "dark";

  return (
    <Surface
      className={compact ? "p-6 sm:p-8" : "p-8 sm:p-10 lg:p-12"}
      tone="dark"
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="type-label text-white/55">{title}</p>
          {description ? <p className="text-sm leading-6 text-white/72">{description}</p> : null}
        </div>

        <div className="grid gap-4">
          {contactMethods.map((method) => (
            <ContactMethodCard
              description={method.description}
              href={method.href}
              key={method.label}
              label={method.label}
              tone={isDark ? "dark" : "default"}
              value={method.value}
            />
          ))}
        </div>

        <div className="pt-1">
          <ContactActions compact />
        </div>
      </div>
    </Surface>
  );
}
