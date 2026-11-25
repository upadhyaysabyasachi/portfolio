import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import CertificationsAwards from '@/components/CertificationsAwards'
import Projects from '@/components/Projects'
import Ideas from '@/components/Ideas'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero
        imageSrc="/images/hero-image.jpg"
        imageAlt="Sabyasachi Upadhyay"
      />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CertificationsAwards />
      <Ideas />
      <Contact />
      <Footer />
    </main>
  )
}

