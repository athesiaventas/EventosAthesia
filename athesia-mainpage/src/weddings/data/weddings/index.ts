import type { WeddingInfo } from '../../types/wedding'
import { anaCarlosWedding } from './ana-carlos'
import { danielEmilyWedding } from './daniel-emily'
import { mariaJoseWedding } from './maria-jose'

export const weddings: WeddingInfo[] = [mariaJoseWedding, anaCarlosWedding, danielEmilyWedding]

export const defaultWedding = mariaJoseWedding

export function findWeddingBySlug(slug: string | undefined) {
  if (!slug) {
    return defaultWedding
  }

  return weddings.find((wedding) => wedding.slug === slug)
}
