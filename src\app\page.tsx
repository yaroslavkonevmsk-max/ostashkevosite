import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ContactMethodsPanel } from "@/components/contact/contact-methods-panel";
import { StickyStorySection } from "@/components/home/sticky-story-section";
import { FactoryPhotoGrid } from "@/components/media/factory-photo-grid";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { Surface } from "@/components/ui/surface";

const heroMetrics = [
  {
    label: "Базовая цена завода",
    value: "от 35 000 ₽/м³",
    note: "Стандартные профили, без НДС, со склада завода."
  },
  {
    label: "Рабочая влажность",
    value: "10–12%",
    note: "Камерная сушка для стабильной геометрии и предсказуемой поставки."
  },
  {
    label: "Основной сорт",
    value: "A–AB",
    note: "Понятный стандарт отбора по популярной строганной номенклатуре."
  }
] as const;

const advantages = [
  {
    eyebrow: "Геометрия партии",
    title: "Размер держится стабильно и не превращается в спор на объекте.",
    description:
      "После замены фрез выполняется калибровка. Для оптового клиента это означает не красивую формулировку, а повторяемую геометрию и меньше потерь на монтаже.",
    icon: "01"
  },
  {
    eyebrow: "Сушка",
    title: "Сухая строганная продукция с рабочей влажностью 10–12%.",
    description:
      "Параметр вынесен в ядро сайта, потому что именно он влияет на стабильность материала в фасадных, отделочных и напольных решениях.",
    icon: "02"
  },
  {
    eyebrow: "Логистика",
    title: "Партии подготавливаются под самовывоз, фуры и контейнерную загрузку.",
    description:
      "Упаковка, стяжка, плёнка и подготовка к погрузке встроены в производственный процесс, а не решаются в последний момент.",
    icon: "03"
  },
  {
    eyebrow: "Нестандарт",
    title: "Если типовая позиция не подходит, завод считает профиль по чертежу.",
    description:
      "Нестандартное производство вынесено в отдельный сценарий, чтобы клиент сразу понимал ограничения по размерам и логику расчёта.",
    icon: "04"
  }
] as const;

const categories = [
  {
    title: "Планкен и строганная доска",
    description:
      "Популярная сухая номенклатура для фасадных, отделочных и универсальных строительных задач.",
    specs: "20 / 30 / 40 мм · 120 / 130 / 140 / 150 мм · 3000 / 6000 мм",
    href: "/catalog/planken"
  },
  {
    title: "Имитация бруса",
    description:
      "Решение для дилеров, строительных компаний и подрядчиков, которым важны влажность, сорт и аккуратная упаковка.",
    specs: "20 мм · 140 / 150 мм · 3000 / 6000 мм",
    href: "/catalog/imitation-timber"
  },
  {
    title: "Доска пола",
    description:
      "Позиции для объектных поставок и регулярных закупок со стабильной геометрией и рабочей влажностью.",
    specs: "30 / 40 мм · 100 / 120 / 140 мм · 3000 / 6000 мм",
    href: "/catalog/floor-board"
  },
  {
    title: "Профиль по чертежу",
    description:
      "Отдельный производственный сценарий для нестандартных изделий с расчётом по чертежу или ТЗ.",
    specs: "от 18 мм · до 150 мм · 2000 / 3000 / 6000 мм",
    href: "/custom-profile"
  }
] as const;

const qualityPoints = [
  "Влажность продукции: 10–12%",
  "Основной сорт по популярным позициям: A–AB",
  "Живые не выпадающие сучки допускаются до 25 мм",
  "Смоляной карман допускается длиной до 30 мм",
  "Калибровка после каждой замены фрез",
  "Претензии по качеству принимаются до погрузки"
] as const;

