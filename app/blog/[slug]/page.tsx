import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import NewsletterSignupDialog from "@/components/newsletter-signup-dialog"

// Define props for the page component to receive dynamic slug
interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return [
    {
      slug: "why-real-time-container-data-changes-everything",
    },
  ]
}


export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real app, you'd fetch post data based on params.slug
  // For this example, we'll use the hardcoded post data
  const post = {
    slug: "why-real-time-container-data-changes-everything",
    title: "Why Real-Time Container Data Changes Everything",
    subtitle:
      "From regulators to shipping lines, a single live EDI feed turns disputes into decisions—and pays for itself in weeks.",
    author: "Mohammed Saleh",
    estimatedReadTime: "3 min",
    coverImage: "https://images.unsplash.com/photo-1739430630591-9380bdf1c798?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmluYW5jZSUyMCUyNiUyMEluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    coverImageAlt: "Hex-rail illustration or blurred port photo overlayed with a pulse-line",
    content: `
      ### The Problem We All Pretend Isn’t There
      Paper gate receipts + overnight CSV uploads mean that the true location of a container can
      lag **up to 48 hours** behind reality.
      Result? Detention disputes, blind spots for regulators, and zero chance of automation.

      ### One Rail, Many Winners
      **Regulator** – live TEU count per depot = instant policy insight.
      **Shipping Line** – 30 % fewer detention queries; billing cycle in hours, not days.
      **ICD Operator** – single click release to line; no midnight phone calls.
      **Importer / Forwarder** – “box-is-cleared” WhatsApp ping that works without an app.

      > **Early Pilot Result**
      > Two Dar es Salaam depots & one global line cut claim-resolution time from **72 h → 6 h** in the first month.

      ### What’s Next?
      Nation-wide onboarding, AI anomaly flags and public API sandbox.
      If you’re a depot, line or regulator who wants in, hit **pilot@railgrid.tz** – subject line
      *“EDI Next” *.
    `,
  }

  // Check if the requested slug matches the hardcoded post
  if (params.slug !== post.slug) {
    // In a real app, you'd render a 404 page or redirect
    return (
      <div className="container py-12 md:py-24 lg:py-32 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Post Not Found</h1>
        <p className="mt-4 text-lg text-muted-foreground">The blog post you are looking for does not exist.</p>
        <Link href="/blog" className="mt-8 inline-flex">
          <Button>Go to Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Blog Post Header Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-railBlueStart to-railBlueEnd text-white text-center">
        
        <div className="container max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-md">{post.subtitle}</p>
          <div className="text-base text-white/90 drop-shadow-sm">
            By <span className="font-semibold">{post.author}</span> &bull; {post.estimatedReadTime} read
          </div>
        </div>
      </section>

      {/* Cover Image Section */}
      <section className="w-full py-8 bg-background">
        <div className="container max-w-5xl mx-auto">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.coverImageAlt}
            width={1200}
            height={675}
            className="w-full h-auto rounded-lg object-cover shadow-xl"
            priority
          />
        </div>
      </section>

      {/* Blog Content Section - "Paper-like" */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
        <article className="container max-w-3xl mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-lg shadow-lg border border-gray-200">
          <div
            className="prose prose-lg mx-auto dark:prose-invert
            prose-p:mb-4 prose-p:leading-relaxed
            prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-2xl prose-h3:font-bold prose-h3:text-foreground
            prose-blockquote:border-l-4 prose-blockquote:border-railBlueStart prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
            prose-strong:font-semibold prose-a:text-railBlueStart hover:prose-a:underline"
          >
            {/* Render content dynamically, converting markdown-like headings/bold/blockquote */}
            {post.content.split("\n").map((line, index) => {
              if (line.startsWith("### ")) {
                return <h3 key={index}>{line.substring(4)}</h3>
              }
              // Handle bold text within paragraphs
              const boldRegex = /\*\*(.*?)\*\*/g
              const processedLine = line.replace(boldRegex, "<strong>$1</strong>")

              if (processedLine.startsWith("> ")) {
                return <blockquote key={index}>{processedLine.substring(2)}</blockquote>
              }
              if (processedLine.trim() === "") {
                return <br key={index} />
              }
              return <p key={index} dangerouslySetInnerHTML={{ __html: processedLine }} />
            })}
          </div>
        </article>
      </section>

      {/* CTAs at bottom of post */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact?type=pilot">
            <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Start a Pilot
            </Button>
          </Link>
          <NewsletterSignupDialog>
            <Button
              variant="outline"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get Weekly Insights
            </Button>
          </NewsletterSignupDialog>
        </div>
      </section>
    </div>
  )
}
