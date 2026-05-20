import { Header } from "@/components/header"
import { AosProvider } from "@/components/aos-provider"
import { Hero } from "@/components/hero"
import { ProfilePhoto } from "@/components/profile-photo"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MouseGlow } from "@/components/mouse-glow"
import { ParticlesBackground } from "@/components/particles-background"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <MouseGlow />
      <AosProvider />
      <Header />
      <main>
        <Hero />
        <ProfilePhoto />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
