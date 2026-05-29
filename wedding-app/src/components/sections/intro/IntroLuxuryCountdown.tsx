import { useMemo } from 'react'
import { useCountdown } from '../../../hooks/useCountdown'
import type { WeddingInfo } from '../../../types/wedding'
import styles from './IntroLuxuryCountdown.module.css'

type IntroLuxuryCountdownProps = {
  wedding: WeddingInfo
}

export function IntroLuxuryCountdown({ wedding }: IntroLuxuryCountdownProps) {
  const countdown = useCountdown(wedding.date)
  const items = useMemo(
    () => [
      { value: countdown.days, label: 'Days' },
      { value: countdown.hours, label: 'Hours' },
      { value: countdown.minutes, label: 'Minutes' },
      { value: countdown.seconds, label: 'Seconds' },
    ],
    [countdown],
  )

  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <h2>
          We&apos;re getting married! And we&apos;d love for you to join us on our special day.
        </h2>
        <p>
          We&apos;re heading to the South of France for a two-day celebration in Ginestas. You&apos;ll find everything
          here, from the plans and location to travel details and RSVP. See you this summer!
        </p>
      </div>

      <div className={styles.countdown} aria-label="Countdown to the wedding">
        {items.map((item, index) => (
          <div className={styles.item} key={item.label}>
            <strong>{String(item.value).padStart(2, '0')}</strong>
            <span>{item.label}</span>
            {index < items.length - 1 && <i aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  )
}
