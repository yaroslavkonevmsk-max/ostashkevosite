import { Container } from "@/components/ui/container";

const storyPoints = [
  {
    index: "01",
    eyebrow: "Сушка и влажность",
    title: "Камерная сушка и контроль влажности держат материал в рабочем состоянии ещё до отгрузки.",
    description:
      "В storytelling-блоке первым идёт именно этот этап, потому что для B2B-клиента влажность — это не абстрактное качество, а основа стабильной геометрии, повторяемости партии и спокойной работы на объекте.",
    accent: "Рабочая влажность 10–12% и предсказуемое поведение древесины в монтаже."
  },
  {
    index: "02",
    eyebrow: "Геометрия и калибровка",
    title: "Точный размер и калибровка превращают строганную продукцию в надёжную поставку, а не в компромисс.",
    description:
      "Здесь акцент на том, что партия держит форму не за счёт рекламных обещаний, а за счёт технологической дисциплины: стабильной обработки, контроля сечения и калибровки после смены инструмента.",
    accent: "Стабильная толщина, ровная лицевая поверхность и повторяемое сечение по партии."
  },
  {
    index: "03",
    eyebrow: "Упаковка и самовывоз",
    title: "Упаковка и подготовка к самовывозу показывают, что завод думает не только о выпуске, но и о реальной логистике.",
    description:
      "Пакет должен быть аккуратно собран, стянут, защищён и готов к погрузке без хаоса. Для закупщика это важный маркер взрослого поставщика, который понимает ответственность за партию до момента отъезда со склада.",
    accent: "Партии собраны под фуры, контейнеры и плановый вывоз со склада производителя."
  },
  {
    index: "04",
    eyebrow: "Профиль по чертежу",
    title: "Нестандартное изготовление по чертежу даёт заводу право говорить с рынком как с производственной площадкой, а не как с посредником.",
    description:
      "Финальная точка секции объясняет, что сайт умеет вести клиента не только по стандартной номенклатуре. Если задача выходит за рамки типового профиля, производитель может перейти в технический диалог и считать изделие по ТЗ.",
    accent: "Расчёт по чертежу, согласование ограничений и подготовка партии под конкретную задачу."
  }
] as const;

export function StickyStorySection() {
  return (
    <section
      aria-labelledby="industrial-story-title"
      className="section-space bg-[linear-gradient(180deg,#07100D,#0F2019_44%,#132821)]"
    >
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr] xl:items-end">
          <div className="space-y-4">
            <p className="editorial-kicker text-white/52">Производственная история</p>
            <h2
              className="font-serif text-[2.2rem] leading-[0.98] tracking-heading text-white sm:text-[3rem] lg:text-[3.7rem]"
              id="industrial-story-title"
            >
              Современная B2B-подача должна показывать не просто материал, а ход производства от
              леса до готовой партии.
            </h2>
          </div>
          <p className="max-w-3xl text-[1rem] leading-8 text-white/70 sm:text-[1.05rem]">
            Этот блок работает как спокойный industrial storytelling: видео остаётся в поле зрения,
            а рядом последовательно раскрываются ключевые аргументы, которые реально влияют на
            доверие закупщика.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
          <div className="lg:hidden">
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(160deg,rgba(7,16,13,0.98),rgba(11,24,19,0.96))] shadow-[0_32px_72px_-46px_rgba(0,0,0,0.82)]">
              <div className="relative aspect-[4/5]">
                <video
                  aria-describedby="industrial-story-mobile-note"
                  className="h-full w-full object-cover"
                  controls={false}
                  loop
                  muted
                  playsInline
                  poster="/sjinn-conifer-forest-keyframe.png"
                  preload="metadata"
                  autoPlay
                >
                  <source src="/videos/hero-forest-woodworking-loop.mp4" type="video/mp4" />
                </video>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,7,0.08),rgba(4,8,7,0.5))]"
                />
              </div>
              <div className="border-t border-white/10 px-5 py-4">
                <p className="text-sm leading-6 text-white/68" id="industrial-story-mobile-note">
                  Видео показывает реальную производственную фактуру: хвойный лес, обработку,
                  готовую доску, упаковку и складскую логику отгрузки.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(7,16,13,0.98),rgba(11,24,19,0.96))] shadow-[0_40px_90px_-54px_rgba(0,0,0,0.86)]">
                <div className="relative aspect-[4/5] min-h-[42rem]">
                  <video
                    aria-describedby="industrial-story-desktop-note"
                    autoPlay
                    className="h-full w-full object-cover"
                    controls={false}
                    loop
                    muted
                    playsInline
                    poster="/sjinn-conifer-forest-keyframe.png"
                    preload="metadata"
                  >
                    <source src="/videos/hero-forest-woodworking-loop.mp4" type="video/mp4" />
                  </video>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,7,0.12),rgba(4,8,7,0.58))]"
                  />
                  <div className="absolute inset-x-0 bottom-0 space-y-3 px-6 pb-6">
                    <p className="editorial-kicker text-white/55">Industrial storytelling</p>
                    <p
                      className="max-w-md text-sm leading-6 text-white/70"
                      id="industrial-story-desktop-note"
                    >
                      Без лишней анимации и трендовых эффектов: спокойный фон, реальная фактура
                      материала и производственный ритм, который поддерживает доверие к бренду.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ol className="space-y-6 lg:space-y-10">
            {storyPoints.map((point) => (
              <li className="list-none" key={point.index}>
                <article className="flex min-h-[26rem] items-center lg:min-h-[39rem]">
                  <div className="w-full rounded-[1.9rem] border border-white/10 bg-[linear-gradient(160deg,rgba(8,18,14,0.96),rgba(13,27,21,0.94))] p-7 shadow-[0_28px_64px_-44px_rgba(0,0,0,0.76)] sm:p-8 lg:p-10">
                    <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-[#3C6A57]/38 bg-[#183227] text-[0.86rem] font-semibold tracking-[0.18em] text-[#B9D5C8]">
                        {point.index}
                      </div>
                      <div className="space-y-5">
                        <div className="space-y-3">
                          <p className="editorial-kicker text-[#B7D0C2]">{point.eyebrow}</p>
                          <h3 className="font-serif text-[1.75rem] leading-[1.03] tracking-heading text-white sm:text-[2.15rem]">
                            {point.title}
                          </h3>
                        </div>
                        <p className="max-w-3xl text-[0.98rem] leading-8 text-white/72 sm:text-[1.02rem]">
                          {point.description}
                        </p>
                        <div className="rounded-[1.35rem] border border-[#3C6A57]/28 bg-[#12261E] px-5 py-4">
                          <p className="text-sm leading-6 text-[#D4E4DC]">{point.accent}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
