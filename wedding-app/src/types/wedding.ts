export type GalleryPhoto = {
  src: string
  alt: string
}

export type DetailItem = {
  number: string
  title: string
  description: string
}

export type ItineraryEvent = {
  time: string
  title: string
  description: string
}

export type ItineraryDay = {
  eyebrow: string
  title: string
  image: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  events: ItineraryEvent[]
}

export type AccommodationOption = {
  title: string
  description?: string
  linkLabel: string
  href: string
}

export type GiftRegistryLink = {
  label: string
  href: string
}

export type RsvpMealOption = {
  label: string
  value: string
}

export type TemplateId = 'classic' | 'editorial' | 'luxury'

export type ThemeId = 'sage' | 'terracotta' | 'midnight'

export type ThemeConfig = {
  palette: ThemeId
}

export type TemplateConfig = {
  page: TemplateId
  nav?: 'fixed' | 'luxury'
  hero?: 'classic' | 'editorial' | 'luxury'
  intro?: 'luxuryCountdown'
  story?: 'luxury'
  eventInfo?: 'split' | 'cards' | 'luxury'
  itinerary?: 'luxury'
  accommodation?: 'luxury'
  giftRegistry?: 'luxury'
  rsvp?: 'luxury'
  invitation?: 'centered' | 'editorial' | 'luxury'
  gallery?: 'classic'
  guestPhotos?: 'stack' | 'overlay'
  footer?: 'sage' | 'minimal' | 'luxury'
}

export type WeddingInfo = {
  slug: string
  template: TemplateConfig
  theme: ThemeConfig
  couple: {
    bride: string
    groom: string
    monogram: string
  }
  heroImage: string
  date: Date
  ceremonyText: string
  venueName: string
  mapsUrl: string
  eventInfo: {
    date: string
    time: string
    location: string
    closingText: string
    description?: string
    address?: string[]
    transport?: string
    mapLabel?: string
    backgroundImage?: string
  }
  invitation: {
    eyebrow: string
    title: string
    description: string
  }
  story?: {
    title: string
    lead: string
    paragraphs: string[]
    mainImage?: string
    mainImageAlt?: string
    secondaryImage?: string
    secondaryImageAlt?: string
  }
  itinerary?: {
    title: string
    days: ItineraryDay[]
  }
  accommodation?: {
    title: string
    description: string
    image: string
    imageAlt: string
    options: AccommodationOption[]
  }
  giftRegistry?: {
    eyebrow: string
    title: string
    description: string
    image: string
    imageAlt: string
    links: GiftRegistryLink[]
  }
  rsvp?: {
    title: string
    description: string
    image: string
    imageAlt: string
    mealOptions: RsvpMealOption[]
  }
  footer: {
    message: string
    date: string
  }
  details: DetailItem[]
  gallery: GalleryPhoto[]
}