const trustReasons = [
  {
    title: "Завод, а не складской посредник",
    description:
      "Сайт строится вокруг реального производства: оборудование, сушильная база, профилирование, упаковка и погрузка. Это сразу меняет восприятие поставщика."
  },
  {
    title: "Продукция под регулярный B2B-ритм",
    description:
      "Для дилера и подрядчика важна не только цена, но и повторяемость партии. Здесь акцент сделан именно на стабильности и предсказуемости.",
  },
  {
    title: "Документы и логистика проговорены заранее",
    description:
      "ТТН, счёт-фактура, фитосанитарные документы при необходимости и понятная схема погрузки снижают напряжение уже на этапе первого касания."
  },
  {
    title: "Коммерческий путь короткий и взрослый",
    description:
      "Сайт не прячет клиента в маркетинговый шум. Прайс, КП, чертёж и прямые контакты отдела продаж доступны как рабочие сценарии."
  }
] as const;

const faqItems = [
  {
    title: "Какая продукция подходит для регулярных B2B-поставок?",
    content:
      "Основной акцент сделан на стандартных профилях: планкен, строганная доска, имитация бруса и доска пола. Эти позиции проще всего закупать повторно и считать по объёму."
  },
  {
    title: "Можно ли заказать профиль по своему чертежу?",
    content:
      "Да. Нестандартный профиль рассчитывается отдельно по чертежу или подробному описанию. Базовые ограничения: толщина от 18 мм, ширина до 150 мм, длины 2000 / 3000 / 6000 мм."
  },
  {
    title: "Какие условия по упаковке и самовывозу?",
    content:
      "Пакеты формируются на прокладках, стягиваются лентами, закрываются плёнкой с 5 сторон и подготавливаются к самовывозу, загрузке в фуры и 40-футовые контейнеры."
  },
  {
    title: "Какие документы можно получить по поставке?",
    content:
      "Базово предоставляются ТТН и комплект закрывающих документов. При работе с НДС возможна счёт-фактура. При необходимости оформляется фитосанитарный сертификат."
  }
] as const;

const galleryItems = [
  {
    title: "Производственная зона",
    note: "Четырёхсторонние станки, проход партии через строгание и профилирование, зона калибровки и реальный рабочий ритм цеха."
  },
  {
    title: "Склад готовой продукции",
    note: "Готовые пакеты по номенклатуре, длинам и партиям, собранные в логике заводской отгрузки."
  },
  {
    title: "Профили и сечения",
    note: "Крупные планы лицевой поверхности, профиля и состояния геометрии до отгрузки клиенту."
  },
  {
    title: "Упаковка и погрузка",
    note: "Подкладки, стяжка, плёнка и подготовка партии к самовывозу, фурам и контейнерам."
  }
] as const;

