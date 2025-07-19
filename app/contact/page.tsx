// "use client"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { useSearchParams } from "next/navigation"
// import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export default function ContactPage() {
//   const searchParams = useSearchParams()
//   const type = searchParams.get("type")

//   return (
//     <div className="flex flex-col min-h-[calc(100vh-64px-80px)]">
//       {" "}
//       {/* Adjust min-height for header/footer */}
//       {/* Hero & Primary Contact Section */}
//       <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-railBlueStart to-railBlueEnd text-white overflow-hidden flex items-center justify-center">
//         <Image
//           src="/assets/contact-hero-bg.png"
//           alt="Abstract blue data network background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           className="absolute inset-0 z-0 opacity-30"
//           priority
//         />
//         <div className="container relative z-10 text-center space-y-8">
//           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
//             Let&apos;s Build the Future Together
//           </h1>
//           <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-md">
//             Connect with Rail Grid to explore compliant digital solutions for your industry.
//           </p>

//           {/* Primary Contact Info - Prominent */}
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
//             <div className="flex items-center gap-3 text-2xl font-semibold drop-shadow-md">
//               <Phone className="h-8 w-8" />
//               <a href="tel:+255784123456" className="hover:underline">
//                 +255 784 123 456
//               </a>
//             </div>
//             <div className="flex items-center gap-3 text-2xl font-semibold drop-shadow-md">
//               <Clock className="h-8 w-8" />
//               <span>Mon - Fri, 9 AM - 5 PM EAT</span>
//             </div>
//           </div>
//           <Link
//             href="https://wa.me/255784123456"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 text-lg font-medium text-white hover:underline drop-shadow-md"
//           >
//             <MessageCircle className="h-6 w-6" />
//             Send a WhatsApp Message
//           </Link>
//         </div>
//       </section>
//       {/* Contact Form Section */}
//       <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
//         <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
//           {/* Left Column: Secondary Contact Details & Address */}
//           <div className="space-y-8 text-center md:text-left">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Other Ways to Connect</h2>
//             <p className="text-lg text-muted-foreground">
//               For specific inquiries, feel free to reach out to our dedicated teams.
//             </p>
//             <div className="space-y-6">
//               <div className="flex items-center gap-4 text-lg">
//                 <Mail className="h-6 w-6 text-railBlueStart flex-shrink-0" />
//                 <div>
//                   <p className="font-semibold">General Inquiries:</p>
//                   <a
//                     href="mailto:info@railgrid.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     info@railgrid.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4 text-lg">
//                 <Mail className="h-6 w-6 text-railBlueStart flex-shrink-0" />
//                 <div>
//                   <p className="font-semibold">Partnerships:</p>
//                   <a
//                     href="mailto:partnerships@railgrid.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     partnerships@railgrid.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4 text-lg">
//                 <Mail className="h-6 w-6 text-railBlueStart flex-shrink-0" />
//                 <div>
//                   <p className="font-semibold">Legal & Privacy:</p>
//                   <a
//                     href="mailto:legal@railgrid.tz"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     legal@railgrid.tz
//                   </a>
//                   <span className="mx-1 text-muted-foreground">/</span>
//                   <a
//                     href="mailto:privacy@railgrid.tz"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     privacy@railgrid.tz
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 text-lg">
//                 <MapPin className="h-6 w-6 text-railBlueStart flex-shrink-0 mt-1" />
//                 <div>
//                   <p className="font-semibold">Our Office:</p>
//                   <p className="text-muted-foreground">Viva Tower 7/F, Ali Hassan Mwinyi Rd,</p>
//                   <p className="text-muted-foreground">Dar es Salaam, Tanzania</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Contact Form */}
//           <div className="bg-card p-8 md:p-10 rounded-lg shadow-xl border border-border">
//             <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Send Us a Message</h3>
//             <form className="grid gap-6">
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" placeholder="Your Name" />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" placeholder="your@example.com" />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="subject">Subject</Label>
//                 <Input
//                   id="subject"
//                   placeholder={type === "pilot" ? "Inquiry about starting a pilot" : "General Inquiry"}
//                   defaultValue={type === "pilot" ? "Inquiry about starting a pilot" : ""}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
//               </div>
//               <Button type="submit" className="w-full h-12 text-lg">
//                 Send Message
//               </Button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }



"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useSearchParams } from "next/navigation"
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px-80px)]">
      {/* Hero & Primary Contact Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-railBlueStart to-railBlueEnd text-white overflow-hidden flex items-center justify-center">
        <Image
          src="https://plus.unsplash.com/premium_photo-1701679745692-3715eeefa614?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8"
          alt="Abstract blue data network background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-30"
          priority
        />
        <div className="container relative z-10 text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
            Let&apos;s Build the Future Together
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Connect with Rail Grid to explore compliant digital solutions for your industry.
          </p>

          {/* Primary Contact Info - Prominent */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <div className="flex items-center gap-3 text-2xl font-semibold drop-shadow-md">
              <Phone className="h-8 w-8" />
              <a href="tel:+255784123456" className="hover:underline">
                +255 784 123 456
              </a>
            </div>
            <div className="flex items-center gap-3 text-2xl font-semibold drop-shadow-md">
              <Clock className="h-8 w-8" />
              <span>Mon - Fri, 9 AM - 5 PM EAT</span>
            </div>
          </div>
          <Link
            href="https://wa.me/255784123456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-medium text-white hover:underline drop-shadow-md"
          >
            <MessageCircle className="h-6 w-6" />
            Send a WhatsApp Message
          </Link>
        </div>
      </section>

      {/* Secondary Contact Details Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Other Ways to Connect</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl">
              For specific inquiries, feel free to reach out to our dedicated teams or visit our office.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-muted/50 border border-border shadow-sm">
              <div className="p-3 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                <Mail className="h-8 w-8 text-railBlueStart" />
              </div>
              <h3 className="text-xl font-semibold">General Inquiries</h3>
              <a href="mailto:info@railgrid.com" className="text-muted-foreground hover:text-primary transition-colors">
                info@railgrid.com
              </a>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-muted/50 border border-border shadow-sm">
              <div className="p-3 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                <Mail className="h-8 w-8 text-railBlueStart" />
              </div>
              <h3 className="text-xl font-semibold">Partnerships</h3>
              <a
                href="mailto:partnerships@railgrid.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                partnerships@railgrid.com
              </a>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-muted/50 border border-border shadow-sm lg:col-span-1 sm:col-span-2">
              <div className="p-3 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                <MapPin className="h-8 w-8 text-railBlueStart" />
              </div>
              <h3 className="text-xl font-semibold">Our Office</h3>
              <p className="text-muted-foreground">Viva Tower 7/F, Ali Hassan Mwinyi Rd,</p>
              <p className="text-muted-foreground">Dar es Salaam, Tanzania</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Send Us a Message</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl">
              Use the form below for specific inquiries or to request a pilot. We aim to respond within 24-48 hours.
            </p>
          </div>
          <div className="bg-card p-8 md:p-10 rounded-lg shadow-xl border border-border">
            <form className="grid gap-6">
              <div className="grid gap-2 text-left">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" className="h-11 text-base" />
              </div>
              <div className="grid gap-2 text-left">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@example.com" className="h-11 text-base" />
              </div>
              <div className="grid gap-2 text-left">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder={type === "pilot" ? "Inquiry about starting a pilot" : "General Inquiry"}
                  defaultValue={type === "pilot" ? "Inquiry about starting a pilot" : ""}
                  className="h-11 text-base"
                />
              </div>
              <div className="grid gap-2 text-left">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] text-base" />
              </div>
              <Button type="submit" className="w-full h-12 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
