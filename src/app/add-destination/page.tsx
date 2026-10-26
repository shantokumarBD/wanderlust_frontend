"use client"

import * as React from "react"
    
import { useRouter } from "next/navigation"
import { ChevronDown, Save, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const categories = [
  "Beach",
  "Mountain",
  "Cultural",
  "Adventure",
  "Desert",
  "Island",
  "City",
  "Wildlife & Nature",
]

export default function AddDestinationPage() {
  const router = useRouter()
  const [formData, setFormData] = React.useState({
    destinationName: "",
    country: "",
    category: "Beach",
    price: "",
    duration: "",
    departureDate: "",
    imageUrl: "",
    description: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleReset = () => {
    setFormData({
      destinationName: "",
      country: "",
      category: "Beach",
      price: "",
      duration: "",
      departureDate: "",
      imageUrl: "",
      description: "",
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("http://localhost:5000/add-destination", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json()
    console.log(data);
    
    
    router.push("/")
  }

  return (
    <div className="flex min-h-svh flex-col bg-[#fbfcfd] dark:bg-background">


      <main className="flex-1 px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Page Heading */}
          <h1 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Add New Travel Package
          </h1>

          {/* Form Card */}
          <Card className="mt-8 rounded-none border border-border/70 bg-white p-6 shadow-sm dark:bg-card sm:p-10 md:p-12">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Destination Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="destinationName"
                    className="text-xs font-medium text-foreground sm:text-sm"
                  >
                    Destination Name
                  </Label>
                  <Input
                    id="destinationName"
                    name="destinationName"
                    type="text"
                    required
                    value={formData.destinationName}
                    onChange={handleChange}
                    placeholder="Bali Paradise"
                    className="h-11 rounded-none border border-border/40 bg-[#f8f9fa] px-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-0 dark:bg-muted/30 dark:focus-visible:bg-transparent sm:text-sm"
                  />
                </div>

                {/* Country & Category (2 Columns) */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Country */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="country"
                      className="text-xs font-medium text-foreground sm:text-sm"
                    >
                      Country
                    </Label>
                    <Input
                      id="country"
                      name="country"
                      type="text"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Indonesia"
                      className="h-11 rounded-none border border-border/40 bg-[#f8f9fa] px-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-0 dark:bg-muted/30 dark:focus-visible:bg-transparent sm:text-sm"
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="category"
                      className="text-xs font-medium text-foreground sm:text-sm"
                    >
                      Category
                    </Label>
                    <div className="relative">
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="h-11 w-full appearance-none rounded-none border border-border/40 bg-[#f8f9fa] px-3.5 pr-10 text-xs text-foreground outline-none transition-colors focus:border-brand focus:bg-white dark:bg-muted/30 dark:focus:bg-transparent sm:text-sm"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                {/* Price (USD) & Duration (2 Columns) */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Price (USD) */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="price"
                      className="text-xs font-medium text-foreground sm:text-sm"
                    >
                      Price (USD)
                    </Label>
                    <Input
                      id="price"
                      name="price"
                      type="text"
                      required
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="e.g., 1299"
                      className="h-11 rounded-none border border-border/40 bg-[#f8f9fa] px-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-0 dark:bg-muted/30 dark:focus-visible:bg-transparent sm:text-sm"
                    />
                  </div>

                  {/* Duration */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="duration"
                      className="text-xs font-medium text-foreground sm:text-sm"
                    >
                      Duration
                    </Label>
                    <Input
                      id="duration"
                      name="duration"
                      type="text"
                      required
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="e.g., 7 Days/6 Nights"
                      className="h-11 rounded-none border border-border/40 bg-[#f8f9fa] px-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-0 dark:bg-muted/30 dark:focus-visible:bg-transparent sm:text-sm"
                    />
                  </div>
                </div>

                {/* Departure Date */}
                <div className="space-y-2">
                  <Label
                    htmlFor="departureDate"
                    className="text-xs font-medium text-foreground sm:text-sm"
                  >
                    Departure Date
                  </Label>
                  <Input
                    id="departureDate"
                    name="departureDate"
                    type="text"
                    value={formData.departureDate}
                    onChange={handleChange}
                    placeholder="mm/dd/yyyy"
                    className="h-11 rounded-none border border-border/40 bg-[#f8f9fa] px-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-0 dark:bg-muted/30 dark:focus-visible:bg-transparent sm:text-sm"
                  />
                </div>

                {/* Image URL */}
                <div className="space-y-2">
                  <Label
                    htmlFor="imageUrl"
                    className="text-xs font-medium text-foreground sm:text-sm"
                  >
                    Image URL
                  </Label>
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="h-11 rounded-none border border-border/40 bg-[#f8f9fa] px-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-0 dark:bg-muted/30 dark:focus-visible:bg-transparent sm:text-sm"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-xs font-medium text-foreground sm:text-sm"
                  >
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the travel experience..."
                    className="min-h-[140px] rounded-none border border-border/40 bg-[#f8f9fa] p-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-0 dark:bg-muted/30 dark:focus-visible:bg-transparent sm:text-sm"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col-reverse items-stretch justify-end gap-3 pt-4 sm:flex-row sm:items-center sm:gap-4">
                  {/* Cancel Button */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    className="h-10 gap-1.5 rounded-none border border-red-400 bg-transparent px-5 text-xs font-medium text-red-500 hover:bg-red-50 hover:text-red-600 dark:border-red-900/60 dark:hover:bg-red-950/20 sm:text-sm"
                  >
                    <Trash2 className="size-3.5 text-red-500" />
                    Cancel
                  </Button>

                  {/* Add Travel Package Button */}
                  <Button
                    type="submit"
                    className="h-10 gap-2 rounded-none bg-brand px-6 text-xs font-medium text-white shadow-sm hover:bg-brand/90 sm:text-sm"
                  >
                    <Save className="size-4" />
                    Add Travel Package
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>


    </div>
  )
}