import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full  py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <Image
        src="https://plus.unsplash.com/premium_photo-1672256944198-efb2dd4ee5a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
        alt="Abstract blue data-rail background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
        priority
      />
      {/* <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/vid.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}
      {/* <div className="absolute inset-0 bg-blue-900/85 z-0" /> */}

      <div className="container relative z-10 grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-lg">
              Data is the New Oil
            </h1>
            <h3 className="max-w-[700px] text-lg text-white/90 md:text-xl lg:text-xl/relaxed mx-auto lg:mx-0 drop-shadow-md">
              Fueling innovation through compliant, multi-party data infrastructure.
            </h3>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
            <Link href="/solutions">
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Explore Our Solutions →
              </Button>
            </Link>
            <Link href="/founder">
              <Button
                variant="outline"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Meet the Founder →
              </Button>
            </Link>
          </div>
        </div>
        {/* Ensure the parent div has a defined aspect ratio for the fill image */}
        <div className="relative mx-auto w-full aspect-[4/3] sm:aspect-[1/1] lg:aspect-square overflow-hidden">
          <Image
            src="/one.png"
            alt="Neural-rail circuit SVG"
            fill
            objectFit="contain"
            className="lg:order-last"
            priority
          />
        </div>
      </div>
    </section>
  )
}
