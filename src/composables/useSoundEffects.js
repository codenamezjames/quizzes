import { ref } from 'vue'

const enabled = ref(true)
const volume = ref(0.5)
const sounds = {}

// Sounds loaded on demand

// Initialize sounds lazily on first interaction
let initialized = false

function initSounds() {
  if (initialized) return
  initialized = true

  // Use simple beep/tone generation for now (no external files needed)
  const audioContext = new (window.AudioContext || window.webkitAudioContext)()

  sounds.correct = () => playTone(audioContext, 523.25, 0.15, 'sine') // C5
  sounds.incorrect = () => playTone(audioContext, 200, 0.2, 'sawtooth')
  sounds.celebration = () => {
    playTone(audioContext, 523.25, 0.1, 'sine') // C5
    setTimeout(() => playTone(audioContext, 659.25, 0.1, 'sine'), 100) // E5
    setTimeout(() => playTone(audioContext, 783.99, 0.15, 'sine'), 200) // G5
  }
  sounds.click = () => playTone(audioContext, 800, 0.05, 'square')
}

function playTone(ctx, frequency, duration, type = 'sine') {
  if (!enabled.value) return

  const oscillator = ctx.createOscillator()
  const gainNode = ctx.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(ctx.destination)

  oscillator.frequency.value = frequency
  oscillator.type = type
  gainNode.gain.value = volume.value * 0.3

  oscillator.start()
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration)
  oscillator.stop(ctx.currentTime + duration)
}

export function useSoundEffects() {
  const playCorrect = () => {
    initSounds()
    sounds.correct?.()
  }

  const playIncorrect = () => {
    initSounds()
    sounds.incorrect?.()
  }

  const playCelebration = () => {
    initSounds()
    sounds.celebration?.()
  }

  const playClick = () => {
    initSounds()
    sounds.click?.()
  }

  const toggleSound = () => {
    enabled.value = !enabled.value
  }

  const setVolume = (vol) => {
    volume.value = vol
  }

  return {
    enabled,
    volume,
    playCorrect,
    playIncorrect,
    playCelebration,
    playClick,
    toggleSound,
    setVolume,
  }
}
