import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

type ContactActionsProps = {
  compact?: boolean;
};

export function ContactActions({ compact = false }: ContactActionsProps) {
  return (
    <div
      aria-label="Быстрые каналы связи"
      className={compact ? "flex flex-wrap gap-3" : "flex flex-wrap gap-3 sm:gap-4"}
      role="group"
    >
      <Button href={`tel:${siteConfig.phoneHref}`} variant="secondary">
        Позвонить
      </Button>
      <Button href={siteConfig.whatsapp} rel="noreferrer" target="_blank" variant="ghost">
        WhatsApp
      </Button>
      <Button href={`mailto:${siteConfig.email}`} variant="ghost">
        Email
      </Button>
    </div>
  );
}
