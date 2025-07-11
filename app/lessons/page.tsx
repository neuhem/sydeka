import { getAllLessons, type Lesson } from '@/lib/content'
import LessonsClient from './LessonsClient'

export default function LessonsPage() {
  const lessons = getAllLessons()

  return <LessonsClient lessons={lessons} />
} 