interface SectionHeaderProps {
  label: string
  count?: string
  className?: string
}

export default function SectionHeader({ label, count, className = '' }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-8 text-xs uppercase tracking-[0.16em] text-muted ${className}`}>
      <span className="whitespace-nowrap">{label}</span>
      <span className="h-px flex-1 bg-line" />
      {count && (
        <span className="whitespace-nowrap normal-case tracking-[0.02em] text-faint">{count}</span>
      )}
    </div>
  )
}
