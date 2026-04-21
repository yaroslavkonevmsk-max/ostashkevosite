export const siteConfig = {
  name: "Завод строганной продукции",
  legalName: "Завод строганной продукции",
  siteUrl: "https://www.factorytimber.ru",
  description:
    "B2B-поставки строганной продукции из хвои от производителя: камерная сушка 10–12%, сорт A–AB, стабильная геометрия, заводская упаковка, самовывоз и расчёт профиля по чертежу.",
  phone: "+7 (900) 000-00-00",
  phoneHref: "+79000000000",
  email: "sales@factorytimber.ru",
  whatsapp: "https://wa.me/79000000000",
  region: "Москва и Московская область",
  country: "RU",
  navigation: [
    { label: "Каталог", href: "/catalog" },
    { label: "По чертежу", href: "/custom-profile" },
    { label: "Производство", href: "/production" },
    { label: "Контакты", href: "/contacts" }
  ]
} as const;
