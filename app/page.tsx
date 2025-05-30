import Link from "next/link"
import {
  Copy, 
  MapPin,
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

const selectedWorks = [
  {
    title: "Unified Hauling Assignment Management System (UAssist)",
    year: "2024 - 2025",
    image: "/code/uassist.png",
    url: "/code/uassist"
  },
  {
    title: "Fleet Management System (FAMOUS)",
    year: "2024 - 2025",
    image: "/code/fms.png",
    url: "/code/famous"
  },
]

export default function Overview() {
  return (
    <section id="overview" className="max-w-5xl">
      <div className="space-y-4 mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Hello! I’m Kiky
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <span className="text-[#ad9c5f]">Software Engineer</span>
            <div className="rounded-lg border px-3 py-2 inline-flex items-center gap-2 text-base lg:text-xl sm:ms-4 mt-3 lg:mt-0 text-black border-neutral-300">
              <MapPin className="size-4 lg:size-6" />
              Indonesia
            </div>
          </div>
        </h1>
        <p className="text-muted-foreground text-lg">
          Software Engineer with 5 years of experience building scalable, cloud-based SaaS applications. Skilled in multiple programming languages and frameworks, passionate about solving complex problems and delivering clean, maintainable code aligned with business goals.
        </p>
        <div className="flex gap-4 pt-2">
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#ad9c5f] text-primary-foreground hover:bg-primary/90 h-12 px-6 py-2"
          >
            About
          </Link>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-6 py-2"
          >
            <Copy />
            Copy mail
          </button>
        </div>
      </div>

      <div className="mb-12">
        <header className="pb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Selected Work</h2>
          <Link
            href="/code"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline px-6 h-auto py-1"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right size-3"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </header>
        <div className="grid lg:grid-cols-2 gap-6">
          {selectedWorks.map((work) => (
            <Link
              href={work.url}
              key={work.title}
              className="block space-y-4"
            >
              <figure>
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                />
              </figure>
              <div className="space-y-2">
                <h5 className="font-bold">{work.title}</h5>
                <div className="text-sm text-muted-foreground">{work.year}</div>
              </div>
            </Link>
          ))}
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
              href="https://cal.com/"
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
  );
}
