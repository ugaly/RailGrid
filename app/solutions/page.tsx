// export default function SolutionsPage() {
//   return (
//     <div className="container py-12 md:py-24 lg:py-32 text-center">
//       <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Solutions</h1>
//       <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
//         Discover how Rail Grid is fueling innovation through compliant, multi-party data infrastructure across various
//         sectors.
//       </p>
//       <div className="mt-8 p-6 bg-muted rounded-lg">
//         <p className="text-lg text-muted-foreground">
//           Detailed solutions coming soon! In the meantime, feel free to explore our blog or contact us directly.
//         </p>
//       </div>
//     </div>
//   )
// }


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, DollarSign, Factory, Leaf, Lightbulb, ShieldCheck, Truck, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function SolutionsPage() {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-railBlueStart" />,
      title: "Efficiency Gains",
      description: "Streamline operations and reduce manual overhead with automated data flows.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-railBlueStart" />,
      title: "Enhanced Compliance",
      description: "Meet regulatory standards effortlessly with built-in compliance features.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-railBlueStart" />,
      title: "Accelerated Investment",
      description: "Unlock new investment opportunities through transparent and verifiable data.",
    },
    {
      icon: <Factory className="h-8 w-8 text-railBlueStart" />,
      title: "Economic Growth",
      description: "Contribute to broader economic development by fostering digital trust.",
    },
    {
      icon: <Users className="h-8 w-8 text-railBlueStart" />,
      title: "Multi-Party ROI",
      description: "Ensure shared benefits and value creation across all stakeholders.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-railBlueStart" />,
      title: "Speed to Value",
      description: "Rapid deployment and measurable results, moving from pilot to production quickly.",
    },
  ]

  const industries = [
    {
      icon: <Truck className="h-10 w-10 text-white" />,
      title: "Logistics",
      description: "Real-time container tracking, reduced detention disputes, and optimized supply chains.",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ2lzdGljfGVufDB8fDB8fHww",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: "Energy & Fuel",
      description: "Transparent supply chain monitoring, regulatory reporting, and fraud prevention.",
      image: "https://media.istockphoto.com/id/1338529411/photo/gas-station-work.webp?a=1&b=1&s=612x612&w=0&k=20&c=pJMB6NccINm2clm0kXcSXexrZZpaXEn2XtWjoCLgvJE=",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-white" />,
      title: "Finance & Insurance",
      description: "Secure data exchange, enhanced risk assessment, and streamlined financial operations.",
      image: "https://i.pinimg.com/736x/0f/c3/d2/0fc3d27eab72ff96e33a996bea6d1f6b.jpg",
    },
    {
      icon: <Leaf className="h-10 w-10 text-white" />,
      title: "Agriculture",
      description: "Export compliance, market access, and improved traceability for agricultural products.",
      image: "https://i.pinimg.com/1200x/76/ba/9d/76ba9d7f368379e839faa110653a0c2c.jpg",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section for Solutions Page */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-railBlueStart to-railBlueEnd text-white overflow-hidden">
        <Image
          src="https://plus.unsplash.com/premium_photo-1673245602929-4980b6627ef1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8"
          alt="Abstract data network background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-30"
          priority
        />
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
            Transforming Industries with Compliant Digital Rails
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Unlocking efficiency, trust, and growth across logistics, energy, finance, and agriculture with secure,
            multi-party data infrastructure.
          </p>
          <Link href="/contact?type=pilot">
            <Button
              variant="secondary"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md px-10 text-lg font-medium shadow-lg transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Your Pilot Today →
            </Button>
          </Link>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The RailGrid Advantage</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl">
              Our solutions are built on a foundation of trust, compliance, and innovation, designed to deliver tangible
              results.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4 p-3 rounded-full bg-blue-50 flex items-center justify-center">{benefit.icon}</div>
                <CardTitle className="text-xl font-bold mb-2">{benefit.title}</CardTitle>
                <CardContent className="p-0 text-muted-foreground">
                  <p>{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Solutions by Sector</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl">
              Rail Grid provides tailored digital solutions that address the unique challenges and opportunities within
              key industries.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative w-full h-48 bg-gradient-to-br from-railBlueStart to-railBlueEnd flex items-center justify-center">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-30"
                    loading="lazy"
                  />
                  <div className="relative z-10 p-4 rounded-full bg-white/20 backdrop-blur-sm">{industry.icon}</div>
                </div>
                <CardHeader className="text-center pt-6 pb-4">
                  <CardTitle className="text-xl font-bold">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-center pb-6">
                  <p>{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-railBlueStart to-railBlueEnd text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl drop-shadow-lg">
            Ready to Transform Your Operations?
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl drop-shadow-md">
            Connect with us to explore how Rail Grid can build compliant digital rails for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact?type=pilot">
              <Button
                variant="secondary"
                className="inline-flex h-12 items-center justify-center rounded-md px-10 text-lg font-medium shadow-lg transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Start a Pilot
              </Button>
            </Link>
            <a href="mailto:partnerships@railgrid.com" className="inline-flex">
              <Button
                variant="outline"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white text-white bg-transparent px-10 text-lg font-medium shadow-lg transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
              >
                Partner with Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
