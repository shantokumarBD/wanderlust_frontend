"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { PencilIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface EditDestinationProps {
  destinationId?: string
  initialData?: any
  onUpdated?: (updated: any) => void
}

export function EditDestination({
  destinationId,
  initialData,
  onUpdated,
}: EditDestinationProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [isSaving, setIsSaving] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)

    // Collect all input values effortlessly using standard FormData
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      if (destinationId) {
        await fetch(`http://localhost:5000/destinations/${destinationId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      }

      onUpdated?.(payload)
      router.refresh()
      setOpen(false)
    } catch (err) {
      console.error("Failed to update destination:", err)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            type="button"
            variant="outline"
            className="inline-flex items-center gap-1.5 rounded-xs border border-border/90 bg-background px-4 py-2 text-xs sm:text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <PencilIcon className="size-3.5 text-muted-foreground" />
            <span>Edit</span>
          </Button>
        }
      />

      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-normal tracking-tight">
            Edit Destination
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Update package details and save changes.
          </DialogDescription>
        </DialogHeader>

        <form
          key={open ? "opened" : "closed"}
          onSubmit={handleSubmit}
          className="space-y-3.5 pt-2"
        >
          {/* Destination Name & Country */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <Label htmlFor="destinationName" className="text-xs font-medium">
                Destination Name
              </Label>
              <Input
                id="destinationName"
                name="destinationName"
                defaultValue={initialData?.destinationName || initialData?.title || ""}
                required
                className="h-9 text-xs sm:text-sm"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="country" className="text-xs font-medium">
                Country
              </Label>
              <Input
                id="country"
                name="country"
                defaultValue={initialData?.country || ""}
                required
                className="h-9 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <Label htmlFor="price" className="text-xs font-medium">
                Price (USD)
              </Label>
              <Input
                id="price"
                name="price"
                type="number"
                defaultValue={initialData?.price || ""}
                required
                className="h-9 text-xs sm:text-sm"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="category" className="text-xs font-medium">
                Category
              </Label>
              <Input
                id="category"
                name="category"
                defaultValue={initialData?.category || "Beach"}
                className="h-9 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Duration & Departure Date */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <Label htmlFor="duration" className="text-xs font-medium">
                Duration
              </Label>
              <Input
                id="duration"
                name="duration"
                defaultValue={initialData?.duration || ""}
                placeholder="7 Days / 6 Nights"
                className="h-9 text-xs sm:text-sm"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="departureDate" className="text-xs font-medium">
                Departure Date
              </Label>
              <Input
                id="departureDate"
                name="departureDate"
                defaultValue={initialData?.departureDate || ""}
                placeholder="05/15/2026"
                className="h-9 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Image URL */}
          <div className="space-y-1">
            <Label htmlFor="imageUrl" className="text-xs font-medium">
              Image URL
            </Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              defaultValue={initialData?.imageUrl || ""}
              placeholder="https://..."
              className="h-9 text-xs sm:text-sm"
            />
          </div>

          {/* Description */}
          <div className="space-y-1">
            <Label htmlFor="description" className="text-xs font-medium">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={initialData?.description || ""}
              rows={3}
              className="text-xs sm:text-sm"
            />
          </div>

          <DialogFooter className="pt-2 flex items-center justify-end gap-2">
            <DialogClose
              render={
                <Button variant="outline" type="button" disabled={isSaving}>
                  Cancel
                </Button>
              }
            />
            <Button
              type="submit"
              disabled={isSaving}
              className="bg-brand text-white hover:bg-brand/90"
            >
              {isSaving ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
