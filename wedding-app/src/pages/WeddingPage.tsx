import { MusicButton } from '../components/shared/MusicButton'
import { templateRegistry } from '../templates/templateRegistry'
import { getThemeStyle } from '../themes/themeRegistry'
import type { WeddingInfo } from '../types/wedding'
import styles from './WeddingPage.module.css'

type WeddingPageProps = {
  wedding: WeddingInfo
}

export function WeddingPage({ wedding }: WeddingPageProps) {
  const Nav = wedding.template.nav ? templateRegistry.nav[wedding.template.nav] : null
  const Hero = wedding.template.hero ? templateRegistry.hero[wedding.template.hero] : null
  const Intro = wedding.template.intro ? templateRegistry.intro[wedding.template.intro] : null
  const Story = wedding.template.story ? templateRegistry.story[wedding.template.story] : null
  const EventInfo = wedding.template.eventInfo ? templateRegistry.eventInfo[wedding.template.eventInfo] : null
  const Itinerary = wedding.template.itinerary ? templateRegistry.itinerary[wedding.template.itinerary] : null
  const Accommodation = wedding.template.accommodation
    ? templateRegistry.accommodation[wedding.template.accommodation]
    : null
  const GiftRegistry = wedding.template.giftRegistry
    ? templateRegistry.giftRegistry[wedding.template.giftRegistry]
    : null
  const Rsvp = wedding.template.rsvp ? templateRegistry.rsvp[wedding.template.rsvp] : null
  const Invitation = wedding.template.invitation ? templateRegistry.invitation[wedding.template.invitation] : null
  const Gallery = wedding.template.gallery ? templateRegistry.gallery[wedding.template.gallery] : null
  const GuestPhotos = wedding.template.guestPhotos ? templateRegistry.guestPhotos[wedding.template.guestPhotos] : null
  const Footer = wedding.template.footer ? templateRegistry.footer[wedding.template.footer] : null
  const themeStyle = getThemeStyle(wedding.theme.palette)
  const pageStyle = {
    ...themeStyle,
    ...(wedding.template.nav === 'luxury' ? { '--nav-height': '74px' } : {}),
  }

  return (
    <main className={styles.page} style={pageStyle}>
      {Nav && <Nav wedding={wedding} />}
      {Hero && <Hero wedding={wedding} />}
      {Intro && <Intro wedding={wedding} />}
      {Story && <Story wedding={wedding} />}
      {EventInfo && <EventInfo wedding={wedding} />}
      {Itinerary && <Itinerary wedding={wedding} />}
      {Accommodation && <Accommodation wedding={wedding} />}
      {GiftRegistry && <GiftRegistry wedding={wedding} />}
      {Rsvp && <Rsvp wedding={wedding} />}
      {Invitation && <Invitation wedding={wedding} />}
      {Gallery && <Gallery wedding={wedding} />}
      {GuestPhotos && <GuestPhotos wedding={wedding} />}
      {Footer && <Footer wedding={wedding} />}
      <MusicButton />
    </main>
  )
}
