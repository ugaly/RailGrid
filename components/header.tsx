// "use client"
// import Link from "next/link"
// import { Link as RouterLink } from "react-router-dom"
// import { GalleryVerticalEnd, Menu } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// export default function Header() {
//   const navMain = [
//     { title: "About", url: "/#about" }, // Assuming an about section on homepage
//     { title: "Solutions", url: "/solutions" },
//     { title: "Contact", url: "/contact" },
//     { title: "Blog", url: "/blog" },
//   ]

//   return (
//     <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-6 md:px-8">
//       <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
//         <GalleryVerticalEnd className="h-6 w-6 text-railBlueStart" />
//         <span className="sr-only">Rail Grid</span>
//         <span className="hidden md:block">Rail Grid</span>
//       </Link>
//       <nav className="ml-auto hidden gap-4 text-sm font-medium md:flex">
//         {navMain.map((item) => (
//           <RouterLink key={item.title} to={item.url} className="transition-colors hover:text-primary">
//             {item.title}
//           </RouterLink>
//         ))}
//       </nav>
//       <Sheet>
//         <SheetTrigger asChild>
//           <Button variant="outline" size="icon" className="ml-auto md:hidden bg-transparent">
//             <Menu className="h-6 w-6" />
//             <span className="sr-only">Toggle navigation menu</span>
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="right">
//           <nav className="grid gap-6 text-lg font-medium pt-6">
//             <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
//               <GalleryVerticalEnd className="h-6 w-6 text-railBlueStart" />
//               <span className="sr-only">Rail Grid</span>
//               <span>Rail Grid</span>
//             </Link>
//             {navMain.map((item) => (
//               <RouterLink key={item.title} to={item.url} className="hover:text-primary">
//                 {item.title}
//               </RouterLink>
//             ))}
//           </nav>
//         </SheetContent>
//       </Sheet>
//     </header>
//   )
// }






// "use client"
// import Link from "next/link"
// import { Link as RouterLink } from "react-router-dom"
// import { GalleryVerticalEnd, Menu } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { cn } from "@/lib/utils"

// export default function Header() {
//   const navMain = [
//     { title: "About", url: "/#about" },
//     { title: "Solutions", url: "/solutions" },
//     { title: "Contact", url: "/contact" },
//     { title: "Blog", url: "/blog" },
//   ]

//   return (
//     <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 lg:px-8">
//       <Link 
//         href="/" 
//         className="flex items-center gap-2 group"
//       >
//         <div className="p-1.5 rounded-lg bg-gradient-to-br from-railBlueStart to-railBlueEnd group-hover:from-railBlueEnd group-hover:to-railBlueStart transition-colors">
//           <GalleryVerticalEnd className="h-5 w-5 text-white" />
//         </div>
//         <span className="text-lg font-bold bg-gradient-to-r from-railBlueStart to-railBlueEnd bg-clip-text text-transparent">
//           Rail Grid
//         </span>
//       </Link>
      
//       <nav className="hidden md:flex items-center gap-1 ml-8">
//         {navMain.map((item) => (
//           <RouterLink 
//             key={item.title}
//             to={item.url}
//             className={cn(
//               "px-3 py-2 rounded-md text-sm font-medium transition-colors",
//               "hover:bg-accent hover:text-accent-foreground",
//               "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//             )}
//           >
//             {item.title}
//           </RouterLink>
//         ))}
//       </nav>
      
//       <div className="ml-auto flex items-center gap-2">
//         <Button 
//           variant="ghost" 
//           size="sm" 
//           className="hidden sm:inline-flex hover:bg-accent/50"
//         >
//           Sign In
//         </Button>
//         <Button 
//           size="sm" 
//           className="hidden sm:inline-flex bg-gradient-to-r from-railBlueStart to-railBlueEnd hover:from-railBlueEnd hover:to-railBlueStart"
//         >
//           Get Started
//         </Button>
        
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button 
//               variant="ghost" 
//               size="icon" 
//               className="md:hidden hover:bg-accent/50"
//             >
//               <Menu className="h-5 w-5" />
//               <span className="sr-only">Toggle navigation menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="right" className="w-[300px] sm:w-[350px]">
//             <div className="flex flex-col h-full">
//               <div className="flex items-center gap-2 pb-6 pt-2">
//                 <div className="p-1.5 rounded-lg bg-gradient-to-br from-railBlueStart to-railBlueEnd">
//                   <GalleryVerticalEnd className="h-5 w-5 text-white" />
//                 </div>
//                 <span className="text-lg font-bold bg-gradient-to-r from-railBlueStart to-railBlueEnd bg-clip-text text-transparent">
//                   Rail Grid
//                 </span>
//               </div>
              
//               <nav className="flex-1 flex flex-col gap-1">
//                 {navMain.map((item) => (
//                   <RouterLink
//                     key={item.title}
//                     to={item.url}
//                     className={cn(
//                       "px-3 py-2 rounded-md text-sm font-medium transition-colors",
//                       "hover:bg-accent hover:text-accent-foreground",
//                       "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//                     )}
//                   >
//                     {item.title}
//                   </RouterLink>
//                 ))}
//               </nav>
              
//               <div className="pt-6 pb-4 flex flex-col gap-2">
//                 <Button 
//                   variant="outline" 
//                   size="sm" 
//                   className="w-full"
//                 >
//                   Sign In
//                 </Button>
//                 <Button 
//                   size="sm" 
//                   className="w-full bg-gradient-to-r from-railBlueStart to-railBlueEnd hover:from-railBlueEnd hover:to-railBlueStart"
//                 >
//                   Get Started
//                 </Button>
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   )
// }





