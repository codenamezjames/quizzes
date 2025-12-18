import { ref, onUnmounted } from 'vue'

export function useConfetti() {
  const canvas = ref(null)
  let animationId = null
  let particles = []

  const colors = ['#FF69B4', '#FFD700', '#9B59B6', '#3498DB', '#2ECC71', '#FF6B6B']

  function createParticle(x, y) {
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 20,
      vy: Math.random() * -18 - 8,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 15,
      gravity: 0.4,
      opacity: 1,
    }
  }

  function burst(x, y, count = 60) {
    if (!canvas.value) return

    for (let i = 0; i < count; i++) {
      particles.push(createParticle(x, y))
    }
    if (!animationId) animate()
  }

  function burstFromCenter(count = 80) {
    if (!canvas.value) return

    const centerX = canvas.value.width / 2
    const centerY = canvas.value.height / 2
    burst(centerX, centerY, count)
  }

  function animate() {
    const ctx = canvas.value?.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

    particles = particles.filter((p) => {
      p.x += p.vx
      p.y += p.vy
      p.vy += p.gravity
      p.rotation += p.rotationSpeed
      p.opacity -= 0.01

      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate((p.rotation * Math.PI) / 180)
      ctx.globalAlpha = Math.max(0, p.opacity)
      ctx.fillStyle = p.color
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
      ctx.restore()

      return p.y < canvas.value.height + 50 && p.opacity > 0
    })

    if (particles.length > 0) {
      animationId = requestAnimationFrame(animate)
    } else {
      animationId = null
      // Clear canvas when done
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
    }
  }

  function resizeCanvas() {
    if (canvas.value) {
      canvas.value.width = window.innerWidth
      canvas.value.height = window.innerHeight
    }
  }

  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId)
  })

  return {
    canvas,
    burst,
    burstFromCenter,
    resizeCanvas,
  }
}
