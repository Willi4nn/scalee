export function SectionBadge({
  color,
  textColor,
  label,
}: {
  color: string;
  textColor: string;
  label: string;
}) {
  return (
    <h3
      className={`flex items-center justify-start gap-2.5 font-mono text-xs font-bold tracking-widest uppercase sm:justify-center ${textColor}`}
    >
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {label}
    </h3>
  );
}