// "use client"
// import Link from "next/link"
// import { Link as RouterLink, useLocation } from "react-router-dom"
// import { GalleryVerticalEnd, Menu } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { cn } from "@/lib/utils"

// export default function Header() {
//   const { pathname } = useLocation()
  
//   const navMain = [
//     { title: "About", url: "/#about" },
//     { title: "Solutions", url: "/solutions" },
//     { title: "Contact", url: "/contact" },
//     { title: "Blog", url: "/blog" },
//   ]


//   const isActive = (url: string) => {
//     if (url === '/') return pathname === url
//     return pathname.startsWith(url)
//   }

//   return (
//     <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 lg:px-8">
//       {/* Logo on the left */}
//       <Link 
//         href="/" 
//         className="flex items-center gap-2 group mr-auto"
//       >
//         <div className="p-1.5 rounded-lg bg-gradient-to-br from-railBlueStart to-railBlueEnd group-hover:from-railBlueEnd group-hover:to-railBlueStart transition-colors">
//           <GalleryVerticalEnd className="h-5 w-5 text-white" />
//         </div>
//         <span className="text-lg font-bold bg-gradient-to-r from-railBlueStart to-railBlueEnd bg-clip-text text-transparent">
//           RailGrid
//         </span>
//       </Link>
      
//       {/* Navigation aligned to the right */}
//       <nav className="hidden md:flex items-center gap-1">
//         {navMain.map((item) => (
//           <RouterLink 
//             key={item.title}
//             to={item.url}
//             className={cn(
//               "px-3 py-2 rounded-md text-sm font-medium transition-colors",
//               "hover:bg-accent hover:text-accent-foreground",
//               "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
//               isActive(item.url) 
//                 ? "bg-accent text-accent-foreground font-semibold" 
//                 : "text-muted-foreground"
//             )}
//           >
//             {item.title}
//           </RouterLink>
//         ))}
//       </nav>
      
//       {/* Mobile menu button (stays on the right) */}
//       <div className="md:hidden ml-auto">
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button 
//               variant="ghost" 
//               size="icon" 
//               className="hover:bg-accent/50"
//             >
//               <Menu className="h-5 w-5" />
//               <span className="sr-only">Toggle navigation menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="right" className="w-[280px]">
//             <div className="flex flex-col h-full">
//               <div className="flex items-center gap-2 pb-6 pt-2">
//                 <div className="p-1.5 rounded-lg bg-gradient-to-br from-railBlueStart to-railBlueEnd">
//                   <GalleryVerticalEnd className="h-5 w-5 text-white" />
//                 </div>
//                 <span className="text-lg font-bold bg-gradient-to-r from-railBlueStart to-railBlueEnd bg-clip-text text-transparent">
//                   RailGrid
//                 </span>
//               </div>
              
//               <nav className="flex-1 flex flex-col gap-1">
//                 {navMain.map((item) => (
//                   <RouterLink
//                     key={item.title}
//                     to={item.url}
//                     className={cn(
//                       "px-3 py-2 rounded-md text-sm font-medium transition-colors",
//                       "hover:bg-accent hover:text-accent-foreground",
//                       "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
//                       isActive(item.url)
//                         ? "bg-accent text-accent-foreground font-semibold"
//                         : "text-muted-foreground"
//                     )}
//                   >
//                     {item.title}
//                   </RouterLink>
//                 ))}
//               </nav>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   )
// }



"use client"
import Link from "next/link"
import { usePathname } from "next/navigation" // Import usePathname
import { GalleryVerticalEnd, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname() // Get the current pathname

  const navMain = [
    { title: "About", url: "/#founder" }, // Link to founder section on homepage
    { title: "Solutions", url: "/solutions" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
  ]

  // Function to determine if a link is active
  const isActive = (url: string) => {
    // Special handling for the root path and hash links
    if (url === "/" || url.startsWith("/#")) {
      return pathname === "/"
    }
    // For other paths, check if the pathname starts with the item's URL
    // This handles nested routes like /blog/post-slug being active for /blog
    return pathname.startsWith(url)
  }

  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 lg:px-8">
      {/* Logo on the left */}
      <Link href="/" className="flex items-center gap-2 group mr-auto">
        <div className="p-1.5 rounded-lg bg-gradient-to-br from-railBlueStart to-railBlueEnd group-hover:from-railBlueEnd group-hover:to-railBlueStart transition-colors">
          <GalleryVerticalEnd className="h-5 w-5 text-white" />
        </div>
        <span className="text-lg font-bold bg-gradient-to-r from-railBlueStart to-railBlueEnd bg-clip-text text-transparent">
          RailGrid
        </span>
      </Link>

      {/* Navigation aligned to the right */}
      <nav className="hidden md:flex items-center gap-1">
        {navMain.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive(item.url) ? "font-bold text-railBlueStart" : "text-muted-foreground",
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Mobile menu button (stays on the right) */}
      <div className="md:hidden ml-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-accent/50">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 pb-6 pt-2">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-railBlueStart to-railBlueEnd">
                  <GalleryVerticalEnd className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-railBlueStart to-railBlueEnd bg-clip-text text-transparent">
                  RailGrid
                </span>
              </div>
              <nav className="flex-1 flex flex-col gap-1">
                {navMain.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive(item.url) ? "font-bold text-railBlueStart" : "text-muted-foreground",
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
