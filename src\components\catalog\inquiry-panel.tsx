import { ContactMethodsPanel } from "@/components/contact/contact-methods-panel";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";

type InquiryPanelProps = {
  title: string;
  description: string;
  compact?: boolean;
};

export function InquiryPanel({
  title,
  description,
  compact = false
}: InquiryPanelProps) {
  return (
    <Surface
      as="section"
      tone="dark"
      className={compact ? "micro-grid p-6 sm:p-8" : "micro-grid p-8 sm:p-10 lg:p-12"}
    >
      <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
        <div className="space-y-6">
          <p className="editorial-kicker text-white/55">Отдел продаж производителя</p>
          <div className="space-y-4">
            <h2 className="font-serif text-[2.2rem] leading-[0.98] tracking-heading text-white sm:text-[3rem]">
              {title}
            </h2>
            <p className="max-w-2xl text-[1.02rem] leading-8 text-white/72">{description}</p>
          </div>
          <div className="grid max-w-3xl gap-3 sm:grid-cols-3">
            <Button className="w-full justify-center" href="/request-price" variant="secondary">
              Запросить прайс
            </Button>
            <Button className="w-full justify-center" href="/request-quote">
              Получить КП
            </Button>
            <Button className="w-full justify-center" href="/custom-profile" variant="ghost">
              Отправить чертёж
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                Влажность
              </p>
              <p className="mt-2 font-serif text-2xl tracking-heading text-white">10–12%</p>
            </div>
            <div className="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                Основной сорт
              </p>
              <p className="mt-2 font-serif text-2xl tracking-heading text-white">A–AB</p>
            </div>
            <div className="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                Отгрузка
              </p>
              <p className="mt-2 font-serif text-2xl tracking-heading text-white">Фуры / 40HC</p>
            </div>
          </div>
        </div>

        <ContactMethodsPanel
          compact
          description="Если нужно быстро обсудить партию, удобнее использовать прямые каналы связи. Это особенно полезно для срочных запросов по объёму, наличию и сроку готовности."
          title="Связаться с отделом продаж"
          tone="dark"
        />
      </div>
    </Surface>
  );
}
