import { BrainCircuit, MessagesSquare, MonitorPlay, Presentation } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const agenda = [
  { icon: Presentation, label: 'Short Talks' },
  { icon: MonitorPlay, label: 'Live Demo' },
  { icon: MessagesSquare, label: 'Interactive Q&A' },
]

export function EventPass() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden="true"
        className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-electric/70 via-white/10 to-transparent opacity-80"
      />
      <div className="relative rounded-[1.75rem] bg-navy-deep/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-8">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-electric uppercase">Event Pass</p>
            <p className="mt-2 text-lg font-semibold">{siteConfig.name}</p>
          </div>
          <span
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-xl bg-electric/15 text-electric ring-1 ring-electric/30"
          >
            <BrainCircuit className="size-5" />
          </span>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-5 text-sm">
          <div>
            <dt className="font-mono text-[11px] tracking-wider text-white/50 uppercase">Date</dt>
            <dd className="mt-1 font-medium">
              <time dateTime={siteConfig.dateTime}>{siteConfig.date}</time>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] tracking-wider text-white/50 uppercase">Time</dt>
            <dd className="mt-1 font-medium">{siteConfig.time}</dd>
          </div>
          <div className="col-span-2">
            <dt className="font-mono text-[11px] tracking-wider text-white/50 uppercase">Location</dt>
            <dd className="mt-1 font-medium">{siteConfig.location}</dd>
          </div>
        </dl>

        <div
          aria-hidden="true"
          className="my-7 border-t border-dashed border-white/15"
        />

        <p className="font-mono text-[11px] tracking-wider text-white/50 uppercase">On the agenda</p>
        <ul className="mt-3 flex flex-col gap-2.5">
          {agenda.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm transition-colors hover:border-electric/40 hover:bg-electric/10"
            >
              <span className="font-mono text-xs text-white/40">{`0${i + 1}`}</span>
              <Icon aria-hidden="true" className="size-4 text-electric" />
              <span className="font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