export default function HomePage() {
  return (
    <>
      <section className="section-space relative overflow-hidden">
        <Container>
          <div className="hero-shell px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <video
              aria-hidden="true"
              autoPlay
              className="absolute inset-0 h-full w-full object-cover opacity-36"
              loop
              muted
              playsInline
              poster="/sjinn-conifer-forest-keyframe.png"
              preload="auto"
            >
              <source src="/videos/hero-forest-woodworking-loop.mp4" type="video/mp4" />
            </video>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,7,0.44),rgba(4,8,7,0.72))]"
            />
            <div className="relative z-10 grid gap-8 xl:grid-cols-[1.18fr_0.82fr] xl:items-stretch">
              <div className="rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(33,71,60,0.34),transparent_18rem),linear-gradient(160deg,rgba(10,22,18,0.98),rgba(6,12,10,0.98))] px-6 py-8 shadow-[0_32px_72px_-42px_rgba(8,17,14,0.82)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="max-w-4xl space-y-8">
                  <div className="space-y-4">
                    <p className="editorial-kicker">Завод строганной продукции для оптовых клиентов</p>
                    <h1 className="type-display max-w-5xl text-white">
                      Сухая строганная продукция из хвои от производителя, которому не нужно доказывать, что он умеет выпускать партии.
                    </h1>
                    <p className="max-w-3xl text-[1.02rem] leading-8 text-white/72 sm:text-[1.15rem]">
                      Работаем с дилерами, строительными компаниями, подрядчиками и
                      производственными заказчиками. Поставляем стандартные профили,
                      считаем нестандарт по чертежу, держим рабочую влажность 10–12%
                      и подготавливаем партии к реальной B2B-отгрузке.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button href="/request-quote" size="lg">
                      Получить КП
                    </Button>
                    <Button href="/request-price" size="lg" variant="secondary">
                      Запросить прайс
                    </Button>
                    <Button href="/custom-profile" size="lg" variant="ghost">
                      Отправить чертёж
                    </Button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="trust-strip">
                      <p className="editorial-kicker">Формат работы</p>
                      <p className="mt-2 text-base font-semibold text-ink">Опт · Проекты · Повторные партии</p>
                    </div>
                    <div className="trust-strip">
                      <p className="editorial-kicker">Производство</p>
                      <p className="mt-2 text-base font-semibold text-ink">Сушка · Строгание · Профилирование</p>
                    </div>
                    <div className="trust-strip">
                      <p className="editorial-kicker">Отгрузка</p>
                      <p className="mt-2 text-base font-semibold text-ink">Самовывоз · Фуры · 40HC</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-dark-panel micro-grid flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div className="space-y-4">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Ключевые показатели поставщика
                  </p>
                  <h2 className="font-serif text-[2rem] leading-[1.02] tracking-heading text-white sm:text-[2.5rem]">
                    Заводская подача должна убеждать цифрами и реальным контуром поставки.
                  </h2>
                </div>

                <div className="grid gap-4">
                  {heroMetrics.map((metric) => (
                    <StatCard
                      className="border-white/10 bg-white/5 text-white shadow-none"
                      key={metric.label}
                      label={metric.label}
                      note={metric.note}
                      tone="inverted"
                      value={metric.value}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#08110E,#11231C)] pb-12 pt-2 sm:pb-20 lg:pb-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {advantages.map((item) => (
              <FeatureCard
                description={item.description}
                eyebrow={item.eyebrow}
                icon={item.icon}
                key={item.title}
                tone="dark"
                title={item.title}
              />
            ))}
          </div>
        </Container>
      </section>

      <StickyStorySection />

      <section className="section-space border-y border-ink/8 bg-paper/70">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-end">
            <SectionHeading
              eyebrow="Номенклатура завода"
              title="Продукция подана как рабочая B2B-линейка, а не как набор карточек для розницы."
              description="На первом уровне клиент должен увидеть не только категории, но и структуру закупки: что идёт в типовую поставку, где начинается нестандарт и куда переходить за расчётом."
            />

            <div className="rounded-[1.7rem] border border-ink/8 bg-white/86 p-6 shadow-panel sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="editorial-kicker">Типовая номенклатура</p>
                  <p className="mt-2 text-sm leading-6 text-ink">
                    Планкен, строганная доска, имитация бруса и доска пола.
                  </p>
                </div>
                <div>
                  <p className="editorial-kicker">Нестандарт</p>
                  <p className="mt-2 text-sm leading-6 text-ink">
                    Отдельный расчёт профиля по чертежу и техническому заданию.
                  </p>
                </div>
                <div>
                  <p className="editorial-kicker">Коммерческий путь</p>
                  <p className="mt-2 text-sm leading-6 text-ink">
                    Прайс, КП, обратный звонок и прямой контакт с отделом продаж.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <Surface
                as="article"
                className="group relative overflow-hidden flex h-full flex-col justify-between p-7 transition duration-200 hover:-translate-y-1 hover:shadow-soft sm:p-8"
                key={category.title}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(169,130,74,0.1),rgba(255,255,255,0))]"
                />
                <div className="relative space-y-5">
                  <p className="editorial-kicker">Категория</p>
                  <div className="space-y-3">
                    <h2 className="font-serif text-[1.85rem] leading-[1.03] tracking-heading text-ink sm:text-[2.15rem]">
                      {category.title}
                    </h2>
                    <p className="type-body">{category.description}</p>
                  </div>
                  <div className="trust-strip">
                    <p className="editorial-kicker">Размерный ряд</p>
                    <p className="mt-2 text-sm leading-6 text-ink">{category.specs}</p>
                  </div>
                </div>
                <div className="relative mt-7">
                  <Button href={category.href} variant="secondary">
                    Открыть раздел
                  </Button>
                </div>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <Surface className="p-8 sm:p-10 lg:p-12">
              <p className="editorial-kicker">Производственные возможности</p>
              <h2 className="mt-4 font-serif text-[2.2rem] leading-[0.98] tracking-heading text-ink sm:text-[3.2rem]">
                Полный цикл производства должен читаться как аргумент для закупки, а не как абстрактная справка о компании.
              </h2>
              <p className="mt-5 type-body-lg max-w-2xl">
                Для оптового клиента критично понять, что завод сам управляет сушкой,
                строганием, профилированием, упаковкой и погрузкой. Именно поэтому
                производственный слой на сайте подан как часть продаж, а не как
                декоративный раздел “о нас”.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="trust-strip">
                  <p className="editorial-kicker">Сушильная база</p>
                  <p className="mt-2 text-base font-semibold text-ink">2 × 75 м³ и 2 × 30 м³</p>
                </div>
                <div className="trust-strip">
                  <p className="editorial-kicker">Погрузка</p>
                  <p className="mt-2 text-base font-semibold text-ink">Фуры и 40-футовые контейнеры</p>
                </div>
              </div>
            </Surface>

            <Surface tone="dark" className="micro-grid p-8 sm:p-10 lg:p-12">
              <div className="grid gap-4 sm:grid-cols-2">
                {qualityPoints.map((item) => (
                  <div
                    className="rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-6 text-white/82"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Surface>
          </div>
        </Container>
      </section>

      <section className="section-space bg-paper/70">
        <Container>
          <SectionHeading
            eyebrow="Визуальные доказательства"
            title="Фотоматериалы должны показывать заводской порядок, масштаб и готовность партии к отгрузке."
            description="Реальный B2B-клиент покупает не настроение, а уверенность в поставщике. Поэтому фотоблок на главной должен работать как часть доверительного контура."
          />
          <FactoryPhotoGrid items={[...galleryItems]} />
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Почему заводу можно доверять"
              title="Сайт должен выглядеть как ресурс компании, которая уже умеет работать с wholesale-клиентами и не боится жёсткой квалификации."
              description="Здесь решает не декоративный маркетинг, а сочетание коммерческой ясности, производственной фактуры и взрослой подачи условий поставки."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {trustReasons.map((item) => (
                <FeatureCard
                  description={item.description}
                  key={item.title}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-paper/70">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
            <SectionHeading
              eyebrow="FAQ для закупщика"
              title="Закрываем не декоративные вопросы, а реальные возражения по поставке, нестандарту и отгрузке."
              description="Эта зона поддерживает и SEO, и конверсию: клиент получает конкретные ответы до звонка или запроса КП."
            />
            <div>
              <Accordion items={faqItems.map((item) => ({ ...item }))} />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <Surface tone="dark" className="micro-grid p-8 sm:p-10 lg:p-12">
              <SectionHeading
                eyebrow="Следующий шаг"
                title="Запросите прайс, получите коммерческое предложение или отправьте чертёж напрямую в отдел продаж."
                description="Финальный блок должен завершать сайт не общими словами, а ясным переходом в рабочий B2B-сценарий."
                tone="inverted"
                actions={
                  <>
                    <Button href="/request-quote" variant="secondary">
                      Получить КП
                    </Button>
                    <Button href="/request-price">
                      Запросить прайс
                    </Button>
                    <Button href="/custom-profile" variant="ghost">
                      Отправить чертёж
                    </Button>
                  </>
                }
              />

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <StatCard
                  className="border-white/10 bg-white/5 text-white shadow-none"
                  label="Телефон"
                  note="Для быстрых согласований по объёму и срокам."
                  tone="inverted"
                  value="+7 (900) 000-00-00"
                />
                <StatCard
                  className="border-white/10 bg-white/5 text-white shadow-none"
                  label="Email"
                  note="Для прайсов, КП, спецификаций и реквизитов."
                  tone="inverted"
                  value="sales@factorytimber.ru"
                />
                <StatCard
                  className="border-white/10 bg-white/5 text-white shadow-none"
                  label="WhatsApp"
                  note="Для срочных уточнений по наличию и отгрузке."
                  tone="inverted"
                  value="оперативный канал"
                />
              </div>
            </Surface>

            <ContactMethodsPanel
              description="Если клиент не готов заполнять большую форму, рядом остаётся прямой и быстрый путь в отдел продаж."
              title="Связаться напрямую"
              tone="dark"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
