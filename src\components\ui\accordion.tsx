type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y divide-ink/8 overflow-hidden rounded-[1.75rem] border border-ink/8 bg-paper shadow-panel">
      {items.map((item, index) => (
        <details className="group" key={item.title} open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 sm:px-8">
            <span className="text-lg font-semibold tracking-[-0.02em] text-ink sm:text-xl">
              {item.title}
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white text-lg text-muted transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            <p className="max-w-3xl text-base leading-7 text-muted">{item.content}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
