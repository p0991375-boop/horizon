import { Sparkles } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <a href="#top" className="flex items-center gap-2.5 font-semibold text-primary">
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-lg bg-electric text-white"
            >
              <Sparkles className="size-4" />
            </span>
            {siteConfig.name}
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            {siteConfig.date} · {siteConfig.time} · {siteConfig.location}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
