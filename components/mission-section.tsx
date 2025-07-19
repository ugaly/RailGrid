import Image from "next/image"

export default function MissionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Pioneering Compliant Digital Solutions
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Rail Grid is a pioneer in developing compliant digital solutions across logistics, energy, finance, and
                agriculture, unlocking efficiency, compliance, investment, and economic growth.
              </p>
            </div>
          </div>
          {/* Ensure the parent div has a defined aspect ratio for the fill image */}
          <div className="relative mx-auto w-full aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src="https://i.pinimg.com/736x/f8/4c/4c/f84c4c2584a638201012708741484fac.jpg"
              alt="Stylised continent map with animated data rails"
              fill
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
