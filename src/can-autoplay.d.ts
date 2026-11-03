declare module 'can-autoplay' {
  interface AutoplayOptions {
    muted?: boolean
    inline?: boolean
    timeout?: number
  }

  interface AutoplayResult {
    result: boolean
    error: Error | null
  }

  const canAutoplay: {
    video(options?: AutoplayOptions): Promise<AutoplayResult>
    audio(options?: AutoplayOptions): Promise<AutoplayResult>
  }

  export default canAutoplay
}
