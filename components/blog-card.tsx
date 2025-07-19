import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  title: string
  excerpt: string
  readTime: string
  imageSrc: string
  imageAlt: string
  slug: string
}

export default function BlogCard({ title, excerpt, readTime, imageSrc, imageAlt, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={400}
          height={225}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <CardHeader className="flex-grow">
          <CardTitle className="text-xl font-bold line-clamp-2">{title}</CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-3">{excerpt}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 text-sm text-muted-foreground">
          <span>{readTime} read</span>
        </CardContent>
      </Card>
    </Link>
  )
}
