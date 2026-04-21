import { Surface } from "@/components/ui/surface";

type ProofItem = {
  title: string;
  description: string;
};

type ProofGridProps = {
  items: ProofItem[];
  columns?: 2 | 3 | 4;
};

const columnMap = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4"
} as const;

export function ProofGrid({ items, columns = 4 }: ProofGridProps) {
  return (
    <div className={`grid gap-4 ${columnMap[columns]}`}>
      {items.map((item) => (
        <Surface
          as="article"
          className="relative overflow-hidden p-6 before:absolute before:inset-x-0 before:top-0 before:h-16 before:bg-[linear-gradient(180deg,rgba(34,92,70,0.24),rgba(255,255,255,0))] before:content-['']"
          key={item.title}
          tone="dark"
        >
          <p className="relative text-sm font-semibold tracking-[-0.01em] text-white">{item.title}</p>
          <p className="mt-3 text-sm leading-6 text-white/68">{item.description}</p>
        </Surface>
      ))}
    </div>
  );
}
