import Pareja from '../../assets/santorini/pareja.jpg'
import Paisaje2 from '../../assets/santorini/paisaje2.jpg'
import Paisaje1 from '../../assets/santorini/paisaje1.jpg'
import Entrada2 from '../../assets/santorini/entrada2.jpg'
import Fiesta from '../../assets/santorini/fiesta.jpg'
import Booking from '../../assets/santorini/booking.jpg'
import Paisaje3 from '../../assets/santorini/paisaje3.jpg'
import type { WeddingInfo } from '../../types/wedding'

export const danielEmilyWedding: WeddingInfo = {
  slug: 'daniel-emily',
  template: {
    page: 'luxury',
    nav: 'luxury',
    hero: 'luxury',
    intro: 'luxuryCountdown',
    story: 'luxury',
    eventInfo: 'luxury',
    itinerary: 'luxury',
    accommodation: 'luxury',
    giftRegistry: 'luxury',
    rsvp: 'luxury',
    guestPhotos: 'mosaic',
    footer: 'luxury',
  },
  theme: {
    palette: 'midnight',
  },
  couple: {
    bride: 'David',
    groom: 'Emily',
    monogram: 'D&E',
  },
  heroImage: Pareja,
  date: new Date('2026-09-12T17:00:00-06:00'),
  ceremonyText: '15.07.2026 · Ginestas, France',
  venueName: 'Chateau du Vallee',
  mapsUrl: 'https://www.google.com/maps?q=Jard%C3%ADn%20Bot%C3%A1nico%20Lankester,%20Costa%20Rica&output=embed',
  eventInfo: {
    date: '15.07.2026',
    time: '13:00',
    location: 'Chateau du Vallee',
    closingText: 'Chateau du Vallee',
    description:
      'Our wedding venue is a beautiful 19th-century chateau in the sunny south of France, set among vineyards and rolling countryside. It is the perfect setting for our celebration.',
    address: ['Chateau Du Vallee Es Pratx,', '40 Av. du Minervois,', '11120 Ginestas,', 'France'],
    transport: 'Taxis can be arranged from nearby towns.',
    mapLabel: 'View on map',
    backgroundImage: Paisaje1,
  },
  invitation: {
    eyebrow: 'Our story',
    title: 'An evening made for memories',
    description:
      'We are grateful to celebrate this chapter with the people who have shaped our story. Join us for an intimate evening of vows, dinner, music, and joy.',
  },
  story: {
    title: 'Our Story',
    lead: 'It all started with a chance meeting on vacation in a restaurant in Monaco that neither of us expected.',
    mainImage: Pareja,
    mainImageAlt: 'David and Emily looking over the coast',
    secondaryImage: Paisaje2,
    secondaryImageAlt: 'Terrace in the South of France',
    paragraphs: [
      'What began as a simple introduction quickly turned into something more. From our first conversations to the moments we have shared since, we have grown together in ways we never expected. Each moment brought us closer and created the foundation of what we have today.',
      'Through every high and low, we have stood side by side, learning and growing together. Now, we are so excited to celebrate the start of our next chapter with all of you.',
    ],
  },
  itinerary: {
    title: 'The Weekend Itinerary',
    days: [
      {
        eyebrow: 'Saturday, July 15th',
        title: 'Wedding Day',
        image: Entrada2,
        imageAlt: 'Ceremony setup overlooking the water',
        imagePosition: 'right',
        events: [
          {
            time: '13:00',
            title: 'Arrival',
            description:
              'Upon arrival at the chateau in the sunny south of France, you will be welcomed with drinks and light bites.',
          },
          {
            time: '14:30',
            title: 'Ceremony',
            description: 'Take your seats as we exchange our vows and celebrate the start of our next chapter together.',
          },
          {
            time: '17:00',
            title: 'Reception',
            description:
              'Join us in the courtyard for drinks, dinner, and dancing as we celebrate into the evening.',
          },
        ],
      },
      {
        eyebrow: 'Sunday, July 16th',
        title: 'The After-party',
        image: Fiesta,
        imageAlt: 'Poolside lunch setup for the after-party',
        imagePosition: 'left',
        events: [
          {
            time: '12:00',
            title: 'Welcome drinks',
            description: 'Join us by the pool for relaxed drinks and good company as we ease into the day together.',
          },
          {
            time: '13:15',
            title: 'BBQ lunch',
            description: 'Enjoy a laid-back poolside BBQ with fresh food, music, and plenty of time to unwind.',
          },
          {
            time: '15:00',
            title: 'Afternoon drinks',
            description: 'Spend the afternoon poolside with more drinks, music, and time to relax before we say goodbye.',
          },
        ],
      },
    ],
  },
  accommodation: {
    title: 'Where to Stay',
    description:
      'We have picked a handful of our favourite hotels and villas that are within easy reach of the venue. Make sure to book early as July is the busy season in the South of France.',
    image: Booking,
    imageAlt: 'Villa entrance surrounded by palms',
    options: [
      {
        title: 'Maison de Charme',
        description: '2min walk from venue',
        linkLabel: 'Book now',
        href: 'https://www.google.com/search?q=Maison+de+Charme',
      },
      {
        title: 'Appartement Charmant',
        description: '5min taxi ride from venue',
        linkLabel: 'Book now',
        href: 'https://www.google.com/search?q=Appartement+Charmant',
      },
      {
        title: 'Other options',
        linkLabel: 'Find other places to stay',
        href: 'https://www.google.com/search?q=hotels+near+Ginestas+France',
      },
    ],
  },
  giftRegistry: {
    eyebrow: 'Wedding gift registry',
    title: 'Having you join us at our wedding is already more than we could ask for.',
    description:
      'If you would like to contribute, we have put together a small registry or you can add to our honeymoon fund.',
    image: Paisaje3,
    imageAlt: 'View of the venue gardens by the water',
    links: [
      {
        label: 'View Gift Registry',
        href: 'https://www.google.com/search?q=wedding+gift+registry',
      },
      {
        label: 'Contribute to Honeymoon',
        href: 'https://www.google.com/search?q=honeymoon+fund',
      },
    ],
  },
  rsvp: {
    title: "We'll See You There",
    description: "Please let us know if you'll be joining us for our wedding. Kindly RSVP below and share any details we may need.",
    image: Paisaje2,
    imageAlt: 'Mountain lake view from the wedding venue',
    mealOptions: [
      { label: 'Beef', value: 'beef' },
      { label: 'Chicken', value: 'chicken' },
      { label: 'Vegetarian', value: 'vegetarian' },
      { label: 'Vegan', value: 'vegan' },
    ],
  },
  guestPhotos: {
    title: 'Share Your Photos',
    description:
      'Help us capture every moment. Use the event code to upload your favorite photos and see them appear in the gallery.',
    uploadCode: 'DYE2026',
    uploadStartsAt: '2026-06-01T00:00:00-06:00',
    uploadEndsAt: '2026-12-31T23:59:59-06:00',
    maxFileSizeMb: 5,
  },
  footer: {
    message: 'See you there',
    date: '12.09.2026',
  },
  details: [
    {
      number: '01',
      title: 'Ceremony',
      description: 'The garden ceremony begins at 5:00 p.m.',
    },
    {
      number: '02',
      title: 'Dinner',
      description: 'A candlelit dinner will follow after the ceremony.',
    },
    {
      number: '03',
      title: 'Dress code',
      description: 'Formal evening attire.',
    },
  ],
  gallery: [
    { src: Pareja, alt: 'David y Emily durante su sesion de fotos' },
    { src: Paisaje2, alt: 'Detalle romantico de la boda' },
    { src: Paisaje1, alt: 'Retrato editorial de la novia' },
    { src: Entrada2, alt: 'Celebracion con amigos y familia' },
    { src: Fiesta, alt: 'Celebracion con amigos y familia' },
    { src: Booking, alt: 'Celebracion con amigos y familia' },
  ],
}
