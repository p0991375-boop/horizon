import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
  align?: 'center' | 'left'
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className="font-mono text-xs font-medium tracking-[0.2em] text-electric uppercase">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-balance text-primary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
