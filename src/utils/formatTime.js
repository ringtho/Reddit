import { formatDistanceToNow } from 'date-fns'

export const formatTime = (time) => {
  if (time) {
    const date = new Date(time * 1000)
    const formattedTime = formatDistanceToNow(date, { includeSeconds: true })
    return formattedTime
  }
}
