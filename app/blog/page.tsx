// import { Badge } from "@/components/ui/badge"
// import BlogCard from "@/components/blog-card"

// export default function BlogLandingPage() {
//   const tags = ["Logistics", "Energy & Fuel", "Finance & Insurance", "Agri-Export", "Policy & Compliance"]

//   const blogPosts = [
//     {
//       slug: "why-real-time-container-data-changes-everything",
//       title: "Why Real-Time Container Data Changes Everything",
//       excerpt:
//         "From regulators to shipping lines, a single live EDI feed turns disputes into decisions—and pays for itself in weeks.",
//       readTime: "3-min",
//       imageSrc: "/assets/blog-cover.png",
//       imageAlt: "Hex-rail illustration or blurred port photo overlayed with a pulse-line",
//     },
//     {
//       slug: "post-2",
//       title: "Unlocking Efficiency in Agri-Export Supply Chains",
//       excerpt:
//         "Discover how digital solutions are streamlining processes and boosting profitability for agricultural exports.",
//       readTime: "5-min",
//       imageSrc: "/placeholder.svg?height=225&width=400",
//       imageAlt: "Agricultural supply chain",
//     },
//     {
//       slug: "post-3",
//       title: "The Future of Energy Data Compliance",
//       excerpt:
//         "Explore the evolving landscape of energy sector regulations and how data infrastructure ensures adherence.",
//       readTime: "4-min",
//       imageSrc: "/placeholder.svg?height=225&width=400",
//       imageAlt: "Energy data compliance",
//     },
//     {
//       slug: "post-4",
//       title: "Transforming Finance with Multi-Party Data",
//       excerpt:
//         "Learn how shared data platforms are revolutionizing financial transactions and investment opportunities.",
//       readTime: "6-min",
//       imageSrc: "/placeholder.svg?height=225&width=400",
//       imageAlt: "Finance data transformation",
//     },
//     {
//       slug: "post-5",
//       title: "Policy & Compliance: A New Era for Digital Rails",
//       excerpt:
//         "Understand the critical role of policy in fostering a compliant and interoperable digital infrastructure.",
//       readTime: "4-min",
//       imageSrc: "/placeholder.svg?height=225&width=400",
//       imageAlt: "Digital policy and compliance",
//     },
//     {
//       slug: "post-6",
//       title: "Logistics Optimization: The Data-Driven Approach",
//       excerpt:
//         "See how real-time data is enabling unprecedented optimization in logistics and supply chain management.",
//       readTime: "5-min",
//       imageSrc: "/placeholder.svg?height=225&width=400",
//       imageAlt: "Logistics data optimization",
//     },
//   ]

//   return (
//     <div className="container py-12 md:py-24 lg:py-32">
//       <div className="text-center space-y-4 mb-12">
//         <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Rail Grid Insights</h1>
//         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//           Weekly dispatches on how compliant digital rails unlock real-world ROI for regulators, operators and investors
//           across Africa’s key industries.
//         </p>
//         <p className="max-w-3xl mx-auto text-muted-foreground">
//           We don’t publish code dumps; we publish outcomes. Each Friday our team shares one short, actionable read that
//           shows what complete data can do, without drowning you in jargon or giving away proprietary sauce.
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center gap-2 mb-12">
//         {tags.map((tag, index) => (
//           <Badge key={index} variant="secondary" className="px-3 py-1 text-sm cursor-pointer hover:bg-accent">
//             {tag}
//           </Badge>
//         ))}
//       </div>

//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {blogPosts.map((post) => (
//           <BlogCard key={post.slug} {...post} />
//         ))}
//       </div>
//     </div>
//   )
// }



import { Badge } from "@/components/ui/badge"
import BlogCard from "@/components/blog-card"

export default function BlogLandingPage() {
  const tags = ["Logistics", "Energy & Fuel", "Finance & Insurance", "Agri-Export", "Policy & Compliance"]

  const blogPosts = [
    {
      slug: "why-real-time-container-data-changes-everything",
      title: "Why Real-Time Container Data Changes Everything",
      excerpt:
        "From regulators to shipping lines, a single live EDI feed turns disputes into decisions—and pays for itself in weeks.",
      readTime: "3-min",
      imageSrc: "https://images.unsplash.com/photo-1739430630591-9380bdf1c798?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmluYW5jZSUyMCUyNiUyMEluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "Hex-rail illustration or blurred port photo overlayed with a pulse-line",
    },
    {
      slug: "post-2",
      title: "Unlocking Efficiency in Agri-Export Supply Chains",
      excerpt:
        "Discover how digital solutions are streamlining processes and boosting profitability for agricultural exports.",
      readTime: "5-min",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661907005604-cec7ffb6a042?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFncmljdWx0dXJlfGVufDB8fDB8fHww",
      imageAlt: "Agricultural supply chain",
    },
    {
      slug: "post-3",
      title: "The Future of Energy Data Compliance",
      excerpt:
        "Explore the evolving landscape of energy sector regulations and how data infrastructure ensures adherence.",
      readTime: "4-min",
      imageSrc: "https://media.istockphoto.com/id/1407850410/photo/gas-station-work.webp?a=1&b=1&s=612x612&w=0&k=20&c=IdvbNdkb08yKyd7hcrY6ydVFYzXa3Ko1GeyWd9YNfRA=",
      imageAlt: "Energy data compliance",
    },
    {
      slug: "post-4",
      title: "Transforming Finance with Multi-Party Data",
      excerpt:
        "Learn how shared data platforms are revolutionizing financial transactions and investment opportunities.",
      readTime: "6-min",
      imageSrc: "https://media.istockphoto.com/id/2150332096/photo/industrial-data-automation-system-on-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=p6VRSqf7wibc4MQPDMjG-pbJugqB_T6WW-pQxfspraA=",
      imageAlt: "Finance data transformation",
    },
    {
      slug: "post-5",
      title: "Policy & Compliance: A New Era for Digital Rails",
      excerpt:
        "Understand the critical role of policy in fostering a compliant and interoperable digital infrastructure.",
      readTime: "4-min",
      imageSrc: "/placeholder.svg?height=225&width=400",
      imageAlt: "Digital policy and compliance",
    },
    {
      slug: "post-6",
      title: "Logistics Optimization: The Data-Driven Approach",
      excerpt:
        "See how real-time data is enabling unprecedented optimization in logistics and supply chain management.",
      readTime: "5-min",
      imageSrc: "/placeholder.svg?height=225&width=400",
      imageAlt: "Logistics data optimization",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Blog Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-railBlueStart to-railBlueEnd text-white text-center">
        <div className="container space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
            Rail Grid Insights
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Weekly dispatches on how compliant digital rails unlock real-world ROI for regulators, operators and
            investors across Africa’s key industries.
          </p>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-white/90 drop-shadow-sm">
            We don’t publish code dumps; we publish outcomes. Each Friday our team shares one short, actionable read
            that shows what complete data can do, without drowning you in jargon or giving away proprietary sauce.
          </p>
        </div>
      </section>

      {/* Tag Filters Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
        <div className="container text-center">
          <h2 className="sr-only">Blog Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-base cursor-pointer border-railBlueStart text-railBlueStart hover:bg-railBlueStart hover:text-white transition-colors duration-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container">
          <h2 className="sr-only">Latest Blog Posts</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
