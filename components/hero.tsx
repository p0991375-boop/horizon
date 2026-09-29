import { ArrowRight, CalendarDays, Clock, FolderGit2, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { EventPass } from '@/components/event-pass'

const details = [
  { icon: CalendarDays, label: siteConfig.date },
  { icon: Clock, label: siteConfig.time },
  { icon: MapPin, label: siteConfig.location },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-deep pt-32 pb-20 text-white md:pt-40 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-[-10rem] left-1/2 -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-electric/30 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-8rem] bottom-[-12rem] -z-10 size-[28rem] rounded-full bg-electric/20 blur-[100px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-xs tracking-wide text-white/80 uppercase backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-electric opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-electric" />
            </span>
            Beginner-friendly student meetup
          </p>

          <h1 className="mt-6 text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Tech &amp; AI{' '}
            <span className="bg-gradient-to-r from-white via-sky-200 to-electric bg-clip-text text-transparent">
              Student Meetup
            </span>
          </h1>

          <p className="mt-4 text-xl font-medium text-white/85 md:text-2xl">{siteConfig.tagline}</p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {details.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/90"
              >
                <Icon aria-hidden="true" className="size-4 text-electric" />
                {label}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-pretty text-white/70 md:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#register"
              className="group inline-flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-electric/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-electric/40"
            >
              Register Now
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </a>
            <GithubLink />
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-6 delay-150 duration-1000 fill-mode-both">
          <EventPass />
        </div>
      </div>
    </section>
  )
}

function GithubLink() {
  const content = (
    <>
      <FolderGit2 aria-hidden="true" className="size-4 text-electric" />
      <span>Now on GitHub · Explore the project</span>
    </>
  )

  if (!siteConfig.githubUrl) {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-medium text-white/70">
        {content}
      </span>
    )
  }

  return (
    <a
      href={siteConfig.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
    >
      {content}
    </a>
  )
}
