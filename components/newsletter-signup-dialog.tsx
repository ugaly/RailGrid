import type React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface NewsletterSignupDialogProps {
  children: React.ReactNode
}

export default function NewsletterSignupDialog({ children }: NewsletterSignupDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Weekly Insights</DialogTitle>
          <DialogDescription>
            Sign up for our newsletter to receive weekly dispatches on compliant digital rails.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@example.com" />
          </div>
        </div>
        <Button type="submit">Subscribe</Button>
      </DialogContent>
    </Dialog>
  )
}
