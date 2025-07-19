import Image from "next/image"

export default function ComplianceValueSection() {
  const regulatorLogos = [
    { src: "/tpa.png", alt: "Bank of Tanzania Logo", width: 80, height: 40 },
    { src: "/ewura.png", alt: "EWURA Logo", width: 80, height: 40 },
    { src: "/tira.png", alt: "TIRA Logo", width: 80, height: 40 },
    { src: "/tra.png", alt: "TRA Logo", width: 80, height: 40 },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-railBlueStart to-railBlueEnd text-white">
      <div className="container text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Mandatory Compliance Matters</h2>
          <p className="mx-auto max-w-[800px] text-lg md:text-xl/relaxed">
            Without mandatory standards, data quality suffers. Rail Grid advocates approved digital solutions that make
            interoperability, trust and automation the default across growth sectors.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {regulatorLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-20  object-contain grayscale opacity-75 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
