import { siteConfig } from "@/lib/site-config";

export const contactMethods = [
  {
    label: "Телефон",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
    description: "Для быстрого согласования объёма, сроков и формата отгрузки."
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Для прайсов, КП, реквизитов и отправки спецификаций."
  },
  {
    label: "WhatsApp",
    value: "Оперативный канал связи",
    href: siteConfig.whatsapp,
    description: "Для срочных уточнений по наличию, размерам и готовности партии."
  }
] as const;

export const leadScenarioHints = [
  {
    title: "Запрос прайса",
    description: "Если нужен быстрый ориентир по стандартной номенклатуре."
  },
  {
    title: "Оптовый запрос",
    description: "Если важны объём, спецификация, сроки и формат отгрузки."
  },
  {
    title: "Обратный звонок",
    description: "Если удобнее быстро обсудить задачу голосом."
  },
  {
    title: "Профиль по чертежу",
    description: "Если партия нестандартная и требует расчёта по ТЗ."
  }
] as const;
