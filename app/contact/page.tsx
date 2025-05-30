import {
  Mail, 
  Phone
} from "lucide-react"

export default function Contact() {
  return (
    <section id="overview" className="max-w-5xl">
      <div className="mt-12 mb-12">
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
