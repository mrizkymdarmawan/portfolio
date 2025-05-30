import {
  FolderCode,
  Figma,
  Clapperboard,
  LayoutDashboard,
  Mail, 
  Phone,
  TabletSmartphone,
  Container,
  DatabaseBackup,
  Bot
} from "lucide-react"

export default function About() {
  return (
    <section id="about" className="max-w-5xl">
      <div className="mb-12 mx-auto max-w-3xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold leading-tight mb-2">Hello! I’m Kiky</h1>
          <h2 className="text-3xl font-bold text-[#ad9c5f] mb-6">Software Engineer</h2>
          <p className="text-muted-foreground mb-4">
            Software Engineer with 5 years of experience building scalable, cloud-based SaaS applications. Skilled in multiple programming languages and frameworks, passionate about solving complex problems and delivering clean, maintainable code aligned with business goals.
          </p>
          {/* <p className="text-muted-foreground">
            test abc
          </p> */}
        </div>

        <div className="w-full md:w-64 flex-shrink-0">
          <img
            src="/professional.jpeg"
            alt="Toby"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>

      <div className="mb-12">
        <header className="pb-4">
          <h2 className="text-2xl font-semibold">Services</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center flex-shrink-0 border border-primary/30 rounded-full bg-[#f2f0e7] size-12">
              <FolderCode className="size-6" />
            </span>
            <div className="flex-1">
              <span>Backend Development</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center flex-shrink-0 border border-primary/30 rounded-full bg-[#f2f0e7] size-12">
              <LayoutDashboard className="size-6" />
            </span>
            <div className="flex-1">
              <span>Frontend Development</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center flex-shrink-0 border border-primary/30 rounded-full bg-[#f2f0e7] size-12">
              <Figma className="size-6" />
            </span>
            <div className="flex-1">
              <span>Product Design</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center flex-shrink-0 border border-primary/30 rounded-full bg-[#f2f0e7] size-12">
              <Clapperboard className="size-6" />
            </span>
            <div className="flex-1">
              <span>Animate</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center flex-shrink-0 border border-primary/30 rounded-full bg-[#f2f0e7] size-12">
              <TabletSmartphone className="size-6" />
            </span>
            <div className="flex-1">
              <span>Mobile Development</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center flex-shrink-0 border border-primary/30 rounded-full bg-[#f2f0e7] size-12">
              <Container className="size-6" />
            </span>
            <div className="flex-1">
              <span>DevOps</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center flex-shrink-0 border border-primary/30 rounded-full bg-[#f2f0e7] size-12">
              <DatabaseBackup className="size-6" />
            </span>
            <div className="flex-1">
              <span>Data Analyst</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center flex-shrink-0 border border-primary/30 rounded-full bg-[#f2f0e7] size-12">
              <Bot className="size-6" />
            </span>
            <div className="flex-1">
              <span>AI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="border rounded-lg flex flex-col p-8 max-w-5xl mx-auto">
          <header className="pb-8 space-y-2">
            <h2 className="text-2xl font-bold">Got questions?</h2>
            <p className="text-muted-foreground">
              I’m always excited to collaborate on innovative and exciting projects!
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center flex-shrink-0 border border-primary/30 rounded-full bg-[#f2f0e7] size-14">
                <Mail className="size-6" />
              </span>
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="text-muted-foreground">E-mail</span>
                <a href="mailto:mrizkymdarmawan@gmail.com" className="text-base font-semibold break-words max-w-full">
                  mrizkymdarmawan@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center flex-shrink-0 border border-primary/30 rounded-full bg-[#f2f0e7] size-14">
                <Phone className="size-6" />
              </span>
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="text-muted-foreground">Phone</span>
                <a href="tel:+6285186062667" className="text-base font-semibold break-words max-w-full">
                  +62 851 860 62667
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-start lg:justify-start">
            <a
              href="https://wa.me/6285186062667"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input border-2 bg-background hover:bg-accent hover:text-accent-foreground h-12 px-6 py-2 w-full lg:w-auto max-w-xs"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
