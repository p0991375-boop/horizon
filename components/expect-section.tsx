import { MessagesSquare, MonitorPlay, Presentation } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const formats = [
  {
    icon: Presentation,
    title: 'Short Talks',
    text: 'Clear, jargon-free sessions on AI, core technology skills, and where they can take your career.',
  },
  {
    icon: MonitorPlay,
    title: 'Live Demo',
    text: 'Watch practical AI tools in action and see how they fit into everyday learning and work.',
  },
  {
    icon: MessagesSquare,
    title: 'Interactive Q&A',
    text: 'Bring your questions. Get honest, practical answers in an open and welcoming discussion.',
  },
]

export function ExpectSection() {
  return (
    <section id="expect" aria-labelledby="expect-heading" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="expect-heading"
            eyebrow="The format"
            title="What to Expect"
            description="Two hours, three formats, built to keep things practical and interactive."
          />
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent md:block"
          />
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {formats.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative">
              <Reveal delay={i * 120} className="flex flex-col items-center text-center">
                <span
                  aria-hidden="true"
                  className="relative flex size-14 items-center justify-center rounded-full border border-electric/30 bg-background text-electric shadow-md shadow-electric/10 transition-transform duration-300 hover:scale-110"
                >
                  <Icon className="size-6" />
                </span>
                <p className="mt-6 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  {`Step 0${i + 1}`}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}
