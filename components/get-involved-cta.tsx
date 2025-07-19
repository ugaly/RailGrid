import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GetInvolvedCTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Involved?</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Join us in building the future of compliant digital solutions.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-center mt-8">
          <Link href="/contact?type=pilot">
            <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Start a Pilot
            </Button>
          </Link>
          <a href="mailto:partnerships@railgrid.com" className="inline-flex">
            <Button
              variant="outline"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Partner with Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
