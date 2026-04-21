type SpecTableProps = {
  title: string;
  rows: Array<{
    label: string;
    value: string;
  }>;
};

export function SpecTable({ title, rows }: SpecTableProps) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(8,17,14,0.98),rgba(14,34,27,0.96))] shadow-soft">
      <div className="border-b border-white/10 px-5 py-4 sm:px-6">
        <p className="type-label text-[#87B59D]">{title}</p>
      </div>

      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <tbody>
            {rows.map((row) => (
              <tr
                className="border-b border-white/10 transition-colors hover:bg-white/5 last:border-b-0"
                key={row.label}
              >
                <th className="w-[34%] align-top px-6 py-4 text-left text-sm font-semibold text-white">
                  {row.label}
                </th>
                <td className="px-6 py-4 text-sm leading-6 text-white/68">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-white/10 md:hidden">
        {rows.map((row) => (
          <div className="bg-white/5 px-5 py-4 first:bg-white/8" key={row.label}>
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#87B59D]">
              {row.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-white">{row.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
