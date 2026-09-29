import { Clock, GraduationCap, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const highlights = [
  { icon: GraduationCap, title: 'Beginner-friendly', text: 'No prior experience needed' },
  { icon: Users, title: 'For students', text: 'College students & beginners' },
  { icon: Clock, title: '2 focused hours', text: 'Talks, demo and Q&A' },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="About the Event"
            align="left"
          />
          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              The Tech &amp; AI Student Meetup is a beginner-friendly gathering for college students
              and anyone just starting out in technology and artificial intelligence.
            </p>
            <p>
              Through short talks, a live demo, and an open Q&amp;A, you&apos;ll get a clear, practical
              look at the tools and skills that matter today, and the career paths they can open up.
            </p>
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 100}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-muted p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:shadow-lg hover:shadow-primary/5 sm:flex-col sm:items-start lg:flex-row lg:items-center">
                  <span
                    aria-hidden="true"
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary">{title}</p>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
