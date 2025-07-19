import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Timer } from "lucide-react"

export default function CorePillarsSection() {
  const pillars = [
    {
      icon: <Shield className="h-8 w-8 text-railBlueStart" />,
      title: "Regulator Aligned",
      copy: "Built with compliance in mind",
    },
    {
      icon: <Users className="h-8 w-8 text-railBlueStart" />,
      title: "Multi-party ROI",
      copy: "Shared wins with multiple stakeholders",
    },
    {
      icon: <Timer className="h-8 w-8 text-railBlueStart" />,
      title: "Speed to Value",
      copy: "20-week pilot sprints to live results, no endless POCs.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Pillars</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Driving innovation and value through fundamental principles.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:gap-10">
          {pillars.map((pillar, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center">
              <CardHeader className="pb-4">
                {/* Updated icon styling for oval shape and light blue background */}
                <div className="mb-4 py-2 px-6 rounded-full flex items-center justify-center">
                  {pillar.icon}
                </div>
                <CardTitle className="text-xl font-bold">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{pillar.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
