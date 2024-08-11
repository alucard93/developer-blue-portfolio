//@ts-nocheck
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Work() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(6)
  const videoRefs = useRef([])

  const token =
    'IGQWROVVZAmTHdhRTgtZA3VoWUh6WTZAxaDc2U2tBQ2ljRUI4bi1jejRhYVRIX0Rab3dWdFRIeDZAUOHVOT29tWld6OVhlLVROZA2I1NGlTazdoRjlIY3VSRkpzWjUtR05xX1YyRDVrM1h5VWZA6b3lGVTZAXSVphT082TWMZD'

  useEffect(() => {
    async function fetchPosts() {
      const apiFields =
        'media_count,media_type,permalink,media_url,caption,children{media_type,media_url}'
      try {
        setLoading(true)
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=${apiFields}&access_token=${token}`
        )
        const data = await response.json()
        console.log(data, 'data')

        setPosts(data.data)
      } catch (err) {
        console.log('Error:', err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    videoRefs.current.forEach((videoRef) => {
      if (videoRef) {
        videoRef.play().catch((error) => {
          console.log('Autoplay failed:', error)
        })
      }
    })
  }, [posts, visibleCount])

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3)
  }

  const renderMedia = (media, index, caption) => {
    return media.map(({ media_url, media_type, id }, mediaIndex) => {
      return (
        <div
          key={id}
          className="relative w-full h-[500px] rounded-lg shadow-lg overflow-hidden group"
        >
          {media_type === 'IMAGE' ? (
            <Image
              src={media_url}
              alt={`Instagram post ${id}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          ) : media_type === 'VIDEO' ? (
            <video
              className="w-full h-full object-cover rounded-lg"
              controls
              muted
              ref={(el) => (videoRefs.current[index * 100 + mediaIndex] = el)}
            >
              <source src={media_url} type="video/mp4" />
            </video>
          ) : null}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-sm p-2">{caption}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div className="loading-spinner mx-auto"></div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts &&
              posts
                .slice(0, visibleCount)
                .map(
                  (
                    { media_url, media_type, permalink, id, caption, children },
                    index
                  ) => (
                    <a
                      key={id}
                      className="block"
                      href={permalink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {media_type === 'CAROUSEL_ALBUM' ? (
                        <div className="space-y-4">
                          {renderMedia(children.data, index, caption)}
                        </div>
                      ) : (
                        renderMedia(
                          [{ media_url, media_type, id }],
                          index,
                          caption
                        )
                      )}
                    </a>
                  )
                )}
          </div>
          {visibleCount < posts?.length && (
            <div className="mt-8 text-center">
              <button
                onClick={handleShowMore}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Ver +
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
