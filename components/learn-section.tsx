import { Briefcase, Cpu, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const topics = [
  {
    icon: Sparkles,
    title: 'AI Tools',
    text: 'Discover useful AI tools and understand how they can support learning and productivity.',
  },
  {
    icon: Cpu,
    title: 'Technology Skills',
    text: 'Explore essential technology skills every beginner should know to build confidently.',
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    text: 'Understand the career paths in tech and AI, and how to take your first steps toward them.',
  },
]

export function LearnSection() {
  return (
    <section id="learn" aria-labelledby="learn-heading" className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="learn-heading"
            eyebrow="Curriculum"
            title="What You'll Learn"
            description="Three practical focus areas designed to help you get started with confidence."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {topics.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 120} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-xl hover:shadow-primary/10">
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 size-40 rounded-full bg-electric/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="font-mono text-xs text-muted-foreground">{`0${i + 1}`}</span>
                  <span
                    aria-hidden="true"
                    className="mt-6 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-electric"
                  >
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-primary">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
