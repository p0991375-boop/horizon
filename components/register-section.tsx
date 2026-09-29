import { ArrowUpRight, CalendarDays, Clock, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { siteConfig } from '@/lib/site-config'

const details = [
  { icon: CalendarDays, label: 'Date', value: siteConfig.date },
  { icon: Clock, label: 'Time', value: siteConfig.time },
  { icon: MapPin, label: 'Location', value: siteConfig.location },
]

export function RegisterSection() {
  const hasLink = Boolean(siteConfig.registrationUrl)

  return (
    <section id="register" aria-labelledby="register-heading" className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-deep px-6 py-14 text-white shadow-2xl shadow-primary/20 md:px-14 md:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 -z-10 size-96 rounded-full bg-electric/30 blur-[100px]"
            />

            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="font-mono text-xs font-medium tracking-[0.2em] text-electric uppercase">
                  Register
                </p>
                <h2
                  id="register-heading"
                  className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-5xl"
                >
                  Save your spot at the meetup
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                  Join fellow students and beginners for a practical, welcoming introduction to AI
                  tools, technology skills, and career opportunities.
                </p>

                <div className="mt-10">
                  {hasLink ? (
                    <a
                      href={siteConfig.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-electric px-8 py-4 text-base font-semibold text-white shadow-lg shadow-electric/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-electric/40"
                    >
                      Register Now
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    <div className="flex flex-col items-start gap-3">
                      <span
                        aria-disabled="true"
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-electric/60 px-8 py-4 text-base font-semibold text-white/90"
                      >
                        Register Now
                      </span>
                      <p className="text-sm text-white/60">Registration link will be shared soon.</p>
                    </div>
                  )}
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {details.map(({ icon: Icon, label, value }) => (
                  <li
                    key={label}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition-colors hover:border-electric/40 hover:bg-white/[0.08]"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-electric/15 text-electric"
                    >
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] tracking-wider text-white/50 uppercase">{label}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
