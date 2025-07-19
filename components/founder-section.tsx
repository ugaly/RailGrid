// import Image from "next/image"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// import { Linkedin } from "lucide-react"

// export default function FounderSection() {
//   return (
//     <section id="founder" className="w-full py-12 md:py-24 lg:py-32">
//       <div className="container">
//         <div className="flex flex-col items-center justify-center space-y-8 text-center">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Founder</h2>
//           <Card className="w-full max-w-md p-6 flex flex-col items-center text-center">
//             <Image
//               src="https://media.licdn.com/dms/image/v2/D4D03AQH6zYssqelYxQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714144765609?e=1755734400&v=beta&t=ZEMZhGNOXA1nJbzyCtfqcBeu-xzT26G6nEdfU1Nezno"
//               width="150"
//               height="150"
//               alt="Mohammed Saleh headshot"
//               className="rounded-full object-cover mb-6"
//               loading="lazy"
//             />
//             <CardHeader className="p-0 pb-4">
//               <CardTitle className="text-2xl font-bold">Mohammed Saleh</CardTitle>
//               <CardDescription className="text-muted-foreground">Founder & CTO, Rail Grid</CardDescription>
//             </CardHeader>
//             <CardContent className="p-0 space-y-4">
//               <p className="text-muted-foreground">
//                 Tanzanian tech entrepreneur with 20 years in strategy, systems & digital solutions, now focused on
//                 building Africa’s compliant data rails.
//               </p>
//               <div className="flex justify-center gap-4">
//                 <a
//                   href="https://linkedin.com/in/mohammed-saleh-cto"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                   aria-label="LinkedIn profile of Mohammed Saleh"
//                 >
//                   <Linkedin className="h-6 w-6" />
//                 </a>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }




// import Image from "next/image"
// import { Linkedin } from "lucide-react"

// export default function FounderSection() {
//   return (
//     <section id="founder" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
//       {/* Blurred bluish background image */}
//       <Image
//         src="/assets/abstract-blue-background.png"
//         alt="Abstract blue digital pattern background"
//         layout="fill"
//         objectFit="cover"
//         quality={100}
//         className="absolute inset-0 z-0 blur-lg opacity-70" // Increased blur and opacity for dominance
//         priority
//       />
//       {/* Dark overlay for text readability */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-r from-railBlueStart/80 to-railBlueEnd/80"></div>

//       <div className="container relative z-10 flex flex-col items-center justify-center space-y-8 text-center text-white">
//         <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl drop-shadow-md">Meet the Founder</h2>

//         <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12 max-w-4xl mx-auto bg-white/10 p-8 rounded-lg shadow-2xl backdrop-blur-sm">
//           <div className="flex justify-center md:justify-end">
//             <Image
//               src="https://media.licdn.com/dms/image/v2/D4D03AQH6zYssqelYxQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714144765609?e=1755734400&v=beta&t=ZEMZhGNOXA1nJbzyCtfqcBeu-xzT26G6nEdfU1Nezno"
//               width="200" // Increased size for prominence
//               height="200" // Increased size for prominence
//               alt="Mohammed Saleh headshot"
//               className="rounded-full object-cover border-4 border-white/50 shadow-lg"
//               loading="lazy"
//             />
//           </div>
//           <div className="text-center md:text-left space-y-4">
//             <h3 className="text-3xl font-bold drop-shadow-md">Mohammed Saleh</h3>
//             <p className="text-xl text-white/90 font-medium">Founder & CTO, Rail Grid</p>
//             <p className="text-white/80 leading-relaxed">
//               Tanzanian tech entrepreneur with 20 years in strategy, systems & digital solutions, now focused on
//               building Africa’s compliant data rails.
//             </p>
//             <div className="flex justify-center md:justify-start gap-4 pt-2">
//               <a
//                 href="https://linkedin.com/in/mohammed-saleh-cto"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-railBlueEnd transition-colors"
//                 aria-label="LinkedIn profile of Mohammed Saleh"
//               >
//                 <Linkedin className="h-8 w-8" /> {/* Larger icon */}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


// import Image from "next/image"
// import { Linkedin } from "lucide-react"

