import type { WeddingInfo } from '../../../types/wedding'
import styles from './StoryLuxury.module.css'

type StoryLuxuryProps = {
  wedding: WeddingInfo
}

export function StoryLuxury({ wedding }: StoryLuxuryProps) {
  const story = wedding.story

  if (!story) {
    return null
  }

  const fallbackMainPhoto = wedding.gallery[0]
  const fallbackSecondaryPhoto = wedding.gallery[1] ?? wedding.gallery[0]
  const mainPhoto = {
    src: story.mainImage ?? fallbackMainPhoto.src,
    alt: story.mainImageAlt ?? fallbackMainPhoto.alt,
  }
  const secondaryPhoto = {
    src: story.secondaryImage ?? fallbackSecondaryPhoto.src,
    alt: story.secondaryImageAlt ?? fallbackSecondaryPhoto.alt,
  }

  return (
    <section className={styles.section} id="historia">
      <div className={styles.inner}>
        <div className={styles.collage} aria-label="Fotos de nuestra historia">
          <img className={styles.mainPhoto} src={mainPhoto.src} alt={mainPhoto.alt} />
          <img className={styles.secondaryPhoto} src={secondaryPhoto.src} alt={secondaryPhoto.alt} />
        </div>

        <div className={styles.copy}>
          <h2>{story.title}</h2>
          <p className={styles.lead}>{story.lead}</p>
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
