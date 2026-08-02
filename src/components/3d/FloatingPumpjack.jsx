import { useRef, useEffect } from 'react'

function luminance(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b
}

export default function FloatingPumpjack({
  thresholdLow = 30,
  thresholdHigh = 60,
}) {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    const range = Math.max(thresholdHigh - thresholdLow, 1)
    const maxDim = window.innerWidth < 768 ? 320 : 640
    let lastFrame = -1
    let rafId

    function frame() {
      if (video.readyState < 2 || video.paused || video.ended) {
        rafId = requestAnimationFrame(frame)
        return
      }

      if (video.currentTime === lastFrame) {
        rafId = requestAnimationFrame(frame)
        return
      }
      lastFrame = video.currentTime

      const scale = Math.min(1, maxDim / Math.max(video.videoWidth, video.videoHeight))
      const w = Math.round(video.videoWidth * scale)
      const h = Math.round(video.videoHeight * scale)
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }

      ctx.drawImage(video, 0, 0, w, h)
      const imageData = ctx.getImageData(0, 0, w, h)
      const d = imageData.data

      for (let i = 0; i < d.length; i += 4) {
        const lum = luminance(d[i], d[i + 1], d[i + 2])
        if (lum < thresholdLow) {
          d[i + 3] = 0
        } else if (lum < thresholdHigh) {
          d[i + 3] = Math.round(((lum - thresholdLow) / range) * 255)
        }
      }

      ctx.putImageData(imageData, 0, 0)
      rafId = requestAnimationFrame(frame)
    }

    const start = () => {
      video.play()
      rafId = requestAnimationFrame(frame)
    }

    if (video.readyState >= 2) {
      start()
    } else {
      video.addEventListener('canplay', start, { once: true })
    }

    return () => cancelAnimationFrame(rafId)
  }, [thresholdLow, thresholdHigh])

  return (
    <>
      <video
        ref={videoRef}
        src="/engine.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ display: 'none' }}
      />
      <canvas
        ref={canvasRef}
        className="aspect-square"
        style={{ width: '100%', display: 'block' }}
      />
    </>
  )
}
