import type { ComponentType } from 'react'
import type { TemplateConfig, WeddingInfo } from '../types/wedding'
import { AccommodationLuxury } from '../components/sections/accommodation/AccommodationLuxury'
import { EventInfoCards } from '../components/sections/eventInfo/EventInfoCards'
import { EventInfoLuxury } from '../components/sections/eventInfo/EventInfoLuxury'
import { EventInfoSplit } from '../components/sections/eventInfo/EventInfoSplit'
import { FooterLuxury } from '../components/sections/footer/FooterLuxury'
import { FooterMinimal } from '../components/sections/footer/FooterMinimal'
import { FooterSage } from '../components/sections/footer/FooterSage'
import { GalleryClassic } from '../components/sections/gallery/GalleryClassic'
import { GiftRegistryLuxury } from '../components/sections/giftRegistry/GiftRegistryLuxury'
import { GuestPhotosFirebase } from '../components/sections/guestPhotos/GuestPhotosFirebase'
import { GuestPhotosMosaic } from '../components/sections/guestPhotos/GuestPhotosMosaic'
import { GuestPhotosOverlay } from '../components/sections/guestPhotos/GuestPhotosOverlay'
import { GuestPhotosStack } from '../components/sections/guestPhotos/GuestPhotosStack'
import { HeroClassic } from '../components/sections/hero/HeroClassic'
import { HeroEditorial } from '../components/sections/hero/HeroEditorial'
import { HeroLuxury } from '../components/sections/hero/HeroLuxury'
import { IntroLuxuryCountdown } from '../components/sections/intro/IntroLuxuryCountdown'
import { ItineraryLuxury } from '../components/sections/itinerary/ItineraryLuxury'
import { InvitationCentered } from '../components/sections/invitation/InvitationCentered'
import { InvitationEditorial } from '../components/sections/invitation/InvitationEditorial'
import { InvitationLuxury } from '../components/sections/invitation/InvitationLuxury'
import { FixedWeddingNav } from '../components/sections/nav/FixedWeddingNav'
import { LuxuryWeddingNav } from '../components/sections/nav/LuxuryWeddingNav'
import { RsvpLuxury } from '../components/sections/rsvp/RsvpLuxury'
import { StoryLuxury } from '../components/sections/story/StoryLuxury'

export type WeddingSectionComponent = ComponentType<{ wedding: WeddingInfo }>

export const templateRegistry = {
  nav: {
    fixed: FixedWeddingNav,
    luxury: LuxuryWeddingNav,
  },
  hero: {
    classic: HeroClassic,
    editorial: HeroEditorial,
    luxury: HeroLuxury,
  },
  intro: {
    luxuryCountdown: IntroLuxuryCountdown,
  },
  story: {
    luxury: StoryLuxury,
  },
  eventInfo: {
    split: EventInfoSplit,
    cards: EventInfoCards,
    luxury: EventInfoLuxury,
  },
  itinerary: {
    luxury: ItineraryLuxury,
  },
  accommodation: {
    luxury: AccommodationLuxury,
  },
  giftRegistry: {
    luxury: GiftRegistryLuxury,
  },
  rsvp: {
    luxury: RsvpLuxury,
  },
  invitation: {
    centered: InvitationCentered,
    editorial: InvitationEditorial,
    luxury: InvitationLuxury,
  },
  gallery: {
    classic: GalleryClassic,
  },
  guestPhotos: {
    stack: GuestPhotosStack,
    overlay: GuestPhotosOverlay,
    firebase: GuestPhotosFirebase,
    mosaic: GuestPhotosMosaic,
  },
  footer: {
    sage: FooterSage,
    minimal: FooterMinimal,
    luxury: FooterLuxury,
  },
} satisfies {
  nav: Record<NonNullable<TemplateConfig['nav']>, WeddingSectionComponent>
  hero: Record<NonNullable<TemplateConfig['hero']>, WeddingSectionComponent>
  intro: Record<NonNullable<TemplateConfig['intro']>, WeddingSectionComponent>
  story: Record<NonNullable<TemplateConfig['story']>, WeddingSectionComponent>
  eventInfo: Record<NonNullable<TemplateConfig['eventInfo']>, WeddingSectionComponent>
  itinerary: Record<NonNullable<TemplateConfig['itinerary']>, WeddingSectionComponent>
  accommodation: Record<NonNullable<TemplateConfig['accommodation']>, WeddingSectionComponent>
  giftRegistry: Record<NonNullable<TemplateConfig['giftRegistry']>, WeddingSectionComponent>
  rsvp: Record<NonNullable<TemplateConfig['rsvp']>, WeddingSectionComponent>
  invitation: Record<NonNullable<TemplateConfig['invitation']>, WeddingSectionComponent>
  gallery: Record<NonNullable<TemplateConfig['gallery']>, WeddingSectionComponent>
  guestPhotos: Record<NonNullable<TemplateConfig['guestPhotos']>, WeddingSectionComponent>
  footer: Record<NonNullable<TemplateConfig['footer']>, WeddingSectionComponent>
}
