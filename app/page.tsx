import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-mono font-bold">DevName</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="hover:text-[#ff3e3e] transition-colors">
            About
          </Link>
          <Link href="#experience" className="hover:text-[#ff3e3e] transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-[#ff3e3e] transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-[#ff3e3e] transition-colors">
            Contact
          </Link>
        </nav>
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#121212] border-t border-white/10 z-40">
          <div className="flex justify-around py-3">
            <Link href="#about" className="flex flex-col items-center text-xs">
              <span className="text-[#ff3e3e]">•</span>
              <span>About</span>
            </Link>
            <Link href="#experience" className="flex flex-col items-center text-xs">
              <span className="text-[#ff3e3e]">•</span>
              <span>Experience</span>
            </Link>
            <Link href="#projects" className="flex flex-col items-center text-xs">
              <span className="text-[#ff3e3e]">•</span>
              <span>Projects</span>
            </Link>
            <Link href="#contact" className="flex flex-col items-center text-xs">
              <span className="text-[#ff3e3e]">•</span>
              <span>Contact</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-16 px-4 md:px-6 pb-24 md:pb-16">
        {/* Hero Section */}
        <section className="py-20">
          <h1 className="text-5xl md:text-7xl font-mono mb-6">DevName;</h1>
          <ul className="space-y-2 text-lg mb-8">
            <li className="flex items-start">
              <span className="text-[#ff3e3e] mr-2">•</span> is <span className="text-[#ff3e3e] mx-2">passionate</span>{" "}
              about building scalable software solutions
            </li>
            <li className="flex items-start">
              <span className="text-[#ff3e3e] mr-2">•</span> is <span className="text-[#ff3e3e] mx-2">skilled</span> in
              modern web technologies
            </li>
            <li className="flex items-start">
              <span className="text-[#ff3e3e] mr-2">•</span> is <span className="text-[#ff3e3e] mx-2">experienced</span>{" "}
              in full-stack development
            </li>
            <li className="flex items-start">
              <span className="text-[#ff3e3e] mr-2">•</span> is <span className="text-[#ff3e3e] mx-2">open</span> to new
              opportunities
            </li>
          </ul>
          <div className="flex gap-4">
            <Button className="bg-[#ff3e3e] hover:bg-[#ff3e3e]/90 text-white">
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10">
              View Resume
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 border-t border-white/10">
          <h2 className="text-3xl font-mono mb-8">About</h2>
          <p className="text-lg text-white/80 max-w-3xl">
            I'm a software engineer specializing in building high-performance web applications and distributed systems.
            With a strong foundation in computer science and a passion for clean, efficient code, I create solutions
            that scale.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 border-t border-white/10">
          <h2 className="text-3xl font-mono mb-8">Experience</h2>
          <div className="space-y-12">
            <div className="p-6 bg-white/5 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <span className="text-[#ff3e3e]">2021 - Present</span>
              </div>
              <h4 className="text-lg text-white/80 mb-4">TechFusion Inc.</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start">
                  <span className="text-[#ff3e3e] mr-2">•</span> Led the development of a real-time data processing
                  pipeline handling 10M+ events daily
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff3e3e] mr-2">•</span> Optimized database queries resulting in 40% reduction
                  in API response times
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff3e3e] mr-2">•</span> Mentored junior developers and conducted code reviews
                  to maintain high code quality
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white/5 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Software Developer</h3>
                <span className="text-[#ff3e3e]">2018 - 2021</span>
              </div>
              <h4 className="text-lg text-white/80 mb-4">DataSphere Solutions</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start">
                  <span className="text-[#ff3e3e] mr-2">•</span> Developed and maintained microservices architecture for
                  e-commerce platform
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff3e3e] mr-2">•</span> Implemented CI/CD pipelines reducing deployment time by
                  60%
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff3e3e] mr-2">•</span> Collaborated with product team to deliver features that
                  increased user engagement by 25%
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 border-t border-white/10">
          <h2 className="text-3xl font-mono mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="ReactiveDB"
              description="A high-performance reactive database with real-time subscriptions"
              tags={["TypeScript", "Node.js", "WebSockets"]}
            />
            <ProjectCard
              title="DevMetrics"
              description="Developer productivity analytics platform with Git integration"
              tags={["React", "GraphQL", "PostgreSQL"]}
            />
            <ProjectCard
              title="CloudScale"
              description="Auto-scaling infrastructure management tool for cloud environments"
              tags={["Go", "Kubernetes", "AWS"]}
            />
            <ProjectCard
              title="CodeSync"
              description="Real-time collaborative code editor with syntax highlighting"
              tags={["JavaScript", "Socket.io", "MongoDB"]}
            />
            <ProjectCard
              title="DataViz"
              description="Interactive data visualization library for complex datasets"
              tags={["D3.js", "SVG", "Canvas"]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 border-t border-white/10">
          <h2 className="text-3xl font-mono mb-8">Contact</h2>
          <p className="text-lg text-white/80 mb-8">Feel free to reach out for collaborations or just a chat.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="mailto:email@example.com"
              className="flex items-center gap-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="container mx-auto py-8 border-t border-white/10 text-center text-white/60">
        <p>© {new Date().getFullYear()} DevName. All rights reserved.</p>
      </footer>
    </div>
  )
}

