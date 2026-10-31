import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'
import { BottomNav } from './components/layout/BottomNav'
import { Footer } from './components/layout/Footer'
import { MobileHeader } from './components/layout/MobileHeader'
import { Sidebar } from './components/layout/Sidebar'
import { TabletHeader } from './components/layout/TabletHeader'
import { About } from './components/sections/About'
import { AiAutomation } from './components/sections/AiAutomation'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Framework } from './components/sections/Framework'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { navItems } from './data/navigation'
import { useActiveSection } from './hooks/useActiveSection'

const sectionIds = navItems.map((item) => item.id)

export default function App() {
  const active = useActiveSection(sectionIds)

  return (
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-ink px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Sidebar active={active} />
      <TabletHeader active={active} />
      <MobileHeader />
      <main id="main" className="pb-24 md:pb-0 lg:pl-72">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12 xl:px-14">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Framework />
          <Projects />
          <AiAutomation />
          <Contact />
          <Footer />
        </div>
      </main>
      <BottomNav active={active} />
    </MotionConfig>
    </LazyMotion>
  )
}
