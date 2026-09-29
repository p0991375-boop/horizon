'use client'

import { useEffect, useState } from 'react'
import { Menu, Sparkles, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, siteConfig } from '@/lib/site-config'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-border bg-background/90 text-foreground shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-transparent text-white',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-lg bg-electric text-white shadow-md shadow-electric/30"
          >
            <Sparkles className="size-4" />
          </span>
          <span className="text-sm md:text-base">{siteConfig.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  solid
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white/75 hover:text-white',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#register"
            className="hidden rounded-full bg-electric px-4 py-2 text-sm font-semibold text-white shadow-md shadow-electric/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-electric/35 sm:inline-flex"
          >
            Register Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex size-10 items-center justify-center rounded-full md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="flex justify-center rounded-full bg-electric px-4 py-2.5 text-sm font-semibold text-white"
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
