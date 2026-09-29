import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { LearnSection } from '@/components/learn-section'
import { ExpectSection } from '@/components/expect-section'
import { RegisterSection } from '@/components/register-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <LearnSection />
        <ExpectSection />
        <RegisterSection />
      </main>
      <SiteFooter />
    </>
  )
}
