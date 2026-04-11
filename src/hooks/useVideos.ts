import {useEffect, useState} from 'react'
import {sanityClient} from '../lib/sanityClient'

export type Video = {
  _id: string
  title: string
  youtubeId: string
  category: string
  isShort: boolean
  order: number
}

const QUERY = `*[_type == "video"] | order(order asc) {
  _id,
  title,
  youtubeId,
  category,
  isShort,
  order
}`

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    sanityClient
      .fetch<Video[]>(QUERY)
      .then((data) => {
        setVideos(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching videos:', err)
        setError('No se pudieron cargar los videos')
        setLoading(false)
      })
  }, [])

  return {videos, loading, error}
}