// export default function FounderSection() {
//   return (
//     <section
//       id="founder"
//       className="relative w-full py-16 md:py-32 lg:py-48 overflow-hidden flex items-center justify-center"
//     >
//       {/* Blurred bluish background image */}
//       <Image
//         src="/assets/abstract-blue-background.png"
//         alt="Abstract blue digital pattern background"
//         layout="fill"
//         objectFit="cover"
//         quality={100}
//         className="absolute inset-0 z-0 blur-2xl opacity-80" // Increased blur and opacity for stronger dominance
//         priority
//       />
//       {/* Stronger gradient overlay for depth and text readability */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-railBlueStart/90 to-railBlueEnd/90"></div>

//       <div className="container relative z-10 flex flex-col items-center justify-center text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-12 drop-shadow-lg">
//           Meet the Visionary
//         </h2>

//         <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
//           <div className="flex-shrink-0">
//             <Image
//               src="https://media.licdn.com/dms/image/v2/D4D03AQH6zYssqelYxQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714144765609?e=1755734400&v=beta&t=ZEMZhGNOXA1nJbzyCtfqcBeu-xzT26G6nEdfU1Nezno"
//               width="250" // Larger image for more presence
//               height="250" // Larger image for more presence
//               alt="Mohammed Saleh headshot"
//               className="rounded-full object-cover border-8 border-white/30 shadow-xl" // Thicker, softer border
//               loading="lazy"
//             />
//           </div>
//           <div className="text-center md:text-left space-y-6">
//             <h3 className="text-4xl font-bold drop-shadow-lg">Mohammed Saleh</h3>
//             <p className="text-2xl text-white/90 font-semibold drop-shadow-md">Founder & CTO, Rail Grid</p>
//             <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0">
//               Tanzanian tech entrepreneur with 20 years in strategy, systems & digital solutions, now focused on
//               building Africa’s compliant data rails. His vision is to unlock efficiency, compliance, investment, and
//               economic growth through robust, multi-party data infrastructure.
//             </p>
//             <div className="flex justify-center md:justify-start gap-6 pt-4">
//               <a
//                 href="https://linkedin.com/in/mohammed-saleh-cto"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-railBlueEnd transition-colors transform hover:scale-110"
//                 aria-label="LinkedIn profile of Mohammed Saleh"
//               >
//                 <Linkedin className="h-10 w-10" /> {/* Even larger icon */}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }






import Image from "next/image"
import { Linkedin } from "lucide-react"

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="relative w-full py-16 md:py-32 lg:py-48 overflow-hidden flex items-center justify-center"
    >
      {/* Blurred bluish background image */}
      <Image
        src="/assets/abstract-blue-background.png"
        alt="Abstract blue digital pattern background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 blur-2xl opacity-80" // Increased blur and opacity for stronger dominance
        priority
      />
      {/* Stronger gradient overlay for depth and text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-railBlueStart/90 to-railBlueEnd/90"></div>

      <div className="container relative z-10 flex flex-col items-center justify-center text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-12 drop-shadow-lg">
          Meet the Visionary
        </h2>

        {/* Frosted glass content panel */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 shadow-2xl backdrop-blur-md">
          <div className="flex-shrink-0">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQH6zYssqelYxQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714144765609?e=1755734400&v=beta&t=ZEMZhGNOXA1nJbzyCtfqcBeu-xzT26G6nEdfU1Nezno"
              width="250" // Larger image for more presence
              height="250" // Larger image for more presence
              alt="Mohammed Saleh headshot"
              className="rounded-full object-cover border-8 border-white/40 shadow-xl" // Thicker, softer white border
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left space-y-6">
            <h3 className="text-4xl font-bold drop-shadow-lg">Mohammed Saleh</h3>
            <p className="text-2xl text-white/90 font-semibold drop-shadow-md">Founder & CTO, Rail Grid</p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Tanzanian tech entrepreneur with 20 years in strategy, systems & digital solutions, now focused on
              building Africa’s compliant data rails. His vision is to unlock efficiency, compliance, investment, and
              economic growth through robust, multi-party data infrastructure.
            </p>
            <div className="flex justify-center md:justify-start gap-6 pt-4">
              <a
                href="https://linkedin.com/in/mohammed-saleh-cto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors transform hover:scale-110"
                aria-label="LinkedIn profile of Mohammed Saleh"
              >
                <Linkedin className="h-10 w-10" /> {/* Even larger icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
