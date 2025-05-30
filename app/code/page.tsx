import Link from "next/link"
import {
  Mail, 
  Phone,
} from "lucide-react"

const codes = [
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
  {
    title: "Electronic Office (E - Office)",
    year: "2024 - 2025",
    image: "/code/eoffice.png",
    url: "/code/eoffice"
  },
]

export default function Code() {
  return (
    <section id="overview" className="max-w-5xl">
      <div className="mb-12">
        <header className="pb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Codes</h2>
        </header>
        <div className="grid lg:grid-cols-2 gap-6">
          {codes.map((work) => (
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
  )
}